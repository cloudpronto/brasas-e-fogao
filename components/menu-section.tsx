'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { menu, formatPrice } from '@/lib/menu';

export function MenuSection() {
  const [open, setOpen] = useState<string[]>(['lanches', 'cafeteria']);
  const allOpen = open.length === menu.length;
  return (
    <section
      className="menu-section section"
      id="cardapio"
      aria-labelledby="menu-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O cardápio da casa</p>
            <h2 className="display-title" id="menu-title">
              Pra todas
              <br />
              as fomes.
            </h2>
          </div>
          <div className="menu-heading-aside">
            <p>
              Do primeiro café ao encontro à mesa.
              <br />
              Escolha o que combina com a sua vontade.
            </p>
            <a
              className="text-link small-link"
              href="/cardapio-brasas-e-fogao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir cardápio em PDF <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
        <div className="menu-layout">
          <aside className="menu-photos" aria-label="Quitandas da casa">
            <figure className="menu-photo-large">
              <Image
                unoptimized
                src="/images/pao-de-queijo.webp"
                alt="Pães de queijo do Brasas e Fogão"
                width="1000"
                height="1778"
                loading="lazy"
              />
              <figcaption>
                <span>Pão de queijo</span>
                <span>{formatPrice(6)}</span>
              </figcaption>
            </figure>
            <figure className="menu-photo-small">
              <Image
                unoptimized
                src="/images/coxinhas.webp"
                alt="Coxinhas do Brasas e Fogão"
                width="1000"
                height="1778"
                loading="lazy"
              />
              <figcaption>Coxinha da casa</figcaption>
            </figure>
          </aside>
          <div className="menu-list">
            <div className="menu-list-toolbar">
              <span>Escolha uma categoria</span>
              <button
                type="button"
                onClick={() => setOpen(allOpen ? [] : menu.map((c) => c.id))}
              >
                {allOpen ? 'Recolher todas' : 'Ver todas'}
                {allOpen ? (
                  <Minus size={16} aria-hidden="true" />
                ) : (
                  <Plus size={16} aria-hidden="true" />
                )}
              </button>
            </div>
            <Accordion
              multiple
              value={open}
              onValueChange={(values) => setOpen(values as string[])}
              className="food-accordion"
            >
              {menu.map((category, index) => (
                <AccordionItem
                  value={category.id}
                  key={category.id}
                  className="food-category"
                  id={`categoria-${category.id}`}
                >
                  <AccordionTrigger className="food-category-trigger">
                    <span className="category-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="category-name">{category.title}</span>
                    <span className="category-count">
                      {category.items.length}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    keepMounted
                    className="food-category-content"
                  >
                    <ul className="food-items">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <div>
                            <span className="food-name">{item.name}</span>
                            {item.detail && (
                              <span className="food-detail">{item.detail}</span>
                            )}
                          </div>
                          <span
                            className={
                              item.price === null
                                ? 'food-consult'
                                : 'food-price'
                            }
                          >
                            {item.price === null
                              ? 'Na casa'
                              : formatPrice(item.price)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="menu-footnote">
              Para informações sobre ingredientes e alergênicos, converse com
              nossa equipe antes de escolher.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
