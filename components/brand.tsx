import Link from 'next/link';
import { Flame } from 'lucide-react';

export function Brand({ className = '' }: { className?: string }) {
  return (
    <Link
      className={`brand ${className}`}
      href="/"
      aria-label="Brasas e Fogão — início"
    >
      <span aria-hidden="true">BRASAS</span>
      <span className="brand-e" aria-hidden="true">
        E<Flame className="brand-flame" fill="currentColor" strokeWidth={1.5} />
      </span>
      <span aria-hidden="true">FOGÃO</span>
    </Link>
  );
}