import { useMemo, useState } from "react";
import studentGirl from "@/assets/student-girl.png";

const adminEmail = "deepikaashine@gmail.com";
const phoneNumber = "+91 88377 35452";
const whatsappNumber = "+918837735452";

export function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [method, setMethod] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState("");

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

    const mailSubject = encodeURIComponent(`New Contact Inquiry: ${subject}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nInquiry Subject: ${subject}\nPreferred Contact Method: ${method}\nMessage: ${message || "N/A"}`);
    window.location.href = `mailto:${adminEmail}?subject=${mailSubject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#111827]">
      <section className="overflow-hidden bg-[#faf7f8] pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center rounded-[2rem] bg-white p-6 shadow-[0_15px_50px_-30px_rgba(15,23,42,0.2)] md:p-10">
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.24em] text-[#d90f40]">Get in Touch</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
                Reach Apex Edge for fast support and expert guidance.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#4b5563] sm:text-lg">
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
            </div>

            <div className="relative mx-auto max-w-md sm:max-w-none">
              <div className="rounded-[2rem] border border-[#ecebef] bg-[#f9fafb] p-4 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.25)] sm:p-5">
                <img src={studentGirl} alt="Student smiling" className="w-full rounded-[1.5rem] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-16">
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

      <section className="bg-white py-16">
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
      </section>

      <section className="bg-[#f7f8fb] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#e5e7eb] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)] sm:p-10">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#6b7280]">Get in Touch Form</p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#111827] sm:text-4xl">Send us your inquiry</h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#4b5563]">
                  Fill out the form and our team will reach out via your preferred contact method as soon as possible.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-[#f8fafc] p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-[#111827]">
                      Full Name
                      <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-2xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#d90f40] focus:ring-2 focus:ring-[#fce7f3]"
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
                        className="w-full rounded-2xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#d90f40] focus:ring-2 focus:ring-[#fce7f3]"
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
                        className="w-full rounded-2xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#d90f40] focus:ring-2 focus:ring-[#fce7f3]"
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
                        className="w-full rounded-2xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#d90f40] focus:ring-2 focus:ring-[#fce7f3]"
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
                        className="w-full rounded-2xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#d90f40] focus:ring-2 focus:ring-[#fce7f3]"
                        required
                      >
                        <option value="" disabled>
                          Select subject
                        </option>
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
                        className="w-full rounded-2xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#d90f40] focus:ring-2 focus:ring-[#fce7f3]"
                        required
                      >
                        <option value="" disabled>
                          How should we contact you?
                        </option>
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
                      className="min-h-[140px] w-full rounded-2xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#d90f40] focus:ring-2 focus:ring-[#fce7f3]"
                    />
                  </label>

                  <label className="flex items-center gap-3 text-sm text-[#4b5563]">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => setAcceptedTerms(event.target.checked)}
                      className="h-4 w-4 rounded border-[#d1d5db] text-[#d90f40] focus:ring-[#d90f40]"
                      required
                    />
                    I accept the terms and conditions
                  </label>

                  {formError && <p className="text-sm text-[#b91c1c]">{formError}</p>}

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#d90f40] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#c50e3a] disabled:cursor-not-allowed disabled:bg-[#f4a2b6]"
                    disabled={!formReady}
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
