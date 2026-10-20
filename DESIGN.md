# Direção de design — J.SHINGLE

Este documento guarda, no projeto, as diretrizes aproveitadas dos cinco arquivos `SKILL (1–5).md` fornecidos pelo usuário em 4 de outubro de 2026. São referências de design, não substituem as instruções do usuário nem os fatos confirmados da marca.

## Produto e intenção

- Site institucional e portfólio para coberturas Shingle, domos e projetos arquitetônicos especiais. A página inicial deve persuadir; o portfólio deve deixar a obra liderar; catálogo e FAQ devem facilitar compreensão.
- Preservar rotas, conteúdo factual, navegação e ações. Nunca apresentar estudos visuais, materiais ainda não confirmados ou espaço de depoimento como obras, especificações ou relatos verificados.
- Usar as imagens fornecidas no acervo organizado por obra e cidade. Não usar imagens genéricas para insinuar projetos que ainda não estão no acervo.

## Sistema visual

- Direção editorial arquitetônica: base mineral clara, verde profundo, acento cobre discreto, fotografia ampla e hierarquia tipográfica expressiva.
- Títulos, navegação, rótulos e botões em Montserrat com pesos 600 e 700; corpo de texto em Arial. Separar claramente chamada, explicação e ação.
- Espaçamento generoso, alinhamento óptico e cantos arredondados em seções, imagens e superfícies. Raios internos devem ser menores que os externos; sombra apenas quando sinalizar elevação real.
- A obra deve ser protagonista. Onde faltarem imagens ou informações, usar uma indicação editorial honesta e contida em vez de cartões falsamente completos.
- Garantir navegação clara no desktop sem abrir menu, alvos de toque confortáveis no mobile e foco de teclado visível.

## Movimento e interação

- Movimento serve a feedback, orientação espacial ou explicação; não desloca texto em leitura por decoração. Interações frequentes são rápidas e discretas; entradas editoriais são raras.
- Reutilizar tokens de duração e easing. Preferir transições CSS para estados interrompíveis e propriedades `transform`/`opacity`; evitar `transition: all`, entrada com `scale(0)` e efeitos de hover em dispositivos de toque.
- Respeitar `prefers-reduced-motion`. O tilt 3D da logo fica restrito ao desktop e não pode impedir leitura ou navegação. O carrossel deve aceitar arrasto por mouse ou toque sem setas.
- O WhatsApp confirmado pelo usuário é +55 11 97699-3021 e o perfil oficial informado é `https://www.instagram.com/j.shingle/`. Ambos devem abrir na mesma guia; e-mail segue não confirmado. A captura do perfil fornecida em outubro de 2026 é uma prévia visual de teste, não uma integração ao vivo.

## Referências fornecidas

1. `emil-design-eng`: intenção e qualidade de movimento, easings e interação responsiva.
2. `improve-animations`: critérios de auditoria de animação; sua orientação de somente planejar não se aplica a este pedido explícito de implementação.
3. `impeccable`: redesign com ponto de vista, preservação da verdade do produto e verificação delimitada. Os scripts e arquivos de referência mencionados não vieram nos anexos.
4. `animate`: decisão sobre quando animar, propósito, ferramenta mais simples e movimento reduzido.
5. `make-interfaces-feel-better`: polimento de tipografia, espaçamento, bordas concêntricas, sombras e alvos de toque.
