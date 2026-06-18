import { useEffect, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

export default function MobileNav({
  navLinks,
  phone,
  phoneHref,
}: {
  navLinks: readonly NavLink[];
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-200/70 active:scale-95"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-sm transition-opacity duration-200 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[83%] max-w-sm flex-col bg-stone-50 shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight text-stone-900">
            Carpet<span className="text-clay-600">Mart</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-600 hover:bg-stone-200/70 active:scale-95"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3.5 text-lg font-medium text-stone-700 transition-colors hover:bg-stone-200/60"
          >
            Home
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-lg font-medium text-stone-700 transition-colors hover:bg-stone-200/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-3 border-t border-stone-200 p-4">
          <a
            href="/contact/"
            onClick={() => setOpen(false)}
            className="block rounded-xl bg-clay-600 px-4 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-clay-700"
          >
            Get a Free Quote
          </a>
          <a
            href={`tel:${phoneHref}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-stone-300 px-4 py-3.5 text-base font-medium text-stone-800"
          >
            <svg className="h-5 w-5 text-clay-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span className="font-mono">{phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
