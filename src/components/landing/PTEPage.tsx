import { Link } from "@tanstack/react-router";

export function PTEPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 sm:px-6 lg:px-10 xl:px-12 py-24">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 sm:p-10 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.35)] ring-1 ring-black/5">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#40508b]">PTE</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[oklch(0.16_0.02_250)]">
          PTE Mastery Track
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.36_0.02_250)]">
          Improve scores through AI-style mock tests, time-based tasks, and feedback focused on speaking, reading, and writing.
        </p>
        <Link to="/" className="mt-8 inline-flex rounded-lg bg-[#d90f40] px-5 py-2.5 text-white font-semibold hover:opacity-90 transition">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
