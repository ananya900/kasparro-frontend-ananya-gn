export default function ArchitecturePage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6 text-indigo-400">
        Platform Architecture
      </h1>

      <p className="text-gray-300 mb-6">
        This section outlines the high-level frontend architecture of the
        Kasparro platform, designed for scalability, clarity, and modularity.
      </p>

      <section className="space-y-4 text-gray-300">
        <div>
          <h2 className="text-xl font-semibold text-indigo-300">
            Frontend Framework
          </h2>
          <p>
            Built using Next.js App Router with TypeScript for strong typing
            and predictable routing.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-300">
            Component Structure
          </h2>
          <p>
            Components are modular, reusable, and separated by responsibility
            (layout, data display, navigation).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-300">
            Data Handling
          </h2>
          <p>
            Mocked JSON data is used to simulate backend responses and is typed
            using TypeScript interfaces.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-300">
            Styling
          </h2>
          <p>
            Tailwind CSS is used for consistent styling, responsive layouts,
            and rapid UI development.
          </p>
        </div>
      </section>
    </main>
  );
}
