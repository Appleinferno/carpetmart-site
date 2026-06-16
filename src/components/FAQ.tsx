import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-clay-700"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold text-stone-900">{item.question}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-clay-600 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[65ch] text-[1.0625rem] leading-relaxed text-stone-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
