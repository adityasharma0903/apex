import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import logo from "@/assets/logo.png";
import studentGirl from "@/assets/student-girl.png";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

const adminEmail = "apexedge@gmail.com";
const phoneNumber = "+91 79869 01874";
const whatsappNumber = "+91 88377 35452";

export function ContactUsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [method, setMethod] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const formReady = useMemo(
    () =>
      name.trim() &&
      email.trim() &&
      phone.trim() &&
      location.trim() &&
      subject.trim() &&
      method.trim() &&
      acceptedTerms,
    [name, email, phone, location, subject, method, acceptedTerms]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formReady) {
      setFormError("Please complete all required fields and accept the terms.");
      return;
    }

    setFormError("");
    const mailSubject = encodeURIComponent(`New Contact Inquiry: ${subject}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nInquiry Subject: ${subject}\nPreferred Contact Method: ${method}\nMessage: ${message || "N/A"}`
    );
    window.location.href = `mailto:${adminEmail}?subject=${mailSubject}&body=${body}`;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3dde2] text-xs sm:text-sm">
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`hidden sm:block bg-[#d90f40] text-white transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
            }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 h-12 flex items-center justify-between text-xs sm:text-sm font-semibold">
            <div className="hidden md:flex items-center gap-2.5 whitespace-nowrap">
              <span className="text-base" aria-hidden="true">🎁</span>
              <span>Claim FREE Demo Class & Scholarships</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-4 ml-auto whitespace-nowrap">
              <a href={`mailto:${adminEmail}`} className="hover:opacity-85 transition">
                {adminEmail}
              </a>
              <span className="hidden sm:inline-block h-5 w-px bg-white" />
              <a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="hover:opacity-85 transition">
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pt-0 sm:pt-1">
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-300 ${isScrolled
              ? "mt-1.5 rounded-xl bg-white border border-[#eed7df] shadow-[0_10px_30px_-24px_rgba(20,20,40,0.45)]"
              : "-mt-1 rounded-b-[1.65rem] bg-white border border-[#f0f0f0] shadow-[0_18px_28px_-22px_rgba(0,0,0,0.35)]"
              } px-4 sm:px-6 lg:px-8 py-3.5`}
          >
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <img src={logo} alt="Apex Edge logo" className="h-10 w-10 sm:h-11 sm:w-11 object-contain" />
              <span className="text-[#d90f40] font-extrabold tracking-tight text-base sm:text-lg lg:text-xl">Apex Edge</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-semibold text-[oklch(0.2_0.02_250)]">
              <Link to="/" className="hover:text-[#d90f40] transition">Home</Link>
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
                    <Link to="/ielts" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#d72646] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">IELTS</div>
                      <span className="text-base font-semibold text-[#333]">IELTS</span>
                    </Link>
                    <Link to="/pte" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#2c5aa0] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">PTE</div>
                      <span className="text-base font-semibold text-[#333]">PTE</span>
                    </Link>
                    <a href="/" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">CELPIP</div>
                      <span className="text-base font-semibold text-[#333]">CELPIP</span>
                    </a>
                    <a href="/" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#10b981] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0 text-center">BUS.</div>
                      <span className="text-base font-semibold text-[#333]">Business Communications</span>
                    </a>
                    <Link to="/spoken-english" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer">
                      <div className="w-11 h-11 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">SE</div>
                      <span className="text-base font-semibold text-[#333]">Spoken English</span>
                    </Link>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-[#d90f40] transition">Results</a>
              <a href="#" className="hover:text-[#d90f40] transition">About Us</a>
              <Link to="/contact-us" className="text-[#d90f40] transition">Contact Us</Link>
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
        className={`fixed inset-0 z-60 sm:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
          className={`absolute inset-y-0 left-0 w-[84%] max-w-[20rem] bg-white shadow-[0_20px_40px_-22px_rgba(0,0,0,0.35)] px-5 py-5 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </Link>
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
                  <Link to="/ielts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 bg-[#d72646] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">IELTS</div>
                    <span className="text-base font-semibold text-[#333]">IELTS</span>
                  </Link>
                  <Link to="/pte" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 bg-[#2c5aa0] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">PTE</div>
                    <span className="text-base font-semibold text-[#333]">PTE</span>
                  </Link>
                  <a href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">CELPIP</div>
                    <span className="text-base font-semibold text-[#333]">CELPIP</span>
                  </a>
                  <a href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">BUS.</div>
                    <span className="text-base font-semibold text-[#333]">Business Communications</span>
                  </a>
                  <Link to="/spoken-english" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">SE</div>
                    <span className="text-base font-semibold text-[#333]">Spoken English</span>
                  </Link>
                </div>
              )}
            </div>
            <a href="#" className="flex items-center gap-3">Results</a>
            <a href="#" className="flex items-center gap-3">About Us</a>
            <Link to="/contact-us" className="flex items-center gap-3 text-[#d90f40]" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </aside>
      </div>

      <div className="h-28 sm:h-32" />

      <section className="bg-[#f3dde2] pb-8">
        <div className="w-full overflow-hidden shadow-[0_20px_40px_-30px_rgba(15,23,42,0.45)]">
          <div className="grid min-h-[42vh] grid-cols-1 lg:min-h-[46vh] lg:grid-cols-2">
            <div className="relative min-h-60 bg-[#1e1c2a] lg:min-h-[30vh]">
              <img
                src={studentGirl}
                alt="Deepika Chawla"
                className="h-130 w-full -translate-y-1 object-cover"
              />
            </div>

            <div className="bg-[#f6e7eb] px-6 py-8 text-[#111827] sm:px-10 sm:py-10 lg:px-14 lg:py-10">
              <p className="text-sm uppercase tracking-[0.24em] text-[#d90f40]">Get in Touch</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
                Reach Apex Edge for fast support and expert guidance.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#4b5563] sm:text-lg">
                Connect with our team for personalised help, course counselling, or any query related to IELTS, PTE, CELPIP, Business Communications and Spoken English.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="inline-flex items-center gap-3 rounded-3xl bg-[#fef2f2] px-4 py-3 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d90f40] text-white">A</span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[#6b7280]">Brand</p>
                    <p className="font-semibold text-[#111827]">Apex Edge</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-4">
                  <a href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25d366] text-white shadow-sm transition hover:bg-[#1ebe5a]">
                    <span className="text-lg font-bold">W</span>
                  </a>
                  <a href={`mailto:${adminEmail}`} className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f72585] text-white shadow-sm transition hover:bg-[#d31d72]">
                    <span className="text-lg font-bold">@</span>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a66c2] text-white shadow-sm transition hover:bg-[#0557a4]">
                    <span className="text-lg font-bold">in</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2 text-xl font-bold text-[#111827] sm:flex-row sm:items-center sm:gap-8 sm:text-2xl">
                <a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="transition hover:text-[#d90f40]">{phoneNumber}</a>
                <a href={`mailto:${adminEmail}`} className="transition hover:text-[#d90f40]">{adminEmail}</a>
              </div>

              <p className="mt-4 text-sm font-semibold text-[#6b7280]">Anchor | Corporate Trainer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3dde2] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-[1.8rem] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">Call</p>
              <h2 className="mt-4 text-xl font-semibold text-[#111827]">Phone Support</h2>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">Talk with our advisors directly for fast answers and course guidance.</p>
              <a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#eff6ff] px-4 py-3 text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#dbeafe]">
                Call Now
              </a>
            </article>

            <article className="rounded-[1.8rem] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">WhatsApp</p>
              <h2 className="mt-4 text-xl font-semibold text-[#111827]">Chat on WhatsApp</h2>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">Send us a message instantly and we’ll reply with all the details you need.</p>
              <a href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#dcfce7] px-4 py-3 text-sm font-semibold text-[#15803d] transition hover:bg-[#bbf7d0]">
                Message Us
              </a>
            </article>

            <article className="rounded-[1.8rem] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">Email</p>
              <h2 className="mt-4 text-xl font-semibold text-[#111827]">Send an Email</h2>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">Share your questions or requirements, and we’ll respond swiftly to your inbox.</p>
              <a href={`mailto:${adminEmail}`} className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#fef3c7] px-4 py-3 text-sm font-semibold text-[#b45309] transition hover:bg-[#fde68a]">
                Email Us
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#6b7280]">Multiple Ways to Reach Us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#111827] sm:text-4xl">Contact Options</h2>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-4 md:grid-cols-2">
            <div className="rounded-[1.8rem] border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#0f766e] text-white">
                <span className="text-xl">📍</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#111827]">Visit Our Campus</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">#885, Blueberry Fields School, Derabassi, Punjab.</p>
            </div>

            <div className="rounded-[1.8rem] border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#facc15] text-white">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#111827]">Call Us</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{phoneNumber}<br />+91 98776 53180</p>
            </div>

            <div className="rounded-[1.8rem] border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#0f766e] text-white">
                <span className="text-xl">✉️</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#111827]">Email Us</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{adminEmail}</p>
            </div>

            <div className="rounded-[1.8rem] border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#facc15] text-white">
                <span className="text-xl">⏰</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#111827]">Office Hours</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">Mon - Sat, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-[#f3dde2] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#ead4da] bg-[#f6e7eb] p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] sm:p-8">
            <div className="relative mx-auto max-w-262.5">
              <div className="absolute -left-8 top-1/2 z-20 hidden h-108 w-80 -translate-y-1/2 overflow-hidden rounded-sm bg-[#f1284b] shadow-[0_26px_42px_-24px_rgba(0,0,0,0.58)] lg:block">
                <img
                  src={studentGirl}
                  alt="Apex Edge contact"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="ml-auto w-full rounded-sm border border-[#ebedf0] bg-white px-5 py-8 sm:px-8 lg:min-h-104 lg:w-[94%] lg:px-12 lg:pl-64 lg:pr-12">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7a8190]">Get in Touch Form</p>
                <h2 className="mt-2 text-[32px] font-bold tracking-tight text-[#20324a]">Send us your inquiry</h2>
                <p className="mt-2 text-sm text-[#8f97a6]">Fill this form and we will get back to you soon.</p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-[#111827]">
                      Full Name
                      <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your full name"
                        className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                        required
                      />
                    </label>

                    <label className="space-y-2 text-sm font-semibold text-[#111827]">
                      Email Address
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="your.email@company.com"
                        className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                        required
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-[#111827]">
                      Phone Number
                      <input
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="+91 98776 53180"
                        className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                        required
                      />
                    </label>

                    <label className="space-y-2 text-sm font-semibold text-[#111827]">
                      Location
                      <input
                        type="text"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="City, state or country"
                        className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                        required
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-[#111827]">
                      Inquiry Subject
                      <select
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                        required
                      >
                        <option value="" disabled>Select subject</option>
                        <option value="IELTS">IELTS</option>
                        <option value="PTE">PTE</option>
                        <option value="CELPIP">CELPIP</option>
                        <option value="Business Communications">Business Communications</option>
                        <option value="Spoken English">Spoken English</option>
                      </select>
                    </label>

                    <label className="space-y-2 text-sm font-semibold text-[#111827]">
                      Preferred Contact Method
                      <select
                        value={method}
                        onChange={(event) => setMethod(event.target.value)}
                        className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                        required
                      >
                        <option value="" disabled>How should we contact you?</option>
                        <option value="Phone">Phone</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                      </select>
                    </label>
                  </div>

                  <label className="space-y-2 text-sm font-semibold text-[#111827]">
                    Message
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us about your requirements..."
                      className="min-h-30.5 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 py-3 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                    />
                  </label>

                  <label className="flex items-center gap-3 text-sm text-[#4b5563]">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => setAcceptedTerms(event.target.checked)}
                      className="h-4 w-4 rounded border-[#d1d5db] text-[#f1284b] focus:ring-[#f1284b]"
                      required
                    />
                    I accept the terms and conditions
                  </label>

                  {formError && <p className="text-sm text-[#b91c1c]">{formError}</p>}

                  <button
                    type="submit"
                    className="inline-flex h-12 min-w-39.5 items-center justify-center rounded-full bg-[#f1284b] px-8 text-base font-semibold text-white transition hover:bg-[#db2243] disabled:cursor-not-allowed disabled:opacity-65"
                    disabled={!formReady}
                  >
                    SEND
                  </button>
                </form>
              </div>

              <div className="mb-5 overflow-hidden rounded-sm bg-[#f1284b] p-2 lg:hidden">
                <img
                  src={studentGirl}
                  alt="Apex Edge contact"
                  className="h-56 w-full rounded-sm object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApexEdgeFooter />
    </main>
  );
}
