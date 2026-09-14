'use client';

import Image from 'next/image';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { FileText, Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from '@/components/ui/accordion';
import { menu, formatPrice, type MenuCategory } from '@/lib/menu';

const desktopQuery = '(min-width: 1001px)';
const desktopColumns = [
  ['lanches', 'pasteis', 'espetos', 'especial-da-casa', 'acompanhamentos'],
  ['cafeteria', 'quitandas', 'sem-alcool', 'cervejas'],
];
const mobileOrder = [
  'lanches',
  'cafeteria',
  'quitandas',
  'pasteis',
  'especial-da-casa',
  'espetos',
  'acompanhamentos',
  'sem-alcool',
  'cervejas',
];

function subscribeToViewport(onChange: () => void) {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

function getDesktopSnapshot() {
  return window.matchMedia(desktopQuery).matches;
}

function getServerSnapshot() {
  return false;
}

function categoriesInOrder(ids: string[]) {
  return ids.map((id) => menu.find((category) => category.id === id)!);
}

export function MenuSection() {
  const isDesktop = useSyncExternalStore(
    subscribeToViewport,
    getDesktopSnapshot,
    getServerSnapshot,
  );
  const [categoryState, setCategoryState] = useState<Record<string, boolean>>(
    () => Object.fromEntries(menu.map((category) => [category.id, true])),
  );
  const openCategories = menu
    .filter((category) => categoryState[category.id] === true)
    .map((category) => category.id);

  useEffect(() => {
    let frame: number | undefined;

    function openLinkedCategory() {
      const category = menu.find(
        (item) => window.location.hash === `#categoria-${item.id}`,
      );
      if (!category) return;

      setCategoryState((current) => ({ ...current, [category.id]: true }));
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.getElementById(`categoria-${category.id}`)?.scrollIntoView({
          block: 'start',
        });
      });
    }

    openLinkedCategory();
    window.addEventListener('hashchange', openLinkedCategory);
    return () => {
      window.removeEventListener('hashchange', openLinkedCategory);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [isDesktop]);

  function updateOpenCategories(values: string[]) {
    setCategoryState(
      Object.fromEntries(
        menu.map((category) => [category.id, values.includes(category.id)]),
      ),
    );
  }

  function renderCategory(category: MenuCategory) {
    return (
      <AccordionItem
        value={category.id}
        className="dish-category"
        id={`categoria-${category.id}`}
        key={category.id}
      >
        <AccordionPrimitive.Header
          render={<h2 />}
          className="dish-category-heading"
        >
          <AccordionPrimitive.Trigger className="dish-category-trigger">
            <span className="dish-category-label">{category.title}</span>
            <span className="dish-category-toggle" aria-hidden="true">
              <Plus className="dish-expand-icon" size={18} />
              <Minus className="dish-collapse-icon" size={18} />
            </span>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionContent keepMounted className="dish-category-content">
          <ul className="dish-items">
            {category.items.map((item) => (
              <li key={item.name}>
                <div className="dish-description">
                  <h3>{item.name}</h3>
                  {item.detail && <p>{item.detail}</p>}
                </div>
                <span className="dish-leader" aria-hidden="true" />
                <span className="dish-price">{formatPrice(item.price)}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <div className="container menu-catalog" id="cardapio">
      <div className="menu-mobile-intro">
        <p className="menu-mobile-heading">À sua escolha</p>
        <p className="menu-mobile-kicker">Nossos sabores, sempre por aqui.</p>
      </div>
      <Accordion
        multiple
        value={openCategories}
        onValueChange={(values) => updateOpenCategories(values as string[])}
        className={`menu-accordion ${isDesktop ? 'menu-spread' : 'menu-stack'}`}
      >
        {isDesktop
          ? desktopColumns.map((ids, index) => (
              <div className="menu-column" key={index}>
                {categoriesInOrder(ids).map(renderCategory)}
                {index === 1 && (
                  <figure className="menu-bread-photo" aria-hidden="true">
                    <Image
                      unoptimized
                      src="/images/menu-pao-de-queijo.webp"
                      alt=""
                      width={1536}
                      height={1024}
                      loading="lazy"
                    />
                  </figure>
                )}
              </div>
            ))
          : categoriesInOrder(mobileOrder).map(renderCategory)}
      </Accordion>
      <div className="menu-download">
        <a
          href="/cardapio-brasas-e-fogao.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={19} aria-hidden="true" />
          <span>Cardápio em PDF</span>
        </a>
      </div>
      <p className="menu-catalog-note">
        Para informações sobre ingredientes e alergênicos, converse com nossa
        equipe antes de escolher.
      </p>
    </div>
  );
}
