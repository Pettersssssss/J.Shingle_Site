"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";

export function PhotoZoom({ src, alt, className = "", caption }: { src: string; alt: string; className?: string; caption?: string }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  function show() {
    setOpen(true);
    requestAnimationFrame(() => dialog.current?.showModal());
  }

  function close() {
    dialog.current?.close();
    setOpen(false);
  }

  return <>
    <button className={`photo-zoom-trigger ${className}`} type="button" onClick={show} aria-label={`Ampliar: ${alt}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 40vw" unoptimized />
      {caption && <span>{caption}</span>}
    </button>
    <dialog ref={dialog} className="photo-zoom-dialog" aria-label={`Imagem ampliada: ${alt}`} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === dialog.current) close(); }}>
      {open && <div className="photo-zoom-content">
        <button className="photo-zoom-close" type="button" onClick={close} aria-label="Fechar imagem ampliada"><X size={22} /></button>
        <Image src={src} alt={alt} fill sizes="100vw" unoptimized />
      </div>}
    </dialog>
  </>;
}
