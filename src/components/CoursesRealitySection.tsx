import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, MonitorPlay, Presentation, ScanText } from "lucide-react";

type CourseCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  number: string;
  arrowPosition: "top" | "bottom";
};

const courses: CourseCard[] = [
  {
    title: "IELTS Online Course",
    description:
      "With our online course on IELTS, you will get all the tools and resources needed to improve your IELTS score. Our expert guidance will ensure you are well-prepared for the exam with structured lessons and practice tests.",
    icon: MonitorPlay,
    accent: "#2cb7c7",
    number: "01",
    arrowPosition: "top",
  },
  {
    title: "PTE Preparation Online",
    description:
      "Our PTE preparation online program is designed to help you excel in every aspect of the test. Learn at your own pace and gain the skills to secure top scores, making it the best online platform to learn English for test-takers.",
    icon: Presentation,
    accent: "#f79c45",
    number: "02",
    arrowPosition: "bottom",
  },
  {
    title: "Spoken English Course",
    description:
      "Master the art of communication with our online Spoken English course and enhance your English speaking skills. This course will help you gain confidence in daily conversations, ensuring you are fluent and articulate in any situation.",
    icon: BookOpenCheck,
    accent: "#98125d",
    number: "03",
    arrowPosition: "top",
  },
  {
    title: "CELPIP Preparation",
    description:
      "Prepare with focused CELPIP practice, expert feedback, and strategy-driven lessons that help you improve fluency, accuracy, and test confidence.",
    icon: ScanText,
    accent: "#e34f62",
    number: "04",
    arrowPosition: "bottom",
  },
];

function ChevronStack({ color, position }: { color: string; position: "top" | "bottom" }) {
  const base = position === "top" ? "top-4" : "bottom-4";

  return (
    <div className={`absolute left-4 ${base} hidden sm:flex items-center`} aria-hidden="true">
      <span className="flex -space-x-2">
        <span className="text-[2.6rem] leading-none font-extrabold" style={{ color }}>
          ›
        </span>
        <span className="text-[2.6rem] leading-none font-extrabold" style={{ color }}>
          ›
        </span>
        <span className="text-[2.6rem] leading-none font-extrabold" style={{ color }}>
          ›
        </span>
      </span>
    </div>
  );
}

export function CoursesRealitySection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24 font-serif">
      <div className="rounded-[2.4rem] bg-[#fafafa] border border-[#e3e3e8] px-4 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-384">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[oklch(0.16_0.02_250)] max-w-5xl mx-auto">
            <span>Turn Your Dreams into Reality with </span>
            <span className="text-[#d90f40]">Apex Edge</span>
            <span className="block">Courses</span>
          </h2>

          <p className="mt-5 text-center text-sm sm:text-base lg:text-lg leading-relaxed text-[oklch(0.26_0.02_250)] max-w-5xl mx-auto font-medium">
            Achieve your language goals with Apex Edge, where we offer comprehensive solutions customised to your needs.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 items-stretch">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const isTop = course.arrowPosition === "top";
              const isAlternate = index % 2 === 1;

              return (
                <article
                  key={course.title}
                  className="relative overflow-visible text-white shadow-[0_1px_0_rgba(17,24,39,0.05),0_14px_34px_-22px_rgba(0,0,0,0.28)] min-h-96 px-5 sm:px-6 pt-16 pb-6"
                  style={{
                    backgroundColor: course.accent,
                    borderRadius: isAlternate ? "0.55rem 1.7rem 0.55rem 1.7rem" : "1.7rem 0.55rem 1.7rem 0.55rem",
                  }}
                >
                  <ChevronStack color="#ffffff" position={course.arrowPosition} />

                  <div className="absolute right-5 top-4 text-[2.8rem] sm:text-[3.1rem] lg:text-[3.6rem] font-bold leading-none tracking-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
                    {course.number}
                  </div>

                  <div className="mt-14 text-center">
                    <h3 className="text-[1.1rem] sm:text-[1.2rem] lg:text-[1.35rem] leading-tight font-bold tracking-tight max-w-[12ch] mx-auto">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-[0.8rem] sm:text-[0.86rem] lg:text-[0.92rem] leading-6 font-medium max-w-[20ch] mx-auto text-white/92">
                    {course.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
