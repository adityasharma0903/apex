import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import studentGirl from "@/assets/student-girl.png";
import { CoursesRealitySection } from "../components/CoursesRealitySection";
import { OnlineLearningBenefitsSection } from "../components/OnlineLearningBenefitsSection";
import { ResourceShowcaseSection } from "../components/ResourceShowcaseSection";
import { StudentSuccessVideosSection } from "../components/StudentSuccessVideosSection";
import { FrequentlyAskedQuestionsSection } from "../components/FrequentlyAskedQuestionsSection";
import { WhyApexEdgeSection } from "../components/WhyApexEdgeSection";
import { ApexEdgeSection } from "../components/ApexEdgeSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WBTUT — Go Beyond The Limitations Of Education" },
      {
        name: "description",
        content:
          "Solutions and flexible online learning, you can study anywhere through this platform.",
      },
    ],
  }),
});

function Index() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`bg-[#d90f40] text-white transition-all duration-300 overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 h-12 flex items-center justify-between text-xs sm:text-sm font-semibold">
            <div className="hidden md:flex items-center gap-2.5 whitespace-nowrap">
              <span className="text-base" aria-hidden="true">🎁</span>
              <span>Claim FREE Demo Class & Scholarships</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-4 ml-auto whitespace-nowrap">
              <a href="#" className="hover:opacity-85 transition">CELPIP</a>
              <span className="hidden sm:inline-block h-5 w-px bg-white/45" />
              <span>+91 79869 01874</span>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pt-0 sm:pt-1">
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "mt-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#eed7df] shadow-[0_10px_30px_-24px_rgba(20,20,40,0.45)]"
                : "-mt-1 rounded-b-[1.65rem] bg-white border border-[#f0f0f0] shadow-[0_18px_28px_-22px_rgba(0,0,0,0.35)]"
            } px-4 sm:px-6 lg:px-8 py-3.5`}
          >
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <img
                src={logo}
                alt="Apex Edge logo"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              />
              <span className="text-[#d90f40] font-extrabold tracking-tight text-lg sm:text-xl lg:text-2xl">Apex Edge</span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-semibold text-[oklch(0.2_0.02_250)]">
              <a href="#" className="hover:text-[#d90f40] transition">Home</a>
              <a href="#" className="hover:text-[#d90f40] transition inline-flex items-center gap-2">
                Online Courses
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M3.2 5.5L8 10.3l4.8-4.8H3.2z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#d90f40] transition">Results</a>
              <a href="#" className="hover:text-[#d90f40] transition">About Us</a>
              <a href="#" className="hover:text-[#d90f40] transition">Contact Us</a>
            </nav>

            <button className="inline-flex items-center gap-2 rounded-xl bg-[#d90f40] text-white px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold shadow-[0_10px_20px_-16px_rgba(217,15,64,0.9)] hover:opacity-90 transition whitespace-nowrap">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" />
              </svg>
              Signup/Login
            </button>
          </div>
        </div>
      </header>

      <div className={`transition-all duration-300 ${isScrolled ? "h-20 sm:h-24" : "h-28 sm:h-32 lg:h-34"}`} />

      {/* Hero */}
      <main className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pt-4 sm:pt-8 lg:pt-12 pb-12 lg:pb-20 relative overflow-hidden">
        {/* Background doodles */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] select-none">
          <svg className="absolute top-10 left-4 w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="5" />
          </svg>
          <svg className="absolute top-40 left-1/3 w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M3 21l4-1 11-11-3-3L4 17l-1 4z" />
          </svg>
          <svg className="absolute bottom-20 left-10 w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M5 22V8l7-5 7 5v14H5z" />
            <path d="M9 22v-7h6v7" />
          </svg>
          <svg className="absolute top-32 right-1/3 w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="4" width="18" height="12" rx="1" />
            <path d="M8 20h8M12 16v4" />
          </svg>
          <svg className="absolute bottom-32 left-1/2 w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 3h6l-1 4h-4L9 3zM7 7h10l-2 14H9L7 7z" />
          </svg>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 xl:gap-16 items-center relative">
          {/* Left content */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="font-extrabold text-(--brand-text) leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <div>GO BEYOND THE</div>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap mt-2">
                <span>LIMITATIONS</span>
                <span className="inline-flex items-center justify-center px-5 sm:px-6 py-2 border-2 border-(--brand-text) rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                  OF
                </span>
              </div>
              <div className="mt-2">EDUCATION</div>
            </h1>

            <p className="mt-6 sm:mt-8 text-(--brand-muted) text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
              Solutions and flexible online leaning, you can study anywhere
              through this platform.
            </p>

            <button className="mt-6 sm:mt-8 bg-(--brand-purple) hover:opacity-90 text-white px-7 sm:px-8 py-3 rounded-md text-sm sm:text-base transition shadow-lg shadow-(color:--brand-purple)/20">
              Get Started
            </button>
          </div>

          {/* Right image */}
          <div className="relative flex items-center justify-center min-h-80 sm:min-h-105 lg:min-h-155 lg:justify-center lg:pl-6 xl:pl-10">
            {/* Orange circle */}
            <div className="absolute w-70 h-70 sm:w-90 sm:h-90 lg:w-126 lg:h-126 rounded-full bg-(--brand-orange) top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            {/* Girl */}
            <img
              src={studentGirl}
              alt="Smiling student holding a notebook and a lightbulb wand"
              width={896}
              height={1024}
              className="relative z-10 w-60 sm:w-80 lg:w-120 max-w-none h-auto object-contain -translate-y-2 sm:-translate-y-3 lg:-translate-y-4"
            />
            {/* Lightbulb sparks doodle */}
            <svg
              className="absolute z-20 text-(--brand-text) opacity-25 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 top-[14%] left-[12%] lg:left-[10%]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M12 2v3M4.2 4.2l2.1 2.1M2 12h3M4.2 19.8l2.1-2.1M19.8 4.2l-2.1 2.1" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>
      </main>

      <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-12 lg:pb-16">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#d70c3f] px-4 py-5 sm:px-6 sm:py-7 lg:px-10 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.5fr)_minmax(0,0.22fr)] items-center">
            <div className="rounded-[1.6rem] bg-white p-4 sm:p-5 lg:p-6 text-center shadow-[0_20px_40px_-30px_rgba(6,14,34,0.5)]">
              <p className="text-lg sm:text-xl leading-snug text-[oklch(0.23_0.02_250)]">
                Consult Our Experts for a
              </p>
              <p className="mt-1 text-[1.85rem] sm:text-[2rem] font-semibold leading-none text-[#d70c3f]">
                Free Session
              </p>

              <p className="mt-5 flex items-center justify-center gap-2 text-[#d70c3f] text-2xl sm:text-3xl font-bold tracking-tight">
                <span aria-hidden="true">📞</span>
                +91 98788 70737
              </p>

              <button className="mt-6 w-full rounded-xl bg-[#d70c3f] py-3.5 text-white text-xl sm:text-2xl font-semibold hover:opacity-90 transition">
                Call Us Now
              </button>
            </div>

            <div className="text-white lg:pl-2 xl:pl-3">
              <h3 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.06] font-extrabold tracking-tight">
                Unlock IELTS Success with a Free Demo!
              </h3>
              <p className="mt-4 text-lg sm:text-xl lg:text-[1.65rem] leading-relaxed max-w-4xl text-white/95">
                Join our free class, and if you enjoy it, enroll in our regular
                programmes for unmatched improvement in your English skills.
              </p>

              <button className="mt-7 rounded-xl bg-white px-7 sm:px-9 py-3.5 text-[#d70c3f] text-xl sm:text-2xl font-semibold hover:bg-white/90 transition">
                Book Now
              </button>
            </div>

            <div className="relative h-56 sm:h-72 lg:h-80 hidden sm:block">
              <img
                src={studentGirl}
                alt="Smiling student for consultation promo"
                width={896}
                height={1024}
                className="absolute right-0 -bottom-7 sm:-bottom-10 lg:-bottom-14 w-56 sm:w-72 lg:w-78 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24">
        <div className="rounded-[2.25rem] bg-[#f5f7f8] border border-[#dde7e4] p-5 sm:p-8 lg:p-12 xl:p-14">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 xl:gap-14 items-center">
            <div className="relative h-112 sm:h-136 lg:h-160">
              <div className="absolute left-[2%] sm:left-[4%] top-0 h-[67%] w-[56%] rounded-t-[7rem] rounded-b-[5.5rem] border-[3px] border-[#2d7f72] bg-[#ebf5f3] overflow-hidden shadow-[0_18px_60px_-35px_rgba(7,57,42,0.45)]">
                <img
                  src={studentGirl}
                  alt="Student portrait in top capsule"
                  width={896}
                  height={1024}
                  className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[88%] h-auto object-contain"
                />
              </div>

              <div className="absolute right-[2%] sm:right-[8%] bottom-[2%] h-[64%] w-[52%] rounded-t-[6.5rem] rounded-b-[5rem] border-[3px] border-[#2d7f72] bg-[#2d7f72] overflow-hidden shadow-[0_20px_66px_-35px_rgba(7,57,42,0.5)]">
                <div className="absolute inset-0 opacity-25">
                  <svg className="absolute top-8 left-7 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
                    <path d="M4 13l8-5 8 5-8 5-8-5z" />
                    <path d="M8 15v3c0 .6 1.8 1.5 4 1.5s4-.9 4-1.5v-3" />
                  </svg>
                  <svg className="absolute bottom-10 right-6 w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
                    <path d="M4 18c2.3-4 5-6 8-6s5.7 2 8 6" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <img
                  src={studentGirl}
                  alt="Student portrait in bottom capsule"
                  width={896}
                  height={1024}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-auto object-contain"
                />
              </div>

              <span className="absolute left-2 top-[4.8rem] h-5 w-5 rotate-12 bg-[#f6cb3f] clip-triangle" />
              <span className="absolute left-[1.7rem] top-[5.6rem] h-4 w-4 rotate-12 bg-[#6fc4e8] clip-triangle" />
              <span className="absolute right-[36%] top-[5.4rem] h-2 w-2 rounded-full bg-[#e23a58]" />
              <span className="absolute right-[33%] top-28 h-2 w-2 rounded-full bg-[#6eb95b]" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold tracking-tight text-(--brand-text)">
                How to Change Life with <span className="text-[#d72646]">Apex Edge?</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[oklch(0.32_0.02_250)] max-w-3xl">
                Kickstart your English learning journey with Apex Edge free self-study
                material. Our resources are built for anyone who wants to improve
                practical skills, whether you are preparing for exams, spoken English,
                or advanced communication goals. With easy guides and practice routines,
                you get a focused path to boost confidence and knowledge.
              </p>

              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-3 text-[1.45rem] sm:text-[1.6rem] text-[oklch(0.25_0.02_250)] leading-snug">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20a55a] text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l2.5 2.5 6-6" />
                    </svg>
                  </span>
                  Avail of free counselling sessions by our experts
                </li>
                <li className="flex items-start gap-3 text-[1.45rem] sm:text-[1.6rem] text-[oklch(0.25_0.02_250)] leading-snug">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20a55a] text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l2.5 2.5 6-6" />
                    </svg>
                  </span>
                  Flexible online coaching classes as per your convenience
                </li>
                <li className="flex items-start gap-3 text-[1.45rem] sm:text-[1.6rem] text-[oklch(0.25_0.02_250)] leading-snug">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20a55a] text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l2.5 2.5 6-6" />
                    </svg>
                  </span>
                  100% reliable and tailored study plans with accountability
                </li>
              </ul>

              <button className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-[#d81343] text-white text-lg sm:text-xl font-semibold px-8 py-4 hover:opacity-90 transition shadow-[0_20px_40px_-28px_rgba(216,19,67,0.75)]">
                Book a Free Session
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/80">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h8" />
                    <path d="M8 4l4 4-4 4" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ResourceShowcaseSection />
      <StudentSuccessVideosSection />
      <OnlineLearningBenefitsSection />
      <CoursesRealitySection />
      <WhyApexEdgeSection />
      <ApexEdgeSection />
      <FrequentlyAskedQuestionsSection />
    </div>
  );
}
