"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type BentoGalleryImage = {
  id: number | string;
  title: string;
  desc: string;
  url: string;
  alt: string;
  span?: string;
};

type BentoGalleryProps = {
  imageItems: BentoGalleryImage[];
  title: string;
  description: string;
};

export default function InteractiveImageBentoGallery({
  imageItems,
  title,
  description,
}: BentoGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<BentoGalleryImage | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dragRef = useRef({ pointerId: -1, startX: 0, scrollLeft: 0, moved: false });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedItem && !dialog.open) dialog.showModal();
    if (!selectedItem && dialog.open) dialog.close();
  }, [selectedItem]);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: viewport.scrollLeft,
      moved: false,
    };
    const captureTarget = event.target;
    if (captureTarget instanceof HTMLElement) captureTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const viewport = viewportRef.current;
    if (drag.pointerId !== event.pointerId || !viewport) return;

    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 5) {
      drag.moved = true;
      setIsDragging(true);
    }
    if (drag.moved) viewport.scrollLeft = drag.scrollLeft - distance;
  }

  function handlePointerEnd(event: ReactPointerEvent<HTMLDivElement>) {
    if (dragRef.current.pointerId !== event.pointerId) return;
    dragRef.current.pointerId = -1;
    setIsDragging(false);
    if (dragRef.current.moved) {
      window.setTimeout(() => {
        dragRef.current.moved = false;
      }, 0);
    }
  }

  return (
    <section className="work-bento-section" aria-label={`Galeria de ${title}`}>
      <header className="work-bento-header">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Arraste para explorar · selecione uma foto para ampliar</span>
      </header>

      <div
        ref={viewportRef}
        className={cn("work-bento-viewport", isDragging && "is-dragging")}
        role="region"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        aria-label="Galeria de fotos. Arraste para os lados para ver mais imagens."
      >
        <div className="work-bento-track">
          {imageItems.map((item) => (
            <button
              className={cn("work-bento-card", item.span)}
              key={item.id}
              type="button"
              onClick={() => {
                if (dragRef.current.moved) {
                  dragRef.current.moved = false;
                  return;
                }
                setSelectedItem(item);
              }}
              aria-label={`Ampliar ${item.title}: ${item.desc}`}
            >
              <Image src={item.url} alt={item.alt} fill sizes="(max-width: 650px) 76vw, (max-width: 1050px) 40vw, 30vw" unoptimized />
              <span className="work-bento-shade" aria-hidden="true" />
              <span className="work-bento-caption">
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="work-bento-dialog"
        aria-label={selectedItem ? `Foto ampliada: ${selectedItem.title}` : "Foto ampliada"}
        onClose={() => setSelectedItem(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setSelectedItem(null);
        }}
      >
        {selectedItem && (
          <div className="work-bento-dialog-content">
            <button
              className="work-bento-dialog-close"
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar foto ampliada"
              autoFocus
            >
              <X size={22} aria-hidden="true" />
            </button>
            <Image src={selectedItem.url} alt={selectedItem.alt} fill sizes="(max-width: 900px) 96vw, 1200px" unoptimized />
            <p><strong>{selectedItem.title}</strong><span>{selectedItem.desc}</span></p>
          </div>
        )}
      </dialog>
    </section>
  );
}
