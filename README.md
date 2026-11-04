# TIentrega — Landing page modelo para clínicas de estética

Site demonstrativo criado pela TIentrega para apresentar a clínicas de estética. O nome da clínica, contatos, textos e resultados são exemplos e devem ser substituídos por informações reais antes da publicação.

HTML + Tailwind CSS v4 + JavaScript puro, com Vite. Sem frameworks e sem dependências de runtime.

## Instalar e rodar
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera /dist
npm run preview    # testa o build
```
Requer Node 20.19+.

## Onde editar
- **Textos, contatos, procedimentos, resultados e avaliações:** `src/data/content.js` (nome, WhatsApp, telefone, endereço, horário, Instagram).
- **Textos fixos da página (hero, sobre, diferenciais):** `index.html`.
- **Imagens:** `public/images/` (`hero`, `procedures`, `results`, `team`). Mantenha os nomes ou altere os caminhos em `content.js`/`index.html`. Ajuste o enquadramento com `pos` (object-position) em `content.js`.
- **Cores e fontes:** bloco `@theme` no topo de `src/styles.css`. As fontes vêm do Google Fonts (link em `index.html`).

## Pontos de atenção
- Todo conteúdo é **demonstrativo**: nome, telefone (`5500000000000`), endereço, textos e qualificações. Substitua antes de publicar.
- **Resultados:** o "antes" é apenas uma simulação de cor sobre a mesma foto, marcada como ilustrativa. Use somente fotos reais e autorizadas (`before` e `after` em `content.js`).
- **Avaliações:** `reviews` em `content.js` está vazio de propósito.
- **Formulário:** valida os campos e abre o WhatsApp com a mensagem pronta. Nada é enviado automaticamente; a página só confirma que o WhatsApp foi aberto.
- As fotos recebidas são em sua maioria rostos; as categorias corporais usam recortes de ombros/pescoço. Troque por fotos corporais quando houver.
