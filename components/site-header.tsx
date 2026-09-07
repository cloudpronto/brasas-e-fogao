'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#a-casa">A casa</a>
          <a href="#localizacao">Localização</a>
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
              <a href="#cardapio" onClick={() => setOpen(false)}>
                Cardápio <span>01</span>
              </a>
              <a href="#a-casa" onClick={() => setOpen(false)}>
                A casa <span>02</span>
              </a>
              <a href="#localizacao" onClick={() => setOpen(false)}>
                Localização <span>03</span>
              </a>
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
                Como chegar <ArrowUpRight size={18} />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
