// ============================================================
// ÚNICO ARQUIVO PARA EDITAR TEXTOS, CONTATOS E IMAGENS.
// Todo conteúdo aqui é DEMONSTRATIVO — substitua pelos dados reais.
// ============================================================

export const clinic = {
  name: 'Clínica modelo',
  tagline: 'Estética avançada',
  description:
    'Clínica de estética com atendimento individualizado, tecnologia e cuidado em cada etapa. (Texto demonstrativo)',
  whatsapp: '5500000000000', // DDI + DDD + número, só dígitos
  phone: '(00) 00000-0000',
  address: 'Rua Exemplo, 000 — Cidade, UF',
  hours: 'Segunda a sexta, 9h às 18h · Sábado, 9h às 13h',
  instagram: '@suaclinica',
  instagramUrl: 'https://instagram.com/',
  privacyUrl: '#',
  whatsappGreeting: 'Olá! Gostaria de agendar uma avaliação.',
};

const img = (name) => `images/procedures/${name}.webp`;

export const categories = [
  { id: 'harmonizacao', label: 'Harmonização facial' },
  { id: 'faciais', label: 'Tratamentos faciais' },
  { id: 'corporais', label: 'Tratamentos corporais' },
];

// pos = object-position, para ajustar o enquadramento de cada foto
export const procedures = {
  harmonizacao: [
    { title: 'Preenchimento labial', text: 'Definição e hidratação dos lábios, respeitando a proporção do seu rosto.', img: img('smile'), pos: '60% 78%' },
    { title: 'Toxina botulínica', text: 'Suaviza linhas de expressão mantendo a naturalidade do olhar.', img: img('injection'), pos: '50% 30%' },
    { title: 'Preenchimento de olheiras', text: 'Avaliação individual da região dos olhos para um aspecto mais descansado.', img: img('glow'), pos: '50% 35%' },
    { title: 'Bioestimuladores de colágeno', text: 'Estímulo da firmeza da pele de forma gradual e planejada.', img: img('hand'), pos: '50% 40%' },
    { title: 'Contorno da mandíbula', text: 'Planejamento facial para valorizar a harmonia do contorno.', img: img('back'), pos: '40% 55%' },
    { title: 'Contorno do mento', text: 'Equilíbrio entre as proporções do perfil, com avaliação prévia.', img: img('hands'), pos: '50% 75%' },
  ],
  faciais: [
    { title: 'Limpeza de pele', text: 'Higienização profunda e cuidados adequados ao seu tipo de pele.', img: img('mask'), pos: '50% 50%' },
    { title: 'Peeling', text: 'Renovação da pele com protocolo definido após avaliação.', img: img('glow'), pos: '50% 60%' },
    { title: 'Microagulhamento', text: 'Estímulo natural da pele com acompanhamento profissional.', img: img('injection'), pos: '40% 35%' },
    { title: 'Rejuvenescimento', text: 'Protocolos combinados para uma pele com viço e uniformidade.', img: img('light'), pos: '50% 30%' },
    { title: 'Hidratação profunda', text: 'Ativos selecionados para devolver conforto e luminosidade.', img: img('hands'), pos: '50% 30%' },
    { title: 'Cuidado com os olhos', text: 'Tratamento delicado para a região do contorno dos olhos.', img: img('smile'), pos: '55% 38%' },
  ],
  corporais: [
    { title: 'Firmeza da pele', text: 'Protocolos para cuidar da textura e da firmeza corporal.', img: img('back'), pos: '60% 88%' },
    { title: 'Drenagem linfática', text: 'Técnica manual que promove sensação de leveza e bem-estar.', img: img('mask'), pos: '50% 92%' },
    { title: 'Gordura localizada', text: 'Avaliação e plano individual para cada objetivo corporal.', img: img('light'), pos: '60% 96%' },
    { title: 'Protocolos personalizados', text: 'Combinação de técnicas montada a partir da sua avaliação.', img: img('hand'), pos: '40% 96%' },
    { title: 'Massagem modeladora', text: 'Manobras específicas para contorno e relaxamento.', img: img('glow'), pos: '70% 95%' },
    { title: 'Colo e pescoço', text: 'Cuidados dedicados a regiões que merecem atenção.', img: img('hands'), pos: '80% 92%' },
  ],
};

// IMAGENS ILUSTRATIVAS: o "antes" é só uma simulação visual (filtro de cor).
// Substitua por fotos reais e AUTORIZADAS informando before e after.
export const results = [
  { after: 'images/results/r1.webp', before: null, caption: 'Pele luminosa — imagem ilustrativa' },
  { after: 'images/results/r2.webp', before: null, caption: 'Textura uniforme — imagem ilustrativa' },
  { after: 'images/results/r3.webp', before: null, caption: 'Viço e hidratação — imagem ilustrativa' },
];

// Apenas depoimentos reais e autorizados: { text: '...', author: 'Nome' }
export const reviews = [];
