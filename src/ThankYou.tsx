import logo from './assets/logo.png';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col font-sans text-slate-800">
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex items-center justify-center shadow-sm">
        <a href="/">
          <img src={logo} alt="Bavishi Fertility Institute" className="h-10 sm:h-12 w-auto object-contain" />
        </a>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center animate-fade-in">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-plum via-rose-brand to-plum"></div>
          
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-600 animate-pulse-pop" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-plum mb-4 tracking-tight">Request Received!</h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto">
            Thank you for taking the first step. Our medical team will review your information and contact you shortly to confirm your consultation.
          </p>
          
          <a
            href="/"
            className="inline-block bg-plum hover:bg-plum-light text-white font-bold px-10 py-4 rounded-full text-lg shadow-md transition duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] animate-cta-shine"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Return to Homepage
            </span>
          </a>
        </div>
      </main>

      <footer className="w-full bg-slate-50 py-8 border-t border-slate-200 text-center mt-12">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Bavishi Fertility Institute. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
