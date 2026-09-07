import Link from 'next/link';
import { Brand } from '@/components/brand';
export default function NotFound() {
  return (
    <main className="not-found">
      <Brand />
      <p className="eyebrow">Essa página não está por aqui</p>
      <h1 className="display-title">
        Mas a mesa
        <br />
        continua posta.
      </h1>
      <Link className="button" href="/">
        Voltar ao início
      </Link>
    </main>
  );
}
