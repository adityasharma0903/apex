import { Link } from "@tanstack/react-router";
import { Check, CircleArrowRight, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import studentGirl from "@/assets/student-girl.png";

const highlights = [
  "40+ hours of live interactive online IELTS coaching",
  "Top tips and tricks to help you ace your IELTS exam with 8 or above bands",
  "Full-length mock tests with detailed evaluation and precise feedback",
  "Frequent doubt-clearing sessions",
  "4 to 5 weeks of targeted IELTS preparation",
];

const bandOptions = ["Band 6.0 to 7.0", "Band 7.0 to 8.0", "8+ Band"];

export function IELTSPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f8] text-[#1f2430]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-[#d90f40] text-white">
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
          <div className="mx-auto flex items-center justify-between transition-all duration-300 -mt-1 rounded-b-[1.65rem] bg-white border border-[#f0f0f0] shadow-[0_18px_28px_-22px_rgba(0,0,0,0.35)] px-4 sm:px-6 lg:px-8 py-3.5">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <img src={logo} alt="Apex Edge logo" className="h-10 w-10 sm:h-11 sm:w-11 object-contain" />
              <span className="text-[#d90f40] font-extrabold tracking-tight text-lg sm:text-xl lg:text-2xl">Apex Edge</span>
            </Link>

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

      <div className="h-28 sm:h-32 lg:h-34" />

      <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">

        <section className="grid gap-8 pb-10 pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:pb-14 lg:pt-14">
          <div>
            <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[#1f2430] sm:text-[2.6rem] lg:text-[3.6rem]">
              <span className="text-[#d90f40]">IELTS</span> Online Coaching to Achieve Your Dream Band Score
            </h1>

            <ul className="mt-8 space-y-4 sm:space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-base leading-relaxed text-[#1f2430] sm:text-[1.05rem]">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22a45a] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#d90f40] px-7 py-3.5 text-base font-semibold text-white transition hover:opacity-90">
                Start IELTS Journey
                <CircleArrowRight className="h-4.5 w-4.5" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#e8879e] bg-white px-7 py-3.5 text-base font-semibold text-[#d90f40] transition hover:bg-[#fff8fa]">
                Explore IELTS Packages
              </button>
            </div>
          </div>

          <div className="relative min-h-107.5 sm:min-h-130 lg:min-h-152.5">
            <div className="absolute right-4 top-24 h-80 w-80 rounded-full bg-[#d7e7f5] sm:right-6 sm:h-97.5 sm:w-97.5 lg:right-2 lg:top-16 lg:h-117.5 lg:w-117.5" />

            <div className="absolute right-[8%] top-5 rotate-6 rounded-2xl border border-[#d9dde4] bg-white px-5 py-3 shadow-[0_14px_25px_-20px_rgba(9,17,32,0.4)]">
              <p className="text-[0.72rem] font-semibold text-[#6a7386]">Trusted By</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#2a3140]">
                Google
                <Star className="h-3.5 w-3.5 fill-[#21a45d] text-[#21a45d]" />
                Trustpilot
              </p>
            </div>

            <div className="absolute left-8 top-[24%] rotate-[-8deg] rounded-2xl border border-[#d9dde4] bg-white px-6 py-3 shadow-[0_14px_25px_-20px_rgba(9,17,32,0.4)]">
              <p className="text-xl font-bold text-[#2a3140]">5K+</p>
              <p className="text-xs font-semibold text-[#6a7386]">Students Trained</p>
            </div>

            <img
              src={studentGirl}
              alt="Student ready for IELTS coaching"
              className="absolute bottom-0 right-0 z-10 h-105 w-auto object-contain sm:h-125 lg:h-147.5"
            />

            <div className="absolute bottom-2 left-0 z-20 w-full max-w-75 rounded-3xl border border-[#e17c97] bg-white p-3 shadow-[0_22px_40px_-28px_rgba(7,17,32,0.55)] sm:max-w-82.5 sm:p-4">
              <h2 className="text-center text-[1.45rem] font-bold leading-tight text-[#1f2430] sm:text-[1.6rem]">
                What is your Target <span className="text-[#d90f40]">IELTS</span> Band?
              </h2>

              <div className="mt-4 space-y-2.5">
                {bandOptions.map((label, index) => {
                  const active = index === bandOptions.length - 1;

                  return (
                    <button
                      key={label}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-base font-semibold transition ${
                        active
                          ? "border-[#d92a31] bg-[#d92a31] text-white"
                          : "border-[#dc8a9f] bg-white text-[#d92a31] hover:bg-[#fff7f9]"
                      }`}
                    >
                      {label}
                      <CircleArrowRight className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
