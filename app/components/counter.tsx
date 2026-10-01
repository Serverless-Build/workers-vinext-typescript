'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="font-semibold">Interactive in your browser</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">A hydrated Client Component. Its count belongs to this browser view.</p>
      <button className="mt-4 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700" onClick={() => setCount((value) => value + 1)}>
        Click count: {count}
      </button>
    </div>
  );
}
