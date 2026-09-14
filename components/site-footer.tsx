import { Brand } from '@/components/brand';
import { restaurant } from '@/lib/restaurant';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Brand />
        <p>Boa comida e bons encontros.</p>
        <a
          className="social-link"
          href={restaurant.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="instagram-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle className="instagram-icon-dot" cx="17.3" cy="6.7" r="1" />
          </svg>
          <span>brasasefogao</span>
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Brasas e Fogão</span>
        <span>Setor Oeste · Goiânia, GO</span>
        <div className="footer-actions">
          <a href="#inicio">Voltar ao início</a>
        </div>
      </div>
      <div className="container footer-credit">
        <a
          href="https://cloudpronto.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por <strong>CloudPronto</strong>
        </a>
      </div>
    </footer>
  );
}