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
import { ApexEdgeFooter } from "../components/ApexEdgeFooter";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf2e8] overflow-x-hidden text-xs sm:text-sm">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`hidden sm:block bg-[#d90f40] text-white transition-all duration-300 overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 h-12 flex items-center justify-between text-xs sm:text-sm font-semibold">
            <div className="hidden md:flex items-center gap-2.5 whitespace-nowrap">
              <span className="text-base" aria-hidden="true">🎁</span>
              <span>Claim FREE Demo Class & Scholarships</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-4 ml-auto whitespace-nowrap">
              <a 
                href="mailto:Email@gmail.com" 
                className="hover:opacity-85 transition"
              >
                Email@gmail.com
              </a>
              <span className="hidden sm:inline-block h-5 w-px bg-white/45" />
              <a href="tel:+917986901874" className="hover:opacity-85 transition">
                +91 79869 01874
              </a>
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
              <span className="text-[#d90f40] font-extrabold tracking-tight text-base sm:text-lg lg:text-xl">Apex Edge</span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-semibold text-[oklch(0.2_0.02_250)]">
              <a href="#" className="hover:text-[#d90f40] transition">Home</a>
              <div className="relative">
                <button
                  onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsCoursesDropdownOpen(false), 150)}
                  className="hover:text-[#d90f40] transition inline-flex items-center gap-2"
                >
                  Online Courses
                  <svg className={`w-4 h-4 transition-transform ${isCoursesDropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M3.2 5.5L8 10.3l4.8-4.8H3.2z" />
                  </svg>
                </button>
                {isCoursesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 bg-[#f5e8ec] rounded-2xl shadow-lg border border-[#e5d5e0] p-4 z-50 space-y-2">
                    <a href="/ielts" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#d72646] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        IELTS
                      </div>
                      <span className="text-base font-semibold text-[#333]">IELTS</span>
                    </a>
                    <a href="/pte" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#2c5aa0] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        PTE
                      </div>
                      <span className="text-base font-semibold text-[#333]">PTE</span>
                    </a>
                    <a href="/" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        CELPIP
                      </div>
                      <span className="text-base font-semibold text-[#333]">CELPIP</span>
                    </a>
                    <a href="/" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#10b981] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0 text-center">
                        BUS.
                      </div>
                      <span className="text-base font-semibold text-[#333]">Business Communications</span>
                    </a>
                    <a href="/spoken-english" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        SE
                      </div>
                      <span className="text-base font-semibold text-[#333]">Spoken English</span>
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-[#d90f40] transition">Results</a>
              <a href="#" className="hover:text-[#d90f40] transition">About Us</a>
              <a href="/contact-us" className="hover:text-[#d90f40] transition">Contact Us</a>
            </nav>

            <button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#d90f40] text-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-[0_10px_20px_-16px_rgba(217,15,64,0.9)] hover:opacity-90 transition whitespace-nowrap">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" />
              </svg>
              Enroll Now
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="inline-flex sm:hidden h-11 w-11 items-center justify-center rounded-lg bg-[#d90f40] text-white shadow-[0_10px_20px_-16px_rgba(217,15,64,0.9)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 sm:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/25"
        />

        <aside
          className={`absolute inset-y-0 left-0 w-[84%] max-w-[20rem] bg-white shadow-[0_20px_40px_-22px_rgba(0,0,0,0.35)] px-5 py-5 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Apex Edge logo" className="h-9 w-9 object-contain" />
              <span className="text-[#d90f40] font-extrabold tracking-tight text-2xl">Apex Edge</span>
            </div>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-xs"
            >
              ✕
            </button>
          </div>

          <button className="mt-6 w-full rounded-xl bg-[#d90f40] py-3.5 text-white text-lg font-semibold">
            Book a Free Session
          </button>

          <nav className="mt-7 space-y-5 text-xl font-semibold text-[oklch(0.2_0.02_250)]">
            <a href="#" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </a>
            <div>
              <button
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                className="w-full text-left flex items-center gap-3 hover:text-[#d90f40] transition"
              >
                <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" />
                </svg>
                <span>Online Courses</span>
                <svg className={`w-5 h-5 ml-auto transition-transform ${isCoursesDropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.2 5.5L8 10.3l4.8-4.8H3.2z" />
                </svg>
              </button>
              {isCoursesDropdownOpen && (
                <div className="mt-4 bg-[#f5e8ec] rounded-2xl p-4 space-y-3">
                  <a href="/ielts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#d72646] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      IELTS
                    </div>
                    <span className="text-base font-semibold text-[#333]">IELTS</span>
                  </a>
                  <a href="/pte" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#2c5aa0] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      PTE
                    </div>
                    <span className="text-base font-semibold text-[#333]">PTE</span>
                  </a>
                  <a href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      CELPIP
                    </div>
                    <span className="text-base font-semibold text-[#333]">CELPIP</span>
                  </a>
                  <a href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      BUS.
                    </div>
                    <span className="text-base font-semibold text-[#333]">Business Communications</span>
                  </a>
                  <a href="/spoken-english" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      SE
                    </div>
                    <span className="text-base font-semibold text-[#333]">Spoken English</span>
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <span>Results</span>
            </a>
            <a href="#" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>About Us</span>
            </a>
            <a href="/contact-us" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </nav>

          <div className="mt-8 border-t border-black/10 pt-7">
            <button className="w-full rounded-xl bg-[#d90f40] py-3.5 text-white text-lg font-semibold">
              Enroll Now
            </button>
          </div>
        </aside>
      </div>

      <div className={`transition-all duration-300 ${isScrolled ? "h-20 sm:h-24" : "h-24 sm:h-32 lg:h-34"}`} />

      {/* Hero */}
      <main className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pt-2 sm:pt-8 lg:pt-12 pb-12 lg:pb-20 relative overflow-hidden">
        <div className="sm:hidden rounded-4xl px-4 pt-4 pb-4">
          <h1 className="text-center text-[1.75rem] leading-[1.14] font-extrabold tracking-tight text-[oklch(0.14_0.02_250)]">
            Best English Learning
            <span className="block">Platform in India</span>
          </h1>



          <div className="mt-5 flex justify-center">
            <img
              src={studentGirl}
              alt="Smiling student"
              width={896}
              height={1024}
              className="w-full max-w-[18rem] h-auto object-contain"
            />
          </div>

            <button className="mt-4 w-full rounded-[0.9rem] bg-[#d90f40] py-3.5 text-white text-xl font-semibold shadow-[0_18px_24px_-20px_rgba(217,15,64,0.8)]">
            Start Your Journey
          </button>
        </div>

        <div className="hidden sm:block">
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
          <div className="relative z-10 max-w-2xl lg:ml-6 xl:ml-10">
            <h1 className="font-extrabold text-(--brand-text) leading-[1.02] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <div>GO BEYOND THE</div>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap mt-2">
                <span>LIMITATIONS</span>
                <span className="inline-flex items-center justify-center px-5 sm:px-6 py-2 border-2 border-(--brand-text) rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                  OF
                </span>
              </div>
              <div className="mt-2">EDUCATION</div>
            </h1>

            <p className="mt-6 sm:mt-8 text-(--brand-muted) text-sm sm:text-base md:text-lg max-w-md lg:max-w-lg leading-relaxed">
              Solutions and flexible online leaning, you can study anywhere
              through this platform.
            </p>

            <button className="mt-6 sm:mt-8 bg-[#d90f40] hover:bg-[#c50e3a] text-white px-7 sm:px-8 py-3 rounded-md text-sm sm:text-base transition shadow-[0_12px_24px_-18px_rgba(217,15,64,0.9)]">
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
        </div>
      </main>

      <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-12 lg:pb-16">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#d70c3f] px-4 py-5 sm:px-6 sm:py-7 lg:px-10 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.5fr)_minmax(0,0.22fr)] items-center">
            <div className="rounded-[1.6rem] bg-white p-4 sm:p-5 lg:p-6 text-center shadow-[0_20px_40px_-30px_rgba(6,14,34,0.5)]">
              <p className="text-base sm:text-lg leading-snug text-[oklch(0.23_0.02_250)]">
                Consult Our Experts for a
              </p>
              <p className="mt-1 text-[1.45rem] sm:text-[1.7rem] font-semibold leading-none text-[#d70c3f]">
                Free Session
              </p>

              <p className="mt-4 flex items-center justify-center gap-2 text-[#d70c3f] text-xl sm:text-2xl font-bold tracking-tight">
                <span aria-hidden="true">📞</span>
                +91 98788 70737
              </p>

              <button className="mt-5 w-full rounded-xl bg-[#d70c3f] py-3 text-white text-lg sm:text-xl font-semibold hover:opacity-90 transition">
                Call Us Now
              </button>
            </div>

            <div className="text-white lg:pl-2 xl:pl-3">
              <h3 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] leading-[1.08] font-extrabold tracking-tight">
                Unlock IELTS / CELPIP / PTE Success with a Free Demo!
              </h3>
              <p className="mt-3 text-base sm:text-lg lg:text-[1.25rem] leading-relaxed max-w-4xl text-white/95">
                Join our free class, and if you enjoy it, enroll in our regular
                programmes for unmatched improvement in your English skills.
              </p>

              <p className="mt-3 text-sm sm:text-base font-semibold tracking-wide text-white/95">
                IELTS / CELPIP / PTE
              </p>

              <button className="mt-6 rounded-xl bg-white px-6 sm:px-8 py-3 text-[#d70c3f] text-lg sm:text-xl font-semibold hover:bg-white/90 transition">
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
        <div className="rounded-[2.25rem]  p-5 sm:p-8 lg:p-12 xl:p-14">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold tracking-tight text-(--brand-text)">
                How to Change Life with <span className="text-[#d72646]">Apex Edge?</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[oklch(0.32_0.02_250)] max-w-3xl">
               Step into a smarter, more refined way of mastering English with Apex Edge English—
                where ambition meets expert guidance.

                Whether you're aiming for a high band score in IELTS,
                sharpening your Spoken English,
                or preparing for PTE with precision,
                our thoughtfully designed self-study resources set you on the path to success.

                Crafted for modern learners,
                our materials combine clarity, structure, and real exam insight—
                so you don’t just study, you excel.

                Every guide and practice module is created to elevate your confidence,
                accuracy, and fluency effortlessly.
              </p>

              <h2 className="mt-7 text-2xl sm:text-3xl font-semibold text-[oklch(0.2_0.02_250)]">
                Why Choose Apex Edge English?
              </h2>

              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-3 text-[1.35rem] sm:text-[1.3rem] text-[oklch(0.25_0.02_250)] leading-snug">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20a55a] text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l2.5 2.5 6-6" />
                    </svg>
                  </span>
                  Complimentary one-on-one counselling sessions with experienced mentors
                </li>

                <li className="flex items-start gap-3 text-[1.35rem] sm:text-[1.3rem] text-[oklch(0.25_0.02_250)] leading-snug">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20a55a] text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l2.5 2.5 6-6" />
                    </svg>
                  </span>
                  Flexible, high-quality online classes designed around your schedule
                </li>

                <li className="flex items-start gap-3 text-[1.35rem] sm:text-[1.3rem] text-[oklch(0.25_0.02_250)] leading-snug">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20a55a] text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l2.5 2.5 6-6" />
                    </svg>
                  </span>
                  Fully personalized study plans with consistent tracking and accountability
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
      <ApexEdgeFooter />
    </div>
  );
}
