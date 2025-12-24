"use client";

import { useState, useEffect } from "react";
import modules from "../../data/audit-modules.json";

export default function AuditPage() {
  const [selectedId, setSelectedId] = useState(modules[0].id);
  const [loading, setLoading] = useState(false);

  const selectedModule = modules.find((m) => m.id === selectedId);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [selectedId]);

  if (!selectedModule) return null;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Sidebar */}
      <aside className="w-72 border-r border-zinc-800 p-6">
        <h2 className="text-lg font-semibold mb-4 text-indigo-400">
          Audit Modules
        </h2>

        <ul className="space-y-2">
          {modules.map((m) => (
            <li
              key={m.id}
              onClick={() => setSelectedId(m.id)}
              className={`cursor-pointer rounded-lg px-4 py-2 transition-all
                ${
                  selectedId === m.id
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "hover:bg-zinc-800 hover:pl-5"
                }`}
            >
              {m.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 w-48 bg-zinc-800 rounded" />
            <div className="h-4 w-64 bg-zinc-800 rounded" />
            <div className="h-4 w-56 bg-zinc-800 rounded" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-3xl font-bold">{selectedModule.title}</h1>
              <span className="px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                Score: {selectedModule.score}
              </span>
            </div>

            <Section title="Insights" color="text-emerald-400">
              {selectedModule.insights}
            </Section>

            <Section title="Issues" color="text-rose-400">
              {selectedModule.issues}
            </Section>

            <Section title="Recommendations" color="text-sky-400">
              {selectedModule.recommendations}
            </Section>
          </>
        )}
      </main>
    </div>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: string[];
}) {
  return (
    <section className="mb-6">
      <h3 className={`text-xl font-semibold mb-2 ${color}`}>{title}</h3>
      <ul className="list-disc pl-6 space-y-1 text-zinc-300">
        {children.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
