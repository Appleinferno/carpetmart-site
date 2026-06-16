import { useEffect, useMemo, useState } from 'react';

interface QuoteRow {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  location: string | null;
  flooringType: string | null;
  message: string;
  status: string;
  createdAt: string;
}

type State =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'ready'; rows: QuoteRow[] };

export default function AdminDashboard() {
  const [state, setState] = useState<State>({ kind: 'loading' });

  useEffect(() => {
    fetch('/api/admin/submissions')
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.error || 'Request failed');
        setState({ kind: 'ready', rows: Array.isArray(data.rows) ? data.rows : [] });
      })
      .catch((err) => setState({ kind: 'error', message: err.message }));
  }, []);

  const stats = useMemo(() => {
    if (state.kind !== 'ready') return { total: 0, recent: 0 };
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const recent = state.rows.filter((r) => {
      const t = new Date(r.createdAt.replace(' ', 'T') + 'Z').getTime();
      return !Number.isNaN(t) && t >= weekAgo;
    }).length;
    return { total: state.rows.length, recent };
  }, [state]);

  if (state.kind === 'loading') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-stone-100" />
          ))}
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-xl bg-stone-100" />
          ))}
        </div>
      </div>
    );
  }

  if (state.kind === 'error') {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <p className="font-medium text-red-800">Couldn't load submissions.</p>
        <p className="mt-1 text-sm text-red-700">{state.message}</p>
        <p className="mt-2 text-sm text-red-700">
          If you haven't set up Turso yet, add <code className="font-mono">TURSO_DATABASE_URL</code> and{' '}
          <code className="font-mono">TURSO_AUTH_TOKEN</code> to your environment.
        </p>
      </div>
    );
  }

  const { rows } = state;
  const fmtDate = (s: string) => {
    const d = new Date(s.replace(' ', 'T') + 'Z');
    return Number.isNaN(d.getTime()) ? s : d.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm text-stone-500">Total requests</p>
          <p className="mt-1 font-display text-3xl font-bold text-stone-900">{stats.total}</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm text-stone-500">Last 7 days</p>
          <p className="mt-1 font-display text-3xl font-bold text-clay-700">{stats.recent}</p>
        </div>
        <div className="col-span-2 rounded-2xl border border-stone-200 bg-white p-6 sm:col-span-1">
          <p className="text-sm text-stone-500">Most recent</p>
          <p className="mt-1 font-display text-lg font-bold text-stone-900">
            {rows[0] ? fmtDate(rows[0].createdAt) : '—'}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left">
                <th className="px-5 py-3 font-medium text-stone-500">Name</th>
                <th className="px-5 py-3 font-medium text-stone-500">Contact</th>
                <th className="px-5 py-3 font-medium text-stone-500">Interest</th>
                <th className="hidden px-5 py-3 font-medium text-stone-500 lg:table-cell">Message</th>
                <th className="px-5 py-3 font-medium text-stone-500">Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {rows.map((r) => (
                <tr key={r.id} className="align-top transition-colors hover:bg-stone-50/70">
                  <td className="px-5 py-4">
                    <div className="font-medium text-stone-900">{r.name}</div>
                    {r.location && <div className="text-xs text-stone-500">{r.location}</div>}
                  </td>
                  <td className="px-5 py-4">
                    <a href={`mailto:${r.email}`} className="text-clay-700 hover:underline">{r.email}</a>
                    {r.phone && (
                      <div className="font-mono text-xs text-stone-500">
                        <a href={`tel:${r.phone}`} className="hover:underline">{r.phone}</a>
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    {r.flooringType ? (
                      <span className="inline-flex rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700">
                        {r.flooringType}
                      </span>
                    ) : (
                      <span className="text-stone-400">—</span>
                    )}
                  </td>
                  <td className="hidden max-w-md px-5 py-4 text-stone-600 lg:table-cell">{r.message}</td>
                  <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-stone-500">{fmtDate(r.createdAt)}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-16 text-center text-stone-400">
                    No quote requests yet. They'll appear here as soon as the form is used.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
