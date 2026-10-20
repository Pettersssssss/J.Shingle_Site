"use client";

import Image from "next/image";
import Link from "@/components/site-link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Dialog } from "radix-ui";
import { company } from "@/data/site";

const items = [
  ["Obras", "/#obras"], ["Especialidades", "/#especialidades"], ["Telhas", "/telhas"],
  ["Acabamento", "/#acabamento"], ["Instagram", "/#instagram"], ["FAQ", "/#faq"], ["Contato", "/#contato"],
];

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${dark ? "site-header-dark" : ""}`}>
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="J.SHINGLE — início">
          <Image src={dark ? "/jshingle-logo-light.png" : "/jshingle-logo-dark.png"} alt="" width={82} height={82} priority={dark} />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {items.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          <a href={company.whatsappUrl} className="nav-cta">Solicitar projeto</a>
        </nav>
        <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild><button className="menu-button" type="button" aria-label="Abrir menu"><Menu /></button></Dialog.Trigger>
        <Dialog.Portal><Dialog.Content className="mobile-panel is-open" aria-describedby={undefined}>
        <Dialog.Title className="sr-only">Navegação J.SHINGLE</Dialog.Title>
        <div className="mobile-panel-top"><Image src="/jshingle-logo-light.png" alt="J.SHINGLE" width={128} height={128} /><Dialog.Close asChild><button type="button" aria-label="Fechar menu"><X /></button></Dialog.Close></div>
        <nav aria-label="Navegação mobile">
          {items.map(([label, href]) => <Link key={label} href={href} onClick={() => setTimeout(() => setOpen(false), 0)}>{label}</Link>)}
          <a href={company.whatsappUrl}>Solicitar projeto</a>
        </nav>
        </Dialog.Content></Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
