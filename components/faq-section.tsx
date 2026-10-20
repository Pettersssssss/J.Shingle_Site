import { faqs } from "@/data/site";

export function FAQSection() {
  return <section className="section shell" id="faq" aria-labelledby="faq-title"><header className="center-heading"><p className="eyebrow eyebrow-dark">Informação direta</p><h2 id="faq-title">Dúvidas frequentes.</h2></header><div className="faq-list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>;
}
