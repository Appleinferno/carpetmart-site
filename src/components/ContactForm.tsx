import { useState } from 'react';

const FLOORING_OPTIONS = [
  'Carpet',
  'Vinyl Plank',
  'Hardwood',
  'Vinyl Flooring',
  'Laminate',
  'Cabinets',
  'Not sure yet',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setErrorMsg(data?.error || 'Something went wrong. Please try again or call us.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('We could not reach the server. Please call us at (828) 837-7491.');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-pine-700/30 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-stone-900">Thanks — we got it!</h3>
        <p className="mt-2 text-stone-600">
          We'll be in touch shortly. Need an answer now? Call us at{' '}
          <a href="tel:+18288377491" className="font-mono font-medium text-clay-700">
            (828) 837-7491
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 transition-all focus:border-clay-400 focus:outline-none focus:ring-2 focus:ring-clay-600/15';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-stone-700">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-stone-700">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="(828) 555-0123" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-stone-700">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-sm font-medium text-stone-700">
            Town <span className="text-stone-400">(optional)</span>
          </label>
          <input id="location" name="location" type="text" className={inputClass} placeholder="e.g. Murphy, NC" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="flooringType" className="text-sm font-medium text-stone-700">
          What are you interested in?
        </label>
        <select id="flooringType" name="flooringType" className={inputClass} defaultValue="Not sure yet">
          {FLOORING_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-stone-700">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Rooms, rough square footage, timeline, anything else we should know…"
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center rounded-xl bg-clay-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-clay-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send my request'}
      </button>

      {status === 'error' && (
        <p className="text-sm font-medium text-red-700" role="alert">
          {errorMsg}
        </p>
      )}
      <p className="text-xs text-stone-500">
        We use your details only to respond to your request. We never sell your information.
      </p>
    </form>
  );
}
