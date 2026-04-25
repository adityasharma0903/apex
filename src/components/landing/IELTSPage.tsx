import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Headphones, BookOpen, PenTool, MessageSquare, CheckCircle2, ShieldCheck, UserCheck, GraduationCap, Zap, CircleArrowRight, Star, ArrowRight, Play, Quote } from "lucide-react";
import { Navbar } from "../Navbar";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

// Using the generated images
import studentPrep from "@/assets/student-girl.png"; // Placeholder for the hero, or I can use the absolute path if I want but let's use the workspace assets if available or just the path for now.
const heroStudent = "/students/ielts.png";
const groupStudent = "/students/group.png";

const modules = [
  {
    title: "Speaking",
    icon: <MessageSquare className="w-10 h-10" />,
    iconColor: "text-blue-500",
    bg: "bg-[#e0f2fe]", // Light Blue
    border: "border-blue-200",
    rotate: "-rotate-2",
    description: "Both IELTS Academic and General Training tests follow the same structure for the Speaking section. It is a face-to-face interview with an examiner and lasts 11-14 minutes. The interview is divided into three parts: personal introduction, discussing a specific topic, and answering broader questions. This section checks your ability to speak English fluently, coherently, and accurately.",
  },
  {
    title: "Reading",
    icon: <BookOpen className="w-10 h-10" />,
    iconColor: "text-orange-500",
    bg: "bg-[#fff7ed]", // Light Orange
    border: "border-orange-200",
    rotate: "rotate-2",
    description: "The Reading section is different in both IELTS Academic and General Training formats. In the Academic test, you will read three long, complex passages on various academic subjects. In the General Training test, the passages are more related to everyday life, such as advertisements or instructions. Both formats require answering 40 questions within 60 minutes. This section evaluates your ability to understand the main ideas, details, and the author's tone.",
  },
  {
    title: "Listening",
    icon: <Headphones className="w-10 h-10" />,
    iconColor: "text-emerald-500",
    bg: "bg-[#ecfdf5]", // Light Green
    border: "border-emerald-200",
    rotate: "-rotate-1",
    description: "The Listening section is common to both IELTS Academic and General Training exams. It consists of 40 questions based on four audio recordings. The audio includes conversations, monologues, and real-life situations. You are required to listen attentively and answer questions while the audio is played. This section lasts for 30 minutes, with an additional 10 minutes provided for transferring answers to the answer sheet.",
  },
  {
    title: "Writing",
    icon: <PenTool className="w-10 h-10" />,
    iconColor: "text-pink-500",
    bg: "bg-[#fdf2f8]", // Light Pink
    border: "border-pink-200",
    rotate: "rotate-3",
    description: "In the Writing section, both the Academic and General Training formats have two tasks. In the Academic test, Task 1 involves describing data from a graph or chart, while Task 2 requires writing a formal essay. The General Training test's Task 1 asks you to write a letter, and Task 2 is an essay on a general topic. Both tasks need to be completed within 60 minutes.",
  },
];

const eligibilityCriteria = [
  {
    title: "Age Limit",
    icon: <UserCheck className="w-8 h-8 text-[#d90f40]" />,
    description: "Anyone aged 16 years and above can appear for the IELTS exam, making it accessible for high schoolers and professionals alike.",
  },
  {
    title: "Academic Requirements",
    icon: <GraduationCap className="w-8 h-8 text-[#d90f40]" />,
    description: "There are no specific academic prerequisites. Whether you're a student or a working professional, you're eligible.",
  },
  {
    title: "Valid ID Proof",
    icon: <ShieldCheck className="w-8 h-8 text-[#d90f40]" />,
    description: "A valid passport is mandatory to register and appear for the IELTS exam globally.",
  },
];

export function IELTSPage() {
  return (
    <div className="min-h-screen bg-[#fdf2e8] overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-12 lg:gap-16 items-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-bold text-xs sm:text-sm mb-6 sm:mb-8 uppercase tracking-widest mx-auto lg:mx-0">
               <Zap className="w-4 h-4" /> Most Popular Course
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-tight sm:leading-[1.05] mb-6 sm:mb-8 tracking-tight">
              Unlock Your <br className="hidden sm:block" /> <span className="text-[#d90f40]">Global Future</span> <br className="hidden sm:block" /> with IELTS.
            </h1>
            <p className="text-lg sm:text-xl text-[#555] leading-relaxed mb-8 sm:mb-12 max-w-xl font-medium mx-auto lg:mx-0">
              Join our comprehensive coaching program designed to help you 
              achieve a Band 8.0 or higher. Personalized strategies for every module.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6">
              <Link to="/book-session" className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#d90f40] text-white font-bold text-base sm:text-lg shadow-[0_20px_40px_-10px_rgba(217,15,64,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-3 group">
                Start Your Journey <CircleArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center justify-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#1a1a1a]/10 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-1" />
                </div>
                <span className="font-bold text-base sm:text-lg text-[#1a1a1a]">Watch Demo</span>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
               <div className="flex -space-x-3 sm:-space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg">
                       <img src={`/teachers/${i % 2 === 0 ? 'priya' : 'anurag'}.png`} className="w-full h-full object-cover" alt="Student" />
                    </div>
                  ))}
               </div>
               <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-black text-[#1a1a1a]">15,000+</p>
                  <p className="text-[10px] sm:text-sm font-bold text-gray-500 uppercase tracking-widest">Successful Students</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-[#d90f40] rounded-[2.5rem] sm:rounded-[4rem] rotate-3 blur-3xl opacity-5" />
            <div className="relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white">
              <img 
                src={heroStudent} 
                alt="IELTS Student" 
                className="w-full h-[400px] sm:h-[650px] object-cover"
              />
              <div className="absolute top-6 sm:top-10 right-6 sm:top-10 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-white/50">
                 <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#22a45a] rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">8.5</div>
                    <div>
                       <p className="font-black text-black leading-none text-sm sm:text-base">Target Band</p>
                       <p className="text-[10px] sm:text-xs font-bold text-gray-500 mt-1 uppercase">Top Result</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Section - Redesigned to match the colorful tilted cards */}
      <section className="py-20 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-24 text-center"
          >
            <h2 className="text-3xl sm:text-6xl font-black text-[#1a1a1a] mb-4 sm:mb-6 tracking-tight">
              Master the <span className="text-[#d90f40]">4 Modules</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Our curriculum is laser-focused on the specific skills you need for each section of the test.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-6 lg:gap-4 xl:gap-8 mt-12">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: parseFloat(mod.rotate.replace('rotate-', '-').replace('rotate', '')) }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative p-6 sm:p-8 pt-16 sm:pt-16 pb-10 sm:pb-12 rounded-[2.5rem] ${mod.bg} ${mod.border} border-2 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center`}
              >
                {/* Circular Icon Badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20">
                  <div className={`w-14 h-14 sm:w-18 sm:h-18 rounded-full ${mod.bg} flex items-center justify-center ${mod.iconColor}`}>
                    {mod.icon}
                  </div>
                </div>

                {/* Section Title Badge */}
                <div className="mb-8 px-8 py-2.5 rounded-full bg-white shadow-md inline-block">
                  <h3 className="text-2xl font-black text-[#1a1a1a] tracking-tight">{mod.title}</h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold px-2">
                  {mod.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full opacity-20 bg-black/10" />
                <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full opacity-10 bg-black/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section - Based on Image 3 */}
      <section className="py-20 sm:py-32 bg-[#fdf2e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-6xl font-black text-[#1a1a1a] mb-4 sm:mb-6">
              Eligibility <span className="text-[#d90f40]">Criteria</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-3xl mx-auto">
              Wondering if you can take the IELTS? Here are the simple requirements to get started on your global journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {eligibilityCriteria.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center border-2 border-transparent hover:border-[#d90f40]/5"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-[#d90f40]/5 flex items-center justify-center mb-6 sm:mb-8">
                  {item.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-4">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Based on Image 4 */}
      <section className="py-20 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left">
             <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-6xl font-black text-[#1a1a1a] mb-4 sm:mb-6 leading-tight">
                  The Success <span className="text-[#d90f40]">Results</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-500 font-medium">
                  Meet the candidates achieving 8+ Band with Apex Edge’s best IELTS online coaching!
                </p>
             </div>
             <Link to="/book-session" className="flex items-center gap-3 text-[#d90f40] font-black text-lg sm:text-xl hover:gap-5 transition-all">
                View All Results <ArrowRight className="w-6 h-6" />
             </Link>
          </div>
        </div>

        <div className="relative">
          {/* Mobile Slider / Desktop Marquee */}
          <div className="flex gap-6 sm:gap-8 px-4 sm:px-6 lg:px-12 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 sm:pb-0 sm:animate-marquee">
            {[1,2,3,4,5,6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex-shrink-0 w-[85vw] sm:w-96 p-6 sm:p-8 bg-[#fdf2e8] rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 shadow-xl snap-center"
              >
                 <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-sm mb-6 aspect-[1/1.4] relative overflow-hidden">
                    <img src="/teachers/sneha.png" className="absolute inset-0 w-full h-full object-cover opacity-10" alt="background" />
                    <div className="relative z-10 flex flex-col h-full">
                       <div className="flex justify-between items-start mb-4 sm:mb-6">
                          <div className="text-xl font-black text-[#d90f40]">AE.</div>
                          <div className="bg-[#22a45a] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                             Passed
                          </div>
                       </div>
                       <h5 className="text-lg sm:text-xl font-black text-black mb-1">Candidate Name</h5>
                       <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 sm:mb-6">Candidate ID: #2024{i}</p>
                       
                       <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                          <div>
                             <p className="text-[0.5rem] sm:text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest">Overall</p>
                             <p className="text-3xl sm:text-4xl font-black text-[#d90f40]">8.5</p>
                          </div>
                          <div>
                             <p className="text-[0.5rem] sm:text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest">Listening</p>
                             <p className="text-lg sm:text-xl font-black text-black">9.0</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 overflow-hidden">
                       <img src={`/teachers/${i % 2 === 0 ? 'vikram' : 'priya'}.png`} className="w-full h-full object-cover" alt="Student" />
                    </div>
                    <div>
                       <p className="font-bold text-black leading-none text-sm sm:text-base">IELTS Academic</p>
                       <p className="text-[10px] sm:text-xs font-bold text-[#d90f40] mt-1 uppercase tracking-widest underline">Student Review</p>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#fdf2e8]">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative w-full max-w-xl mx-auto lg:max-w-none"
               >
                  <div className="relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl">
                     <img src={groupStudent} className="w-full h-[400px] sm:h-[600px] object-cover" alt="Students" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 right-8 sm:right-12 text-white">
                        <Quote className="w-8 h-8 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-[#d90f40]" />
                        <p className="text-xl sm:text-3xl font-black leading-tight italic">
                          "Choosing Apex Edge was the best decision for my career. The faculty didn't just teach me IELTS; they taught me how to believe in myself."
                        </p>
                     </div>
                  </div>
               </motion.div>

               <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-6xl font-black text-[#1a1a1a] mb-6 sm:mb-10 leading-tight">
                     Join the <br className="hidden sm:block" /> <span className="text-[#d90f40]">Elite Cohort</span> <br className="hidden sm:block" /> of Success.
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 font-medium mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                     Every student at Apex Edge is a story of ambition and achievement. 
                     We provide the resources, you provide the dream. Together, we make it happen.
                  </p>
                  <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-0">
                     {[
                       "100% Computer-based Simulation Environment",
                       "Updated Materials for 2024 Syllabus",
                       "Fast-track 4-Week Prep Bootcamps",
                       "Direct Access to Certified IDP/BC Mentors"
                     ].map((benefit, i) => (
                       <div key={i} className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl font-bold text-[#1a1a1a] text-left">
                          <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#22a45a] shrink-0" />
                          {benefit}
                       </div>
                     ))}
                  </div>
                  <Link to="/book-session" className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-6 bg-black text-white rounded-2xl sm:rounded-3xl font-black text-lg sm:text-2xl hover:bg-[#d90f40] transition-colors shadow-2xl w-full sm:w-auto">
                     Claim Free Demo Session
                  </Link>
               </div>
            </div>
         </div>
      </section>

      <ApexEdgeFooter />
    </div>
  );
}
