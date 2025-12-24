"use client";

const architecture = [
  {
    title: "Input Assembler",
    color: "from-indigo-500 to-purple-600",
    items: [
      "Website content",
      "Brand metadata",
      "SERP & keyword data",
      "AI platform query samples",
    ],
  },
  {
    title: "Context Pack",
    color: "from-emerald-500 to-teal-600",
    items: [
      "Brand entity graph",
      "Topic clusters",
      "Author & EEAT signals",
      "Citation sources",
    ],
  },
  {
    title: "Audit Modules",
    color: "from-sky-500 to-cyan-600",
    items: [
      "AI Visibility",
      "Brand Entity Recognition",
      "Trust & EEAT",
      "Non-Branded Keyword Coverage",
      "Citation Consistency",
      "Knowledge Graph Strength",
      "Content-Intent Alignment",
    ],
  },
  {
    title: "Output Surfaces",
    color: "from-zinc-700 to-zinc-800",
    items: [
      "Dashboard metrics",
      "Module-level insights",
      "Issue flags",
      "Actionable recommendations",
    ],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-10">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">
          Kasparro System Architecture
        </h1>
        <p className="text-zinc-400 max-w-2xl">
          A high-level representation of how Kasparro ingests data, builds AI-native
          context, evaluates brand presence across AI search systems, and produces
          actionable outputs.
        </p>
      </div>

      {/* Architecture Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {architecture.map((block) => (
          <div
            key={block.title}
            className={`rounded-2xl p-6 bg-gradient-to-br ${block.color} shadow-lg`}
          >
            <h2 className="text-xl font-semibold mb-4">
              {block.title}
            </h2>

            <ul className="space-y-2 text-white/90">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
