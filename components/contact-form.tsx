"use client";

import { FormEvent, useEffect, useState } from "react";
import { company, shingles } from "@/data/site";

type FormState = { name: string; phone: string; city: string; state: string; project: string; roof: string; start: string; message: string };
const initial: FormState = { name: "", phone: "", city: "", state: "", project: "", roof: "", start: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const model = shingles.find((item) => item.slug === query.get("telha"));
    if (!model) return;
    const tone = model.tones.find((option) => option.name === query.get("cor"));
    setForm((current) => ({ ...current, roof: `Telha Shingle ${model.name}${tone ? ` — ${tone.name}` : ""}` }));
  }, []);
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.state || !form.project) { setError("Preencha nome, telefone, cidade, estado e tipo de projeto."); return; }
    setError("");
    const text = `Olá, J.SHINGLE.\n\nMeu nome é ${form.name} e gostaria de apresentar um projeto.\n\nTelefone: ${form.phone}\nLocal: ${form.city} / ${form.state}\nTipo de projeto: ${form.project}\nTipo de cobertura: ${form.roof || "A definir"}\nPrevisão: ${form.start || "Não informada"}\n\nMensagem:\n${form.message || "Sem informações adicionais."}`;
    window.location.assign(`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(text)}`);
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-grid"><label>Nome*<input value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label><label>Telefone*<input value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" inputMode="tel" /></label><label>Cidade*<input value={form.city} onChange={(e) => update("city", e.target.value)} autoComplete="address-level2" /></label><label>Estado*<input value={form.state} onChange={(e) => update("state", e.target.value)} autoComplete="address-level1" maxLength={2} placeholder="UF" /></label><label>Tipo de projeto*<select value={form.project} onChange={(e) => update("project", e.target.value)}><option value="">Selecione</option><option>Domo geodésico</option><option>Residência</option><option>Chalé</option><option>Hospedagem</option><option>Projeto comercial</option><option>Outro</option></select></label><label>Tipo de cobertura<input value={form.roof} onChange={(e) => update("roof", e.target.value)} placeholder="Shingle, reforma ou a definir" /></label><label>Previsão de início<input value={form.start} onChange={(e) => update("start", e.target.value)} placeholder="Ex.: segundo semestre" /></label><label className="full-field">Mensagem<textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={5} /></label></div>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-white" type="submit">{company.whatsappNumber ? "Enviar projeto" : "Preparar mensagem"}</button>{!company.whatsappNumber && <p className="form-note">O WhatsApp oficial ainda não foi informado. A mensagem é preparada para compartilhamento, mas não é enviada diretamente à J.SHINGLE.</p>}</form>;
}
