export const siteConfig = {
  checkoutUrl: 'https://pay.hotmart.com/SEU_CODIGO_AQUI',
  email: 'contato@dotabuleiroaomercado.com.br',
  social: {
    facebook: 'https://facebook.com/dotabuleiroaomercado',
    instagram: 'https://instagram.com/dotabuleiroaomercado',
    linkedin: 'https://linkedin.com/company/dotabuleiroaomercado',
  },
  product: {
    name: 'Do Tabuleiro ao Mercado — E-book',
    price: 97,
    oldPrice: 197,
    currency: 'BRL',
    id: 'ebook-tabuleiro',
  },
  analytics: {
    enabled: false,
    measurementId: 'G-XXXXXXXXXX',
  },
} as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackCheckout() {
  if (!siteConfig.analytics.enabled || !window.gtag) return;

  window.gtag('event', 'begin_checkout', {
    currency: siteConfig.product.currency,
    value: siteConfig.product.price,
    items: [
      {
        item_id: siteConfig.product.id,
        item_name: siteConfig.product.name,
        price: siteConfig.product.price,
        quantity: 1,
      },
    ],
  });
}
