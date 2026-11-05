import type { Metadata } from 'next';
import { ArrowRight, Flame, MessageCircle, Phone } from 'lucide-react';
import { bio } from '@/lib/bio';
import { publicAsset } from '@/lib/assets';
import { restaurant } from '@/lib/restaurant';
import './bio.css';

const title = 'Brasas & Fogão | Links oficiais';
const description =
  'Conheça a experiência Brasas & Fogão e solicite um orçamento para seu próximo evento diretamente pelo WhatsApp.';
const bioShareImage = {
  url: `${restaurant.origin}/og/bio.jpg`,
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Brasas & Fogão — gastronomia premium para eventos',
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${restaurant.origin}/bio/` },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title,
    description,
    url: `${restaurant.origin}/bio/`,
    siteName: restaurant.name,
    images: [bioShareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [bioShareImage],
  },
};

export const viewport = { themeColor: '#0b0d0f' };

// Fontes da bio (Oswald + Manrope), servidas localmente como as demais do site.
const bioFontCss = [
  ['Bio Oswald', 'oswald-500.woff2', 500],
  ['Bio Oswald', 'oswald-600.woff2', 600],
  ['Bio Manrope', 'manrope-400.woff2', 400],
  ['Bio Manrope', 'manrope-600.woff2', 600],
]
  .map(
    ([family, file, weight]) => `@font-face {
  font-family: '${family}';
  src: url('${publicAsset(`/fonts/${file}`)}') format('woff2');
  font-weight: ${weight};
  font-style: normal;
  font-display: swap;
}`,
  )
  .join('\n');

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="bio-icon-lg"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.16 8.16 0 01-1.25-4.35c0-4.53 3.69-8.21 8.22-8.21 2.19 0 4.25.86 5.8 2.41a8.16 8.16 0 012.4 5.81c0 4.53-3.69 8.2-8.21 8.2zm4.5-6.14c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.19.86 2.33.98 2.49.12.17 1.68 2.65 4.08 3.62.57.24 1.02.39 1.36.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.65-1.16.2-.56.2-1.05.14-1.15-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="bio-icon"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const secondaryLinks = [
  {
    href: bio.instagramUrl,
    label: 'Acessar Instagram da Brasas & Fogão',
    short: 'Instagram',
    Icon: InstagramIcon,
    external: true,
  },
  {
    href: bio.whatsappUrl,
    label: 'Conversar pelo WhatsApp',
    short: 'WhatsApp',
    Icon: () => <MessageCircle className="bio-icon" aria-hidden="true" />,
    external: true,
  },
  {
    href: bio.phoneUrl,
    label: 'Ligar para Brasas & Fogão',
    short: bio.phone,
    Icon: () => <Phone className="bio-icon" aria-hidden="true" />,
    external: false,
  },
];

export default function BioPage() {
  return (
    <main className="bio-page">
      <style>{bioFontCss}</style>
      <div aria-hidden="true" className="bio-bg">
        <div className="bio-glow bio-glow-top" />
        <div className="bio-glow bio-glow-bottom" />
        <div className="bio-grain" />
      </div>

      <div className="bio-wrap">
        <div
          className="bio-reveal bio-logo-row"
          style={{ animationDelay: '0ms' }}
        >
          <div className="bio-logo">
            <img
              src={publicAsset('/images/logo-brasas-e-fogao.png')}
              alt="Logo Brasas & Fogão — gastronomia premium para eventos"
              width={150}
              height={150}
            />
          </div>
        </div>

        <header className="bio-header">
          <h1
            className="bio-reveal bio-title"
            style={{ animationDelay: '80ms' }}
          >
            {bio.title}
          </h1>
          <p
            className="bio-reveal bio-tagline"
            style={{ animationDelay: '140ms' }}
          >
            {bio.tagline}
          </p>
          <div
            className="bio-reveal bio-divider"
            style={{ animationDelay: '180ms' }}
          />
          <p
            className="bio-reveal bio-services"
            style={{ animationDelay: '220ms' }}
          >
            {bio.services}
          </p>
          <p
            className="bio-reveal bio-badge"
            style={{ animationDelay: '260ms' }}
          >
            <span className="bio-badge-dot" />
            {bio.badge}
          </p>
        </header>

        <div className="bio-cards">
          <a
            href={bio.siteLink.href}
            className="bio-reveal bio-focus bio-card bio-card-site"
            style={{ animationDelay: '320ms' }}
          >
            <span className="bio-card-bar" />
            <Flame className="bio-icon-lg bio-ember" aria-hidden="true" />
            <span className="bio-card-text">
              <span className="bio-card-title">{bio.siteLink.title}</span>
              <span className="bio-card-sub">{bio.siteLink.subtitle}</span>
            </span>
            <ArrowRight
              className="bio-icon bio-arrow bio-ember"
              aria-hidden="true"
            />
          </a>

          <a
            href={bio.whatsappLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bio-reveal bio-focus bio-card bio-card-whatsapp"
            style={{ animationDelay: '380ms' }}
          >
            <span className="bio-wa-icon">
              <WhatsAppIcon />
              <span className="bio-wa-dot" />
            </span>
            <span className="bio-card-text">
              <span className="bio-card-title">{bio.whatsappLink.title}</span>
              <span className="bio-card-sub">{bio.whatsappLink.subtitle}</span>
            </span>
            <ArrowRight className="bio-icon bio-arrow" aria-hidden="true" />
          </a>
        </div>

        <nav aria-label="Links secundários" className="bio-social">
          <ul>
            {secondaryLinks.map(({ href, label, short, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="bio-focus bio-social-link"
                >
                  <Icon />
                  <span className="sr-only">{short}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="bio-footer">
          <p className="bio-footer-copy">
            © {new Date().getFullYear()} {bio.title}. Todos os direitos
            reservados.
          </p>
          <p className="bio-footer-note">{bio.footerNote}</p>
          <p className="bio-footer-dev">
            Site desenvolvido por{' '}
            <a
              href={bio.developer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bio-focus"
            >
              {bio.developer.name}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
