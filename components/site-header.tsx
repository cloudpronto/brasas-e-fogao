'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { Brand } from '@/components/brand';
import { restaurant } from '@/lib/restaurant';

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header${compact ? ' site-header-compact' : ''}`}>
      <div className="header-inner container">
        {compact ? (
          <div className="menu-header-brand">
            <Brand />
            <span>
              {restaurant.neighborhood} · {restaurant.city}
            </span>
          </div>
        ) : (
          <Brand />
        )}
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/cardapio" aria-current={compact ? 'page' : undefined}>
            Cardápio
          </Link>
          <Link href="/#a-casa">A casa</Link>
          <Link href="/#localizacao">Localização</Link>
        </nav>
        <a
          className="button button-header"
          href={restaurant.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Como chegar
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="mobile-menu-trigger" aria-label="Abrir menu">
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="restaurant-sheet" showCloseButton={false}>
            <div className="sheet-top">
              <SheetTitle>Brasas e Fogão</SheetTitle>
              <SheetClose className="icon-button" aria-label="Fechar menu">
                <X />
              </SheetClose>
            </div>
            <SheetDescription className="sheet-description">
              Boa comida e bons encontros.
            </SheetDescription>
            <nav aria-label="Menu do celular" className="sheet-navigation">
              <Link
                href="/cardapio"
                aria-current={compact ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                Cardápio <span>01</span>
              </Link>
              <Link href="/#a-casa" onClick={() => setOpen(false)}>
                A casa <span>02</span>
              </Link>
              <Link href="/#localizacao" onClick={() => setOpen(false)}>
                Localização <span>03</span>
              </Link>
            </nav>
            <div className="sheet-bottom">
              <p>Setor Oeste · Goiânia</p>
              <p>{restaurant.hours}</p>
              <a
                className="button"
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como chegar
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
