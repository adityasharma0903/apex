import { useState } from "react";

export function ApexEdgeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 py-10 lg:py-14">
      <div className="rounded-[2rem] bg-[#f9f9f9] border border-[#e5e5e5] p-6 sm:p-8 lg:p-9 xl:p-10 max-w-370 mx-auto">
        <div className="text-center">
          <h2 className="text-[1.95rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold leading-tight">
            <span className="text-[#d72646]">Apex Edge</span>
            <span className="text-[#333]"> : Your Pathway to Global Education!</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-[1.12rem] leading-relaxed text-[#555] max-w-[74ch] mx-auto">
            Studying abroad undoubtedly is a dream for many! Why don't you turn it into a reality? Choose Apex Edge and avail of the most trusted guidance in shaping an enhanced career!
          </p>

          <p className="mt-4 text-sm sm:text-base lg:text-[1.12rem] leading-relaxed text-[#555] max-w-[74ch] mx-auto">
            Apex Edge can be your ultimate guide in efficiently cracking the IELTS, and PTE examinations along with refining your Spoken English to secure your seat in international universities of immense repute!
          </p>

          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            aria-expanded={isExpanded}
            className="mt-7 inline-flex items-center justify-center rounded-full border border-[#d72646] text-[#d72646] font-semibold text-base sm:text-lg px-8 py-2.5 hover:bg-[#d72646] hover:text-white transition-all duration-300"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? "max-h-1040 opacity-100 mt-7" : "max-h-0 opacity-0"}`}>
          <div className="space-y-6 px-2 py-1">
            <p className="text-base leading-relaxed text-[#555]">
              Studying abroad undoubtedly is a dream for many! Why don't you turn it into a reality? Choose Apex Edge and avail of the most trusted guidance in shaping an enhanced career!
            </p>

            <p className="text-base leading-relaxed text-[#555]">
              Apex Edge can be your ultimate guide in efficiently cracking the IELTS, and PTE examinations along with refining your Spoken English to secure your seat in international universities of immense repute!
            </p>

            <p className="text-base leading-relaxed text-[#555]">
              Embrace our coaching facilities and get the opportunity to polish your proficiency in the English language through extensive mock tests, study resources, assets, and valuable feedback from the best trainers. Join us today and study abroad requirements within a single platform!
            </p>

            <div className="border-t border-[#e5e5e5] pt-6">
              <h3 className="text-xl font-bold text-[#333] mb-4">
                Enrol in Apex Edge: Here's How to Start!
              </h3>

              <p className="text-base leading-relaxed text-[#555] mb-6">
                Joining Apex Edge is a seamless experience that ensures you're equipped with the best resources from day one. Here's the detailed process to get started:
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    Start with a Free Demo Class
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Before diving into full enrollment, experience our teaching methods through a demo class. Whether you're preparing for IELTS, PTE, or focusing on Spoken English, the demo session will showcase how our platform operates. You will gain insight into how our different online courses are structured, allowing you to make an informed decision.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    Register for Your Chosen Course
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Once you've completed the demo, you can easily register for the course that best fits your goals. Whether you are aiming to enrol in any of the preparation courses, registration is very smooth and user-friendly. Simply select your course, provide the necessary details, and get started. This process is designed to be quick and straightforward, ensuring you can focus on learning.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    Access Comprehensive Course Materials
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Once you register, you'll gain immediate access to our extensive study resources. These materials are designed to help you effectively prepare for exams like IELTS and PTE with in-depth modules. For those focusing on Spoken English, our interactive lessons emphasize real-world communication skills.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    Engage in Live, Interactive Classes
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Attend live sessions led by expert instructors, who offer personalised guidance and real-time feedback. Whether it's mastering the intricacies of IELTS writing or refining your Spoken English skills, our classes are designed to meet individual learning needs. You will also have access to IELTS mock tests online to track your progress.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    Complete Assignments and Practice Tests
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    As you progress through your course, you'll be assigned tasks and practice tests that reinforce your learning. Completing these assignments is crucial to build confidence as you approach your final assessments. Our mock tests in virtual exam conditions, allowing you to familiarise yourself with the format and timing.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    Track Progress and Achieve Certification
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Throughout your learning journey, you will have opportunities to complete mock tests and assessments. These not only help you track your progress but also prepare you for the final exam. Upon successful completion, you can gain certification, proving you've studied the best course in English proficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e5e5e5] pt-6">
              <p className="text-base leading-relaxed text-[#555] mb-4">
                IELTS being one of the most important English language proficiency tests, has an immense role to play in shaping one's course of success in terms of studying abroad. At Apex Edge you can get offloaded coaching from the best IELTS trainer online. So, enrol with us today and become an ace achiever with the best IELTS online classes.
              </p>

              <p className="text-base leading-relaxed text-[#555] mb-4">
                The Pearson Test is one of the major examinations one must qualify for to enhance their career prospects abroad. We provide extensive guidance for cracking the PTE test in just one attempt! Enrol with us today and explore the PTE exam modules and PTE course details.
              </p>

              <p className="text-base leading-relaxed text-[#555]">
                Bring major improvement to your overall communication skills with the most reliable online English speaking classes at Apex Edge. We are here to help you refine your English speaking skills with the most engaging and strategic lesson plans! Choose Apex Edge and book your seats now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
