"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export type BentoGalleryImage = {
  id: number | string;
  title: string;
  url: string;
  alt: string;
  span?: string;
};

type BentoGalleryProps = {
  imageItems: BentoGalleryImage[];
  title: string;
  description: string;
};

type ImageSize = { width: number; height: number };

export default function InteractiveImageBentoGallery({
  imageItems,
  title,
  description,
}: BentoGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<BentoGalleryImage | null>(null);
  const [imageSizes, setImageSizes] = useState<Record<string, ImageSize>>({});
  const [modalSize, setModalSize] = useState<ImageSize>({ width: 960, height: 960 });
  const dialogRef = useRef<HTMLDialogElement>(null);

  function rememberImageSize(id: number | string, image: HTMLImageElement) {
    setImageSizes((sizes) => ({
      ...sizes,
      [String(id)]: { width: image.naturalWidth, height: image.naturalHeight },
    }));
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedItem && !dialog.open) dialog.showModal();
    if (!selectedItem && dialog.open) dialog.close();
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem) return;
    const imageSize = imageSizes[String(selectedItem.id)] ?? { width: 1, height: 1 };
    const ratio = imageSize.width / imageSize.height;
    const maxWidth = Math.min(1200, window.innerWidth - 32);
    const maxHeight = window.innerHeight - 32;
    const width = Math.max(1, Math.min(maxWidth, maxHeight * ratio));
    setModalSize({ width, height: width / ratio });
  }, [selectedItem, imageSizes]);

  const itemStyle = (item: BentoGalleryImage): CSSProperties => {
    const size = imageSizes[String(item.id)];
    return { aspectRatio: size ? `${size.width} / ${size.height}` : "1 / 1" };
  };

  const photoButton = (item: BentoGalleryImage, className: string) => (
    <button
      className={className}
      key={item.id}
      type="button"
      style={itemStyle(item)}
      onClick={() => setSelectedItem(item)}
      aria-label={`Ampliar ${item.title}`}
    >
      <Image
        src={item.url}
        alt={item.alt}
        fill
        sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 25vw"
        quality={100}
        onLoad={(event) => rememberImageSize(item.id, event.currentTarget)}
      />
    </button>
  );

  return (
    <section className="work-image-gallery" aria-label={`Galeria de ${title}`}>
      <div className="work-bento-section">
        <header className="work-bento-header">
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        <div className="work-bento-track">
          {imageItems.map((item) => photoButton(item, `work-bento-card ${item.span ?? ""}`))}
        </div>
      </div>

      <div className="work-mobile-gallery">
        <header className="work-mobile-gallery-heading">
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        {imageItems[0] && photoButton(imageItems[0], "work-mobile-gallery-cover")}
        {imageItems.length > 1 && (
          <>
            <h2>Galeria da obra</h2>
            <div className="work-mobile-gallery-grid">
              {imageItems.slice(1).map((item) => photoButton(item, "work-mobile-gallery-item"))}
            </div>
          </>
        )}
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
          <div
            className="work-bento-dialog-content"
            style={{ width: `${modalSize.width}px`, height: `${modalSize.height}px` }}
          >
            <button
              className="work-bento-dialog-close"
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar foto ampliada"
              autoFocus
            >
              <X size={22} aria-hidden="true" />
            </button>
            <Image src={selectedItem.url} alt={selectedItem.alt} fill sizes="100vw" unoptimized />
          </div>
        )}
      </dialog>
    </section>
  );
}
