import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>Kasparro – Frontend Engineering Assignment</h1>
      <p>Public Homepage</p>

      <ul>
        <li>
          <Link href="/dashboard">/dashboard</Link>
        </li>
        <li>
          <Link href="/audit">/audit</Link>
        </li>
        <li>
          <Link href="/architecture">/architecture</Link>
        </li>
      </ul>
    </main>
  );
}
