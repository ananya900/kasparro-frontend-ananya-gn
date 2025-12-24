"use client";

import { useEffect, useState } from "react";
import dashboardData from "../../data/dashboard-data.json";

export default function DashboardPage() {
  const { brand, lastAudit, metrics } = dashboardData;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const cards = [
    {
      title: "AI Visibility Score",
      value: metrics.aiVisibility,
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Trust & EEAT Score",
      value: metrics.trustEEAT,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Non-Branded Keyword Coverage",
      value: metrics.nonBrandedCoverage,
      color: "from-sky-500 to-cyan-600",
    },
    {
      title: "Last Audit",
      value: lastAudit.slice(0, 10), // FIXED hydration issue
      color: "from-zinc-700 to-zinc-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Brand Dashboard</h1>
        <p className="text-zinc-400">
          High-level AI search visibility snapshot for{" "}
          <span className="text-indigo-400">{brand}</span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-zinc-800 animate-pulse"
              >
                <div className="h-4 w-32 bg-zinc-700 rounded mb-4" />
                <div className="h-10 w-24 bg-zinc-700 rounded" />
              </div>
            ))
          : cards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-6 bg-gradient-to-br ${card.color}
                shadow-lg transition hover:scale-[1.02]`}
              >
                <p className="text-sm uppercase tracking-wide text-white/70 mb-2">
                  {card.title}
                </p>
                <p className="text-4xl font-bold">
                  {card.value}
                  {typeof card.value === "number" && (
                    <span className="text-xl text-white/70 ml-1">%</span>
                  )}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
