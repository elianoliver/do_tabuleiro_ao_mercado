<p align="center">
  <img src="public/logo.svg" width="80" alt="Logo Do Tabuleiro ao Mercado" />
</p>

<h1 align="center">Do Tabuleiro ao Mercado</h1>

<p align="center">
  Uma landing page para apresentar um e-book de empreendedorismo que conecta estratégia, jogos e decisões de negócio.
</p>

<p align="center">
  <a href="https://do-tabuleiro-ao-mercado.elian-oliveira.chatgpt.site">Acessar o site</a> ·
  <a href="#telas">Ver telas</a> ·
  <a href="#executar-localmente">Executar localmente</a>
</p>

## Sobre o projeto

Interface responsiva desenvolvida com React, TypeScript e Vite. A página reúne apresentação do produto, depoimentos, benefícios, prévia do conteúdo, oferta e perguntas frequentes em uma experiência de navegação única.

A identidade visual combina tons de azul, laranja e dourado com elementos inspirados em jogos de tabuleiro. Textos e configurações ficam separados da composição da interface para facilitar a manutenção.

## Telas

Capturas reais da aplicação executada localmente. Clique nas imagens para visualizar em tamanho original.

### Apresentação — desktop

[![Tela inicial com apresentação do e-book e chamadas para ação](docs/screenshots/desktop-inicio.png)](docs/screenshots/desktop-inicio.png)

### Prévia do conteúdo — desktop

[![Seção de conteúdo com índice de capítulos e prévia do e-book](docs/screenshots/desktop-conteudo.png)](docs/screenshots/desktop-conteudo.png)

### Oferta — desktop

[![Seção de compra com preço, itens inclusos e acesso ao checkout](docs/screenshots/desktop-oferta.png)](docs/screenshots/desktop-oferta.png)

### Experiência mobile

<p align="center">
  <a href="docs/screenshots/mobile-inicio.png"><img src="docs/screenshots/mobile-inicio.png" width="300" alt="Apresentação do e-book em uma tela de celular" /></a>
  &nbsp;
  <a href="docs/screenshots/mobile-menu.png"><img src="docs/screenshots/mobile-menu.png" width="300" alt="Menu de navegação expandido em um celular" /></a>
</p>

## Recursos

- Layout responsivo e navegação por âncoras entre as seções.
- Menu mobile com fechamento ao selecionar um destino ou pressionar `Escape`.
- Prévia interativa com abas e índice de seis capítulos expansíveis.
- Perguntas frequentes em formato de acordeão.
- Oferta com preço configurável e redirecionamento para checkout externo.
- Função para registrar o evento `begin_checkout` quando o Google Analytics estiver integrado.
- Metadados Open Graph e Twitter Card para compartilhamento.
- Link para pular ao conteúdo, estados ARIA nos controles e suporte à preferência por movimento reduzido.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Componentes e estado das interações |
| TypeScript | Tipagem e verificação estática |
| Vite 8 | Servidor de desenvolvimento e build de produção |
| Lucide React | Ícones da interface |
| CSS | Estilos, responsividade e animações |

## Executar localmente

**Pré-requisitos:** Git, Node.js 22.12+ (ou 20.19+ na linha 20) e npm.

```bash
git clone https://github.com/elianoliver/do_tabuleiro_ao_mercado.git
cd do_tabuleiro_ao_mercado
npm ci
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run typecheck` | Verifica os tipos sem gerar arquivos |
| `npm run build` | Verifica os tipos e gera o build em `dist/` |
| `npm run preview` | Serve o build localmente para conferência |

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

O preview costuma ficar disponível em `http://localhost:4173`. Ele exige um build prévio e serve apenas para conferência local.

## Personalização

| Arquivo | O que editar |
| --- | --- |
| `src/config.ts` | URL de checkout, contato, redes sociais, produto, preços e opções de Analytics |
| `src/content.ts` | Menu, depoimentos, benefícios, capítulos, prévias e FAQ |
| `src/App.tsx` | Composição das seções, interações e textos presentes nos componentes |
| `src/styles.css` | Cores, tipografia, espaçamento, responsividade e animações |
| `index.html` | Título, descrição, URL canônica e metadados de compartilhamento |
| `public/` | Logotipos, imagem do e-book, favicon e imagem social |

### Checkout e Analytics

O checkout ainda utiliza o marcador `https://pay.hotmart.com/SEU_CODIGO_AQUI`. Substitua `siteConfig.checkoutUrl` pelo endereço real antes de disponibilizar a compra. Revise também preços, contato e redes sociais.

O Analytics vem desativado. A função `trackCheckout()` só envia o evento quando `analytics.enabled` é `true` e `window.gtag` está disponível. O projeto não carrega nem inicializa o Google Analytics automaticamente: preencher `measurementId` sozinho não ativa a integração.

## Estrutura

```text
do_tabuleiro_ao_mercado/
├── docs/
│   └── screenshots/       # Capturas usadas neste README
├── public/                # Recursos estáticos
├── src/
│   ├── App.tsx            # Seções e interações
│   ├── config.ts          # Configurações e evento de checkout
│   ├── content.ts         # Conteúdo editável
│   ├── main.tsx           # Entrada da aplicação
│   ├── styles.css         # Estilos globais e responsividade
│   └── vite-env.d.ts      # Tipos do ambiente Vite
├── index.html             # Documento HTML e metadados
├── package.json           # Dependências e scripts
├── package-lock.json      # Versões fixadas das dependências
├── tsconfig.json          # Configuração do TypeScript
└── vite.config.ts         # Configuração do Vite
```

## Publicação

O build gera arquivos estáticos em `dist/`, que podem ser publicados em uma hospedagem compatível. A configuração existente em `.openai/hosting.json` aponta para essa pasta.

Ao alterar o domínio, atualize a URL canônica e os endereços de Open Graph e Twitter em `index.html`. Os recursos usam caminhos absolutos a partir da raiz; publicar em um subdiretório exige revisar esses caminhos e a configuração de base do Vite.

---

Desenvolvido por [Elian Oliveira](https://elian.dev.br/).
