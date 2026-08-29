import React, { useState, useRef, useEffect } from 'react';
import logo from './assets/logo.png';
import imgHistory from './assets/history_review.png';
import imgCouple from './assets/couple_consultation.png';
import imgRootCause from './assets/root_cause_analysis.png';
import imgOptions from './assets/options_guidance.png';
import imgRoadmap from './assets/personalized_roadmap.png';

// SVG Icons for clean, zero-dependency illustration
// SVG Icons for clean, zero-dependency illustration
const CheckIcon = ({ className = "text-emerald-500" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const WarningIcon = ({ className = "text-gold-brand" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const InfoIcon = ({ className = "text-plum" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronDownIcon = ({ className = "h-5 w-5 text-slate-400" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const XIcon = ({ className = "text-rose-500" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CalendarIcon = ({ className = "h-5 w-5 mr-2" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LockIcon = ({ className = "text-gold-brand" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-1 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gold-brand" viewBox="0 0 24 24">
    <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191z" />
  </svg>
);

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  </svg>
);

const ArrowUpIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

function App() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Lead form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    duration: '1-2 years',
    priorTreatment: 'none'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (isCarouselHovered) return;
    
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 344, behavior: 'smooth' }); // Scroll approx one card
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: cleaned.slice(0, 10) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    if (formData.phone.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://mysamplewebsite.in/api/crm_leads/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          opportunity: 'Bavishi IVF Surat VSL Campaign',
          salesperson_id: 107,
          company_id: 38,
          contact_name: formData.name,
          description: `Trying Duration: ${formData.duration}\nPrior Treatment: ${formData.priorTreatment}\nSubmission Time: ${new Date().toLocaleString()}`
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert('There was an issue submitting your request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };


  const factChecks = [
    "Trying for 1–3 years, but still no clear reason for the delay.",
    "Reports say “everything is normal”, yet pregnancy is not happening.",
    "After a failed IUI or IVF, the same treatment is suggested again.",
    "Every clinic gives a different opinion, creating more confusion.",
    "Consultations feel rushed, so important questions remain unanswered.",
    "The woman is tested repeatedly, while male fertility factors may be overlooked.",
    "Treatment starts before the couple fully understands the process, cost, or chances.",
    "Months pass, money is spent, but there is still no clear fertility roadmap."
  ];

  const diffSteps = [
    { title: "Your Complete History", desc: "Your previous reports, procedures, medicines, and treatment responses are carefully reviewed.", image: imgHistory },
    { title: "Both Partners Evaluated", desc: "Fertility is not evaluated from only one partner's perspective.", image: imgCouple },
    { title: "The Possible Root Cause", desc: "Treatment should be based on what may be preventing conceptionnot on a standard package.", image: imgRootCause },
    { title: "Your Realistic Options", desc: "You are guided through available options in clear, understandable language.", image: imgOptions },
    { title: "A Personalised Roadmap", desc: "Your treatment plan is created for your medical situationnot copied from another patient.", image: imgRoadmap }
  ];

  const compareTable = {
    usual: [
      "A quick discussion",
      "Another test without explanation",
      "Another medicine standard cycle",
      "Immediate failed cycle recommendation",
      "And more uncertainty"
    ],
    bavishi: [
      "Detailed, thorough history",
      "Previous reports deeply reviewed",
      "Both partners evaluated together",
      "Questions answered clearly",
      "Possible root causes explained upfront",
      "A personalised next-step plan"
    ]
  };

  const stepsNext = [
    { num: "1", title: "Complete the Form", desc: "Tell us how long you have been trying and whether you have undergone previous treatment." },
    { num: "2", title: "Initial Case Review", desc: "Our specialist medical team reviews the information you provide." },
    { num: "3", title: "Appointment Confirmation", desc: "A suitable consultation appointment is confirmed based on availability." },
    { num: "4", title: "Detailed Discussion", desc: "Bring your previous reports, prescriptions and treatment records." },
    { num: "5", title: "Receive Your Roadmap", desc: "Your fertility specialist explains the findings, possible options and recommended next step." }
  ];

  const testimonials = [
    { title: "Personalised Treatment Wins", id: "SbkV-1fSonM", subtitle: "Patient Review", type: "video" },
    { title: "Patient Review", id: "tfc645Tz3vw", subtitle: "Success Story", type: "video" },
    { title: "Patient Review", id: "4M_szNqtRMA", subtitle: "Success Story", type: "video" },
    { title: "Patient Review", id: "EdxW_0MOiOM", subtitle: "Success Story", type: "video" },
    { title: "Patient Review", id: "xHqTCirHpyM", subtitle: "Success Story", type: "video" },
    { title: "Patient Review", id: "0vO4G8l6fr8", subtitle: "Success Story", type: "video" },
    { title: "Patient Review", id: "Stic7iwuvlU", subtitle: "Success Story", type: "video" },
    { title: "Patient Review", id: "kt9GROuYlGA", subtitle: "Success Story", type: "video" }
  ];

  const faqs = [
    {
      q: "Do I need to bring my reports and test results?",
      a: "It helps if you have previous reports  but it is not mandatory. If you have nothing, come anyway. The doctor will guide you on what's needed from scratch. Don't let missing reports stop you from coming in."
    },
    {
      q: "Should my husband also come to the consultation?",
      a: "We strongly recommend it. Fertility involves both partners. If your husband comes, the doctor can assess both sides in one visit  saving time and giving you the complete picture. If that's not possible, you can come alone for the first visit."
    },
    {
      q: "We've had a failed IVF before. Can Bavishi Fertility Institute still help?",
      a: "Absolutely  this is one of the most common situations we see. We do a thorough review of what happened previously, identify what was missed, and give you an honest assessment of your options. Many couples who failed at other clinics have succeeded with us."
    },
    {
      q: "How quickly will someone contact me after the form?",
      a: "During clinic hours (10 am – 7 pm), our team typically calls within 5–30 minutes. When you submit your query, we will contact you immediately. Every enquiry is taken seriously  no lead goes unanswered."
    },
    {
      q: "How Is Bavishi Fertility Institute Different From Other Fertility Clinics?",
      a: "The consultation focuses on reviewing your history, previous treatment, both partners' fertility factors, and available options before creating a personalised plan. We prioritize clarity, ethics, and matching the right step instead of just prescribing another cycle."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 flex flex-col items-center">
      {/* 1. Attention Bar */}
      <div className="w-full bg-rose-brand text-white py-2 px-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider sticky top-0 z-50 shadow-md">
        🚨 ATTENTION: For Couples in Surat, Gujarat
      </div>

      {/* 2. Header */}
      <header className="w-full max-w-6xl bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Bavishi Fertility Institute" className="h-10 sm:h-12 w-auto object-contain" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-1.5 text-slate-700 font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Surat Centre Active</span>
          </div>
          <a href="tel:+919712622288" className="flex items-center gap-1.5 text-plum font-bold hover:text-plum-light transition">
            <PhoneIcon className="h-5 w-5 text-plum shrink-0" />
            <span>+91 97126 22288</span>
          </a>
          <button
            onClick={scrollToForm}
            className="bg-rose-brand hover:brightness-110 text-white font-bold px-5 py-2.5 rounded-full text-xs transition shadow-sm flex items-center gap-1.5 duration-300"
          >
            <CalendarIcon className="h-4.5 w-4.5 text-white shrink-0" />
            <span>Book Appointment</span>
          </button>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="w-full max-w-5xl px-4 py-12 text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-plum leading-tight max-w-4xl tracking-tight">
          Trying for a Baby for Over 12 Months?
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4A2E80] max-w-3xl leading-snug">
          IVF or IUI Failed? Reports Say "Everything Is Normal" But Pregnancy Still Isn't Happening?
        </h2>

        <p className="mt-4 text-slate-800 font-bold text-base sm:text-lg max-w-xl">
          <span className="bg-gradient-to-t from-gold-brand/60 to-gold-brand/60 bg-no-repeat bg-[length:100%_40%] bg-bottom px-1">
            Before you spend on another treatment cycle, discover what might be missed.
          </span>
        </p>

        {/* Video Area */}
        <div className="mt-8 w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col md:flex-row max-w-5xl animate-fade-in">

          {/* Main Video Box */}
          <div className="flex-1 bg-slate-950 p-6 flex flex-col justify-center items-center text-center relative h-[350px] md:h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-plum/20 to-black/80 z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-white px-4">
              <span className="bg-rose-cta text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                Hindi Version
              </span>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 mb-4 backdrop-blur-sm cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/50 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Watch This 5-Minute Doctor Video</h3>
              <p className="text-xs text-slate-300 mt-2 max-w-xs">
                Dr. Bavishi explains why you may not need another cycle right away, but a clearer diagnosis.
              </p>
            </div>
          </div>

          {/* Right Video Box Partition */}
          <div className="flex-1 bg-slate-950 p-6 flex flex-col justify-center items-center text-center relative h-[350px] md:h-[420px] border-t md:border-t-0 md:border-l border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-br from-plum/20 to-black/80 z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-white px-4">
              <span className="bg-rose-cta text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                Gujarati Version
              </span>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 mb-4 backdrop-blur-sm cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/50 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Watch This 5-Minute Doctor Video</h3>
              <p className="text-xs text-slate-300 mt-2 max-w-xs">
                Dr. Bavishi explains why you may not need another cycle right away, but a clearer diagnosis.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-slate-600">
          <span className="flex items-center gap-1">
            <LockIcon /> Confidential consultation
          </span>
          <span className="flex items-center gap-1">
            <CheckIcon /> No false promises
          </span>
          <span className="flex items-center gap-1">
            <CheckIcon /> Personalised case review
          </span>
        </div>

        <button
          onClick={scrollToForm}
          className="mt-8 bg-rose-brand hover:brightness-110 text-white font-bold px-10 py-5 rounded-full text-lg sm:text-xl flex items-center shadow-lg transition duration-300 transform hover:scale-[1.02] relative overflow-hidden justify-center animate-pulse-pop"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-150%] animate-cta-shine"></span>
          <span className="relative z-10">YES, I WANT CLEAR ANSWERS</span>
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-red-600 text-xs sm:text-sm font-bold lg:whitespace-nowrap max-w-none mx-auto animate-pulse-pop">
          <WarningIcon className="text-red-600 shrink-0" />
          <span>Limited consultation slots are filling up quickly - only a few spots in Surat are available this week</span>
        </div>
      </section>

      {/* 4. Fact Check Section */}
      <section className="w-full bg-[#FAF6F0] py-16 px-4 flex flex-col items-center border-y border-slate-200">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-plum tracking-tight lg:whitespace-nowrap">
              FACT CHECK: What Many Surat Couples Actually Face
            </h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto text-base sm:text-lg lg:whitespace-nowrap">
              The reality many couples face before reaching the right fertility specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {factChecks.map((fact, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-3 hover:translate-y-[-2px] transition duration-300">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-rose-brand text-sm font-bold">{idx + 1}</span>
                </div>
                <p className="text-slate-700 text-base font-medium leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/60 backdrop-blur border border-plum/10 rounded-3xl p-6 text-center max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-plum">The Real Problem Is Not Always Lack of Treatment</h3>
            <p className="mt-2 text-slate-600 text-base sm:text-lg leading-relaxed">
              Sometimes, it is the lack of the right diagnosis, a clear explanation, and a personalised plan tailored to your specific situation.
            </p>
            <button
              onClick={scrollToForm}
              className="mt-6 text-rose-cta font-bold text-base inline-flex items-center hover:underline group"
            >
              YES, I WANT CLEAR ANSWERS <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="w-full bg-[#FAF6F0] py-16 flex flex-col items-center border-y border-slate-200 overflow-hidden">
        <div className="w-full max-w-[1300px] px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-plum tracking-tight">
              REAL COUPLES. REAL JOURNEYS. REAL HOPE.
            </h2>
            <p className="mt-2 text-slate-500 text-base sm:text-lg">
              Watch reviews and recovery stories from couples who found clarity with us.
            </p>
          </div>

          <div 
            ref={carouselRef}
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            onTouchStart={() => setIsCarouselHovered(true)}
            onTouchEnd={() => setIsCarouselHovered(false)}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory px-4 -mx-4 sm:px-0 sm:mx-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className={`bg-white rounded-3xl p-4 border border-slate-200 shadow-sm flex flex-col shrink-0 snap-center ${t.type === 'short' ? 'w-[260px]' : 'w-[320px] sm:w-[400px]'}`}>
                <div className={`w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 ${t.type === 'short' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${t.id}`}
                    title={t.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 px-2">
                  <span className="text-rose-cta text-[10px] font-bold uppercase tracking-wider block mb-1">
                    {t.subtitle}
                  </span>
                  <h3 className="text-slate-800 font-bold text-sm sm:text-base leading-snug truncate">
                    {t.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Differentiation Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-plum tracking-tight">
              WHY Bavishi Fertility Institute's APPROACH IS DIFFERENT
            </h2>
            <p className="mt-2 text-[#4A2E80] font-semibold max-w-xl mx-auto text-base sm:text-lg">
              This Is Not About Recommending More Treatment. It Is About Recommending the Right Next Step.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {diffSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 rounded-3xl border border-slate-200/80 hover:border-plum/40 hover:shadow-xl transition-all duration-500 flex flex-col relative overflow-hidden group"
              >
                <div className="relative z-10 flex-grow">
                  <div className="w-12 h-12 rounded-xl bg-plum text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-plum mb-3 leading-tight">{step.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        
        <div className="mt-10 w-full max-w-[1200px] p-5 bg-plum/5 rounded-2xl text-sm sm:text-base text-plum font-semibold text-center">
          <p className="max-w-none mx-auto lg:whitespace-nowrap">
            <InfoIcon className="inline-block mr-2 align-text-bottom text-plum" />
            Bavishi Fertility Institute’s official page highlights personalised plans, advanced IVF laboratory systems, privacy protocols, and treatment <br className="hidden lg:block" /> options across male and female infertility.
          </p>
        </div>
      </section>

      {/* 6. The Comparative Grid */}
      <section className="w-full bg-[#FAF6F0] py-16 px-4 flex flex-col items-center border-y border-slate-200">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-plum tracking-tight">
              COMPARE THE JOURNEYS
            </h2>
            <p className="mt-2 text-slate-500 text-base sm:text-lg">
              See how our diagnostic-first approach compares to conventional fertility pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Usual Journey */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-600 border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                <span>THE USUAL JOURNEY</span>
                <span className="text-sm font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Treatment First</span>
              </h3>
              <ul className="space-y-4">
                {compareTable.usual.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-500 text-base">
                    <XIcon className="h-6 w-6 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Bavishi Approach */}
            <div className="bg-white rounded-3xl p-8 border-2 border-plum shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-plum text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider rounded-bl-2xl">
                Bavishi Choice
              </div>
              <h3 className="text-xl font-extrabold text-plum border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                <span>BAVISHI'S APPROACH</span>
                <span className="text-sm font-bold text-plum-light bg-plum/5 px-2 py-0.5 rounded">Understanding First</span>
              </h3>
              <ul className="space-y-4">
                {compareTable.bavishi.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-base font-semibold">
                    <CheckIcon className="h-6 w-6 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToForm}
              className="bg-plum hover:bg-plum-light text-white font-bold px-10 py-5 rounded-full text-lg sm:text-xl shadow-md transition duration-300 relative overflow-hidden animate-pulse-pop"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-150%] animate-cta-shine" style={{ animationDelay: '0.5s' }}></span>
              <span className="relative z-10">Review My Fertility Case</span>
            </button>
            <span className="text-red-600 text-xs sm:text-sm font-bold block mt-3 text-center animate-pulse-pop">
              <WarningIcon className="inline-block mr-1.5 text-red-600 align-text-bottom" />
              Limited reviewed consultation appointments are available.
            </span>
          </div>
        </div>
      </section>

      {/* 7. What Happens Next Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <div className="w-full max-w-[1300px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-plum tracking-tight">
              WHAT HAPPENS NEXT?
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 max-w-full mx-auto px-4 md:px-0">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-0.5 bg-plum/20 z-0"></div>
            
            {stepsNext.map((step, idx) => (
              <div key={idx} className="relative group flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-plum text-white flex items-center justify-center font-bold text-lg shadow-md border-4 border-white relative z-10 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-plum-light">
                  {step.num}
                </div>
                <h3 className="text-lg xl:text-xl font-bold text-plum group-hover:text-plum-light transition mb-3 px-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-1">{step.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>



      {/* 9. FAQs Section */}
      <section className="w-full bg-[#FAF6F0] py-16 px-4 flex flex-col items-center border-y border-slate-200">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-plum tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition duration-300 shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-slate-800 hover:text-plum flex justify-between items-center gap-4 text-base sm:text-lg"
                >
                  <span>{faq.q}</span>
                  <ChevronDownIcon className={`h-5 w-5 transform transition-transform shrink-0 ${openFaq === idx ? 'rotate-180 text-plum' : 'text-slate-400'}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/40 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call to Action / Lead Form */}
      <section id="consultation-form" className="w-full bg-plum text-white py-16 px-4 flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

        <div className="w-full max-w-3xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            The Sound of a Child in Your Home  It's Not Just a Dream.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto px-2">
            One consultation in Surat. No payment. No pressure. <br className="hidden sm:block" />Just a real conversation with a doctor who will finally give you a straight answer.
          </p>

          <div className="mt-8 bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left border border-white/10 max-w-lg mx-auto">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-bold text-plum">Thank You!</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  We have received your enquiry. During clinic hours, our team typically calls within <strong>5–30 minutes</strong>.
                </p>
                <p className="mt-4 text-xs text-slate-400">
                  Please keep your phone active, as we will call from our Surat clinic.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-plum transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-plum transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Trying Duration
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full border border-slate-300 bg-white rounded-xl px-3 py-2.5 text-sm outline-none focus:border-plum transition"
                    >
                      <option value="Under 12 months">Under 12 months</option>
                      <option value="1-2 years">1–2 years</option>
                      <option value="2-3 years">2–3 years</option>
                      <option value="Over 3 years">Over 3 years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Prior Treatment
                    </label>
                    <select
                      name="priorTreatment"
                      value={formData.priorTreatment}
                      onChange={handleInputChange}
                      className="w-full border border-slate-300 bg-white rounded-xl px-3 py-2.5 text-sm outline-none focus:border-plum transition"
                    >
                      <option value="none">None</option>
                      <option value="iui">IUI Failed</option>
                      <option value="ivf">IVF Failed</option>
                      <option value="other">Other Treatments</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-rose-cta hover:bg-rose-cta/90 text-white font-bold py-3.5 rounded-xl text-base shadow-lg transition duration-200 mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Book My Free Consultation'}
                </button>

                <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1 mt-2">
                  <LockIcon className="text-slate-400 h-3.5 w-3.5 inline shrink-0" />
                  <span>Your data is fully encrypted and private. We make no false promises.</span>
                </span>
              </form>
            )}
          </div>

          <div className="mt-8 text-sm sm:text-base text-slate-300 space-y-1">
            <p>During the consultation, we will carefully understand your situation.</p>
            <p>If we are not right for you, we will tell you in plain words and suggest other options.</p>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="w-full max-w-6xl border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-600 space-y-4 mb-16 sm:mb-0">
        <div className="flex justify-center gap-2">
          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
        </div>
        <p className="font-semibold text-slate-700 text-base sm:text-lg">Bavishi Fertility Institute - Surat Branch</p>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 text-sm sm:text-base">
          Paldi Cross Roads, Opp. Manjulal Municipal Garden, Paldi, Ahmedabad (Headquarters)  Surat Branch: Ring Road, Surat, Gujarat.
        </p>
        <p className="text-xs sm:text-sm text-slate-500 mt-4">
          © {new Date().getFullYear()} Bavishi Fertility Institute. All Rights Reserved. India's Trusted IVF Experts.
        </p>
      </footer>

      {/* 12. Sticky Mobile Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200/80 shadow-[0_-4px_10px_rgba(0,0,0,0.06)] px-4 py-3 sm:hidden flex items-center justify-between z-40">
        <div className="text-left">
          <span className="text-[9px] font-bold text-rose-600 uppercase tracking-widest block">Limited Slots Available</span>
          <span className="text-xs font-bold text-slate-800 block">Talk directly with the doctor</span>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-rose-brand text-white font-bold px-4 py-2.5 rounded-full text-xs flex items-center gap-1.5 shadow-sm transition"
        >
          <CalendarIcon className="h-4 w-4 text-white shrink-0" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* 13. Floating Action Sidebar (Desktop/Tablet Only) */}
      <div className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 pr-3 md:flex">
        <a
          href="https://wa.me/919712522289"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Us"
          className="group flex items-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg outline-none transition-[filter,transform] duration-300 hover:brightness-110 active:scale-95"
        >
          <span className="max-w-0 overflow-hidden text-sm font-semibold opacity-0 transition-all duration-300 ease-out group-hover:max-w-[12rem] group-hover:pl-5 group-hover:opacity-100">
            WhatsApp Us
          </span>
          <span className="grid h-12 w-12 shrink-0 place-items-center">
            <WhatsAppIcon className="h-5 w-5 text-white" />
          </span>
        </a>

        <a
          href="tel:+919712622288"
          aria-label="Call Us"
          className="group flex items-center overflow-hidden rounded-full bg-plum text-white shadow-lg outline-none transition-[filter,transform] duration-300 hover:brightness-110 active:scale-95"
        >
          <span className="max-w-0 overflow-hidden text-sm font-semibold opacity-0 transition-all duration-300 ease-out group-hover:max-w-[12rem] group-hover:pl-5 group-hover:opacity-100">
            Call Now
          </span>
          <span className="grid h-12 w-12 shrink-0 place-items-center">
            <PhoneIcon className="h-5 w-5 text-white" />
          </span>
        </a>

        <button
          onClick={scrollToForm}
          aria-label="Book Appointment"
          className="group flex items-center overflow-hidden rounded-full bg-rose-brand text-white shadow-lg outline-none transition-[filter,transform] duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
        >
          <span className="max-w-0 overflow-hidden text-sm font-semibold opacity-0 transition-all duration-300 ease-out group-hover:max-w-[12rem] group-hover:pl-5 group-hover:opacity-100">
            Book Appointment
          </span>
          <span className="grid h-12 w-12 shrink-0 place-items-center">
            <CalendarIcon className="h-5 w-5 text-white" />
          </span>
        </button>
      </div>

      {/* 14. Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 h-12 w-12 rounded-full bg-rose-brand text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:brightness-110 active:scale-95 z-50 cursor-pointer animate-fade-in"
        >
          <ArrowUpIcon className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
}

export default App;
