import { Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Medal, Truck } from "lucide-react";

const resources = [
  {
    title: "IELTS",
    icon: Lightbulb,
    to: "/ielts",
  },
  {
    title: "PTE",
    icon: Medal,
    to: "/pte",
  },
  {
    title: "Spoken English",
    icon: Truck,
    to: "/spoken-english",
  },
  {
    title: "CELPIP",
    icon: Truck,
    to: "/book-session",
  },
] as const;

function ResourceCard({ title, icon: Icon, to }: (typeof resources)[number]) {
  return (
    <article className="relative rounded-sm bg-[#fff6fa] px-5 sm:px-7 pb-8 pt-24 sm:pt-26 text-center shadow-[0_16px_36px_-26px_rgba(18,18,22,0.35)] ring-1 ring-black/5">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex h-22 w-22 items-center justify-center rounded-[1.9rem] bg-white shadow-[0_14px_28px_-18px_rgba(0,0,0,0.42)] ring-1 ring-black/5">
        <Icon className="h-10 w-10 text-[#6ba79f]" strokeWidth={1.9} />
      </div>

      <h3 className="text-[2.1rem] sm:text-[2.2rem] font-bold tracking-tight text-[oklch(0.18_0.02_250)]">{title}</h3>
      <Link
        to={to}
        className="mt-4 inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#d90f40] drop-shadow-[0_0_10px_rgba(217,15,64,0.32)] transition hover:translate-x-0.5"
      >
        Start Now
        <ArrowRight className="h-5 w-5" />
      </Link>
    </article>
  );
}

export function ResourceShowcaseSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24">
      <div className="rounded-[2.5rem] bg-linear-to-b from-[#edf0f7] from-0% via-[#edf0f7] via-46% to-white to-46% px-4 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[oklch(0.16_0.02_250)] leading-tight max-w-5xl mx-auto">
              <span className="block">Find the Appropiate Resources to Get Started with</span>
              <span className="mt-2 block text-[#d90f40]">Apex Edge</span>
            </h2>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}