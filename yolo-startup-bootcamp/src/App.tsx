import React, { useState } from "react";
import { 
  Rocket, 
  Zap, 
  Award, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Smile, 
  Volume2, 
  VolumeX, 
  AlertCircle, 
  ArrowDown, 
  Target,
  Sparkles,
  CheckCircle2,
  Trash2,
  UserCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HandDrawnStar, PaintStampLabel, MSPaintRocketCard, ReceiptDivider } from "./components/Scribbles";
import { RoastBox } from "./components/RoastBox";
import { TicketPass } from "./components/TicketPass";
import { DailyGrind } from "./components/DailyGrind";
import { StartupGraveyard } from "./components/StartupGraveyard";
import { VelocityScoreCalculator } from "./components/VelocityScoreCalculator";
import { BuilderApplication } from "./types";

export default function App() {
  const [selectedIdea, setSelectedIdea] = useState("");
  const [audioFeedback, setAudioFeedback] = useState(true);
  const [tickerSpeed, setTickerSpeed] = useState<"normal" | "hyper">("normal");
  const [confettiPopped, setConfettiPopped] = useState(false);
  const [myApplications, setMyApplications] = useState<BuilderApplication[]>([]);
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Function to scroll smoothly to application form with high-precision inertial ease-out quintic deceleration
  const scrollToApply = (ideaText: string = "") => {
    if (ideaText) {
      setSelectedIdea(ideaText);
    }
    const applySection = document.getElementById("apply-circuit-section");
    if (applySection) {
      const topOffset = 40; // Landing offset for neat framing
      const targetPosition = applySection.getBoundingClientRect().top + window.pageYOffset - topOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1250; // Dynamic timeline for luxurious momentum deceleration scale
      let startTime: number | null = null;

      // Quintic ease-out creates instantaneous acceleration with a smooth, soft, buttery deceleration coasting tail
      const easeOutQuint = (t: number): number => {
        return 1 - Math.pow(1 - t, 5);
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeOutQuint(progress);
        
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  // Simple clean sound feedback using Web Audio API (custom simple retro blips)
  const playRetroBeep = (freq = 440, type: OscillatorType = "square", duration = 0.08) => {
    if (!audioFeedback) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context block or error
    }
  };

  const handleApplySuccess = (app: BuilderApplication) => {
    playRetroBeep(660, "sine", 0.15);
    setTimeout(() => playRetroBeep(880, "sine", 0.25), 100);
    setMyApplications(prev => [app, ...prev]);
    setConfettiPopped(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFF00] paint-grid pb-32 text-black selection:bg-black selection:text-[#FFFF00]">
      
      {/* 1. SCROLLING MARQUEE HEADER */}
      <div className="w-full bg-black text-[#FFFF00] border-b-[6px] border-black font-chunky text-base md:text-2xl overflow-hidden py-5 relative select-none z-30">
        <div className={`flex whitespace-nowrap ${tickerSpeed === "hyper" ? "animate-marquee-fast" : "animate-marquee"}`}>
          {Array(12).fill(0).map((_, i) => (
            <span key={i} className="inline-flex items-center mx-8">
              YOU ONLY LAUNCH ONCE
              <span className="mx-6 text-[#FF00FF] text-2xl">✦</span>
              STOP PLAYING STARTUP
              <span className="mx-6 text-[#00FF00] text-2xl">🚀</span>
              START SHIPPING
              <span className="mx-6 text-[#00FFFF] text-2xl">⚡</span>
            </span>
          ))}
        </div>
        
        {/* Secret easter-egg clickable controller */}
        <button 
          id="marquee-speed-toggle"
          onClick={() => {
            playRetroBeep(800, "sawtooth", 0.05);
            setTickerSpeed(prev => prev === "normal" ? "hyper" : "normal");
          }}
          className="absolute right-4 top-3 bg-[#FFFF00] text-black border-4 border-black text-[10px] md:text-xs px-3.5 py-1.5 font-chunky hover:bg-white hover:scale-105 transition-all uppercase"
          title="Tweak speed matrix"
        >
          {tickerSpeed === "hyper" ? "GO CHILL ☕" : "HYPERDRIVE 🔥"}
        </button>
      </div>

      {/* SUB HEADER STICKY PANEL */}
      <div className="max-w-[1520px] mx-auto px-4 md:px-6 mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border-[6px] border-black p-4 sm:p-5 md:p-6 neo-shadow bento-hover">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <span className="font-chunky text-xl md:text-2xl tracking-tighter bg-black text-[#FFFF00] py-2 px-5 border-[3px] border-black rotate-[-1deg] inline-block shrink-0">
              YOLO
            </span>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-mono font-black tracking-tight text-gray-700 uppercase">
                ✦ EST. 2026 // NEUTRALIZE SLEEP // MAXIMUM VELOCITY 🚀
              </span>
              <span className="text-[10px] text-rose-600 font-mono font-black uppercase tracking-wider">
                A 23ventures Portfolio Program
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            {/* Audio Toggle button */}
            <button
              id="audio-feedback-toggle"
              onClick={() => {
                setAudioFeedback(!audioFeedback);
                if(!audioFeedback) {
                  // Play a sound to show activation
                  setTimeout(() => playRetroBeep(440, "sine", 0.08), 50);
                }
              }}
              className="flex items-center space-x-2 border-[3px] border-black py-2 px-3 sm:px-4 bg-gray-150 hover:bg-gray-200 hover:-translate-y-0.5 transition-all font-mono text-[11px] md:text-xs uppercase font-extrabold"
            >
              {audioFeedback ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SOUND [ON]</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-gray-400" />
                  <span>SOUND [OFF]</span>
                </>
              )}
            </button>

            {/* Quick action button */}
            <button 
              id="header-nav-apply-btn"
              onClick={() => {
                playRetroBeep(520, "triangle", 0.1);
                scrollToApply();
              }}
              className="font-chunky text-[11px] md:text-xs uppercase border-[3px] border-black bg-[#FFFF00] hover:bg-black hover:text-[#FFFF00] hover:scale-105 px-4 py-2 transition-all"
            >
              [ APPLY NOW ]
            </button>
          </div>
        </div>
      </div>

      {/* 2. BENTO GRID WRAPPER */}
      <main className="max-w-[1520px] mx-auto px-4 md:px-6 mt-12">
        
        {/* HERO SECTION BENTO GRID (2 COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Headline Card */}
          <section className="lg:col-span-12 xl:col-span-7 border-[6px] border-black bg-[#FFFF00] p-5 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden neo-shadow bento-hover group">
            {/* High visual grid marker details mimicking old Paint zoom lines */}
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-black" />
            <div className="absolute right-0 top-0 w-1.5 bg-black h-full" />
            
            <div>
              {/* Top skewed tag */}
              <div className="mb-6">
                <PaintStampLabel text="BOOTCAMP 2026" rotate="-2deg" bgColor="bg-[#FF00FF]" textColor="text-white" />
              </div>

              {/* Major headline */}
              <h1 className="font-chunky text-3xl sm:text-4xl md:text-6xl xl:text-7xl text-black uppercase tracking-tighter leading-[0.95] mt-4 group-hover:scale-[1.01] transition-transform origin-left">
                Stop Playing <br />
                <span className="bg-black text-[#FFFF00] px-3.5 py-1 inline-block my-2 md:my-2.5 transform rotate-[1deg] shadow-[6px_6px_0px_0px_#FF00FF] max-w-full break-words">
                  Startup.
                </span>{" "}
                <br />
                Start Shipping.
              </h1>

              {/* Sub-headline with custom sketch look */}
              <p className="font-sketch text-2xl sm:text-3xl md:text-4xl text-black mt-6 tracking-wide font-extrabold leading-relaxed">
                A 90-day pressure cooker for 30 students.
              </p>
            </div>

            {/* Dynamic Interactive Call-to-action */}
            <div className="mt-8 pt-6 border-t-4 border-dashed border-black/30">
              <button
                id="hero-apply-btn"
                onClick={() => {
                  playRetroBeep(400, "sawtooth", 0.12);
                  scrollToApply();
                }}
                className="inline-flex items-center justify-center space-x-3 bg-black text-[#FFFF00] hover:bg-white hover:text-black hover:border-dashed font-chunky text-base sm:text-lg md:text-2xl py-4 sm:py-5 px-6 sm:px-8 border-[6px] border-black uppercase text-center w-full sm:w-auto transition-all neo-shadow active:translate-x-2 active:translate-y-2 active:shadow-none animate-bounce"
              >
                <span>🚀 [ APPLY TO THE CIRCUIT ]</span>
              </button>
              <div className="text-[11px] md:text-sm font-mono mt-4 text-black font-extrabold flex items-center space-x-2 justify-center sm:justify-start">
                <span className="animate-pulse text-[#FF00FF] text-base">⬤</span>
                <span>LIMITED TO 30 BUILDERS. NO SECOND CHANCES.</span>
              </div>
            </div>
          </section>

          {/* Rocket Graphic Card */}
          <aside className="lg:col-span-12 xl:col-span-4 flex-1 h-full min-h-[300px] sm:min-h-[350px]">
            <MSPaintRocketCard />
          </aside>
        </div>

        {/* 3. FOUR QUICK KEY SUMMARY ACCENTS (4 Bento Stat Blocks) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10">
          {/* Stat 1 */}
          <div className="border-[6px] border-black bg-[#FF00FF] text-black p-4 sm:p-6 md:p-8 neo-shadow bento-hover transition-all">
            <span className="font-chunky text-4xl sm:text-5xl md:text-7xl block tracking-tighter leading-none mb-2">
              30
            </span>
            <span className="font-chunky text-[10px] sm:text-xs md:text-sm uppercase tracking-tight text-black font-black block">
              Seats. That's it.
            </span>
          </div>

          {/* Stat 2 */}
          <div className="border-[6px] border-black bg-[#00FF00] text-black p-4 sm:p-6 md:p-8 neo-shadow bento-hover transition-all">
            <span className="font-chunky text-4xl sm:text-5xl md:text-7xl block tracking-tighter leading-none mb-2">
              90
            </span>
            <span className="font-chunky text-[10px] sm:text-xs md:text-sm uppercase tracking-tight text-black font-black block">
              Days of Chaos
            </span>
          </div>

          {/* Stat 3 */}
          <div className="border-[6px] border-black bg-white text-black p-4 sm:p-6 md:p-8 neo-shadow bento-hover transition-all">
            <span className="font-chunky text-4xl sm:text-5xl md:text-7xl block tracking-tighter leading-none mb-2">
              ₹5K
            </span>
            <span className="font-chunky text-[10px] sm:text-xs md:text-sm uppercase tracking-tight text-gray-700 font-black block">
              Per Month
            </span>
          </div>

          {/* Stat 4 */}
          <div className="border-[6px] border-black bg-[#00FFFF] text-[#000] p-4 sm:p-6 md:p-8 neo-shadow bento-hover transition-all">
            <span className="font-chunky text-4xl sm:text-5xl md:text-7xl block tracking-tighter leading-none mb-2">
              0%
            </span>
            <span className="font-chunky text-[10px] sm:text-xs md:text-sm uppercase tracking-tight text-black font-black block">
              BS Tolerated
            </span>
          </div>
        </div>

        {/* 4. THE PATH (The Anti-MBA side-by-side Flowchart) */}
        <div className="mt-12">
          <div className="border-[6px] border-black bg-white p-5 sm:p-8 md:p-12 neo-shadow relative">
            <div className="mb-6">
              <PaintStampLabel text="THE PATH" rotate="-1.5deg" bgColor="bg-black" textColor="text-[#FFFF00]" />
            </div>

            <h2 className="font-chunky text-2xl sm:text-3xl md:text-5xl text-black uppercase tracking-tight mb-8">
              THE ANTI-MBA
            </h2>

            {/* Split flowchart layout - Side by Side comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
              
              {/* Vertical Divider for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1.5 bg-black border-r-[3px] border-dashed border-gray-400 -translate-x-1/2" />
              
              {/* VS bubble in the middle */}
              <div className="absolute left-1/2 top-12 -translate-x-1/2 bg-rose-500 text-white font-chunky text-xl px-5 py-2.5 border-[6px] border-black rounded-full shadow-[6px_6px_0px_0px_#000] z-10 hidden md:block select-none transform rotate-[8deg] hover:scale-110 transition-transform">
                VS
              </div>

              {/* LEFT FLOW: The Boring Path */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 pb-3 border-b-2 border-dashed border-gray-200">
                  <span className="text-xl sm:text-2xl">💀</span>
                  <h3 className="font-chunky text-xs sm:text-sm md:text-lg text-gray-400 uppercase tracking-tight">
                    THE BORING PATH (Coping strategy)
                  </h3>
                </div>

                <div className="space-y-4 font-mono text-[10px] sm:text-xs md:text-base text-gray-400">
                  {/* Step 1 */}
                  <div className="border-[5px] border-dashed border-gray-300 p-3 sm:p-4 bg-gray-50 flex items-center justify-between line-through select-none">
                    <span>1. Apply to MBA (₹25L Debt)</span>
                    <span>💀</span>
                  </div>
                  <div className="text-center font-black text-gray-300 text-lg">▼</div>

                  {/* Step 2 */}
                  <div className="border-[5px] border-dashed border-gray-300 p-3 sm:p-4 bg-gray-50 flex items-center justify-between line-through select-none">
                    <span>2. Study theoretical case studies</span>
                    <span>📚</span>
                  </div>
                  <div className="text-center font-black text-gray-300 text-lg">▼</div>

                  {/* Step 3 */}
                  <div className="border-[5px] border-dashed border-gray-300 p-3 sm:p-4 bg-gray-50 flex items-center justify-between line-through select-none">
                    <span>3. Intern at consulting giants</span>
                    <span>👔</span>
                  </div>
                  <div className="text-center font-black text-gray-300 text-lg">▼</div>

                  {/* Step 4 */}
                  <div className="border-[5px] border-dashed border-gray-300 p-3 sm:p-4 bg-gray-50 flex items-center justify-between line-through select-none">
                    <span>4. Talk about your "idea" for 3 years</span>
                    <span>🗣</span>
                  </div>
                  <div className="text-center font-black text-gray-300 text-lg">▼</div>

                  {/* Step 5 */}
                  <div className="border-[5px] border-dashed border-red-200 p-3 sm:p-4 bg-rose-50 text-rose-400 flex items-center justify-between line-through select-none">
                    <span>5. Still at McKinsey, age 35</span>
                    <span>⚰</span>
                  </div>
                </div>
              </div>

              {/* RIGHT FLOW: The YOLO Path */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 pb-3 border-b-2 border-dashed border-black/20">
                  <span className="text-xl sm:text-2xl animate-bounce">⚡</span>
                  <h3 className="font-chunky text-xs sm:text-sm md:text-lg text-black uppercase tracking-tight">
                    THE YOLO PATH (Maximum ship velocity)
                  </h3>
                </div>

                <div className="space-y-4 font-black text-[10px] sm:text-xs md:text-base text-black">
                  {/* Step 1 */}
                  <div className="border-[5px] border-black p-3.5 sm:p-4.5 bg-yellow-300 flex items-center justify-between shadow-[4px_4px_0px_0px_#000] hover:bg-yellow-200 transition-all cursor-pointer">
                    <span>1. SHOW UP (Day 1)</span>
                    <span className="text-rose-600 animate-pulse text-sm sm:text-lg">⬤</span>
                  </div>
                  <div className="text-center font-chunky text-[#FF00FF] text-base select-none">▼</div>

                  {/* Step 2 */}
                  <div className="border-[5px] border-black p-3.5 sm:p-4.5 bg-yellow-300 flex items-center justify-between shadow-[4px_4px_0px_0px_#000] hover:bg-yellow-200 transition-all cursor-pointer">
                    <span>2. KILL YOUR EGO (Week 1)</span>
                    <span>🎯</span>
                  </div>
                  <div className="text-center font-chunky text-[#FF00FF] text-base select-none">▼</div>

                  {/* Step 3 */}
                  <div className="border-[5px] border-black p-3.5 sm:p-4.5 bg-yellow-300 flex items-center justify-between shadow-[4px_4px_0px_0px_#000] hover:bg-yellow-200 transition-all cursor-pointer">
                    <span>3. COLD DM 50 FOUNDERS</span>
                    <span>✉</span>
                  </div>
                  <div className="text-center font-chunky text-[#FF00FF] text-base select-none">▼</div>

                  {/* Step 4 */}
                  <div className="border-[5px] border-black p-3.5 sm:p-4.5 bg-yellow-300 flex items-center justify-between shadow-[4px_4px_0px_0px_#000] hover:bg-yellow-200 transition-all cursor-pointer">
                    <span>4. SHIP YOUR MVP. GET PAID.</span>
                    <span>💰</span>
                  </div>
                  <div className="text-center font-chunky text-[#FF00FF] text-base select-none">▼</div>

                  {/* Step 5 */}
                  <div className="border-[5px] border-black p-3.5 sm:p-4.5 bg-black text-[#FFFF00] flex items-center justify-between shadow-[4px_4px_0px_0px_#000]">
                    <span>5. FOUNDER DAY 90.</span>
                    <span className="animate-bounce">🚀</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 5. CURRICULUM BENTO GRID (3 Large Cards for Month 1, Month 2, Month 3) */}
        <div id="curriculum-section" className="mt-12">
          <div className="mb-6">
            <PaintStampLabel text="CURRICULUM" rotate="1deg" bgColor="bg-rose-500" textColor="text-white" />
          </div>

          <h2 className="font-chunky text-2xl sm:text-3xl md:text-4xl text-black uppercase tracking-tight mb-8">
            THE 90-DAY COMPRESSION MATRIX
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* MONTH 1 BEDROCK */}
            <article className="border-[6px] border-black bg-[#FF00FF] text-black p-5 sm:p-8 md:p-10 neo-shadow bento-hover relative overflow-hidden flex flex-col justify-between group">
              {/* Star watermark background */}
              <div className="absolute right-[-20px] top-[-20px] text-black/10 text-9xl font-black select-none pointer-events-none font-mono">
                01
              </div>

              <div>
                <span className="bg-black text-[#FF00FF] px-3 py-1.5 text-xs md:text-sm font-mono font-black tracking-widest border-2 border-black inline-block transform -skew-x-12 select-none">
                  MONTH 1
                </span>
                
                <h3 className="font-chunky text-xl md:text-2xl uppercase tracking-tight mt-4">
                  THE EGO DEATH
                </h3>
                <p className="font-serif text-sm md:text-base text-black/90 mt-2 leading-relaxed italic font-semibold">
                  "No ideas are special until a stranger gives you actual money."
                </p>

                <ul className="mt-6 space-y-3 relative z-10">
                  {[
                    "Cold DM 50 founders on Twitter/X & LinkedIn",
                    "Conduct 25 deep, painful customer surveys",
                    "Map out Hair-on-fire local business problems",
                    "Select MVP target specs & kill non-essential features",
                  ].map((task, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm md:text-base font-sans font-extrabold text-black">
                      <span className="bg-black text-white font-mono font-bold w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0 mr-3 text-[10px] sm:text-sm">
                        {idx + 1}
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-black/20">
                <button
                  onClick={() => {
                    playRetroBeep(440, "sine", 0.08);
                    scrollToApply("An idea starting in Month 1 validation cycle");
                  }}
                  className="w-full bg-black text-[#FFFF00] font-chunky text-xs md:text-sm uppercase py-3 border-2 border-black hover:bg-white hover:text-black transition-all"
                >
                  [ ENROL IN MONTH 1 ]
                </button>
              </div>
            </article>

            {/* MONTH 2 SHIP PHASE */}
            <article className="border-[6px] border-black bg-[#00FFFF] text-black p-5 sm:p-8 md:p-10 neo-shadow bento-hover relative overflow-hidden flex flex-col justify-between group">
              {/* Star watermark background */}
              <div className="absolute right-[-20px] top-[-20px] text-black/10 text-9xl font-black select-none pointer-events-none font-mono">
                02
              </div>

              <div>
                <span className="bg-black text-[#00FFFF] px-3 py-1.5 text-xs md:text-sm font-mono font-black tracking-widest border-2 border-black inline-block transform -skew-x-12 select-none">
                  MONTH 2
                </span>
                
                <h3 className="font-chunky text-xl md:text-2xl uppercase tracking-tight mt-4">
                  THE SHIP PHASE
                </h3>
                <p className="font-serif text-sm md:text-base text-black/90 mt-2 leading-relaxed italic font-semibold">
                  "Perfect is the absolute enemy of shipping. Code it or mock it."
                </p>

                <ul className="mt-6 space-y-3 relative z-10">
                  {[
                    "Construct absolute bare-minimum MVP core loop",
                    "Launch pre-sale checkout or waitlist",
                    "Write direct, conversion-focused launch copy",
                    "Obtain your very first 10 paying customers",
                  ].map((task, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm md:text-base font-sans font-extrabold text-black">
                      <span className="bg-black text-white font-mono font-bold w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0 mr-3 text-[10px] sm:text-sm">
                        {idx + 1}
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-black/20">
                <button
                  onClick={() => {
                    playRetroBeep(480, "sine", 0.08);
                    scrollToApply("Validated idea ready to code in Month 2");
                  }}
                  className="w-full bg-[#000] text-[#00FFFF] font-chunky text-xs md:text-sm uppercase py-3 border-2 border-black hover:bg-white hover:text-black transition-all"
                >
                  [ ENROL IN MONTH 2 ]
                </button>
              </div>
            </article>

            {/* MONTH 3 THE WAR PHASE */}
            <article className="border-[6px] border-black bg-black text-[#FFFF00] p-5 sm:p-8 md:p-10 neo-shadow bento-hover relative overflow-hidden flex flex-col justify-between group">
              {/* Star watermark background */}
              <div className="absolute right-[-20px] top-[-20px] text-slate-800/60 text-9xl font-black select-none pointer-events-none font-mono">
                03
              </div>

              <div>
                <span className="bg-[#FFFF00] text-black px-3 py-1.5 text-xs md:text-sm font-mono font-black tracking-widest border-[#FFFF00] inline-block transform -skew-x-12 select-none">
                  MONTH 3
                </span>
                
                <h3 className="font-chunky text-xl md:text-2xl uppercase tracking-tight mt-4">
                  THE WAR PHASE
                </h3>
                <p className="font-serif text-sm md:text-base text-[#FFFF00]/80 mt-2 leading-relaxed italic font-semibold">
                  "Stand before real investors and pitch your actual revenue traction."
                </p>

                <ul className="mt-6 space-y-3 relative z-10">
                  {[
                    "Expand direct advertising & local distribution loops",
                    "Prepare complete unit economics breakdown",
                    "Pitch directly to partner VCs & active seed angel hosts",
                    "Unlock ₹50,000 cash grant & local space access",
                  ].map((task, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm md:text-base font-sans font-extrabold text-white">
                      <span className="bg-[#FFFF00] text-black font-mono font-bold w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0 mr-3 text-[10px] sm:text-sm">
                        {idx + 1}
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-700">
                <button
                  onClick={() => {
                    playRetroBeep(520, "sine", 0.08);
                    scrollToApply("Active project with revenue aiming for seed capital");
                  }}
                  className="w-full bg-[#FFFF00] text-black font-chunky text-xs md:text-sm uppercase py-3 border-2 border-[#FFFF00] hover:bg-white hover:text-black transition-all"
                >
                  [ ENROL IN MONTH 3 ]
                </button>
              </div>
            </article>

          </div>
        </div>

        {/* DAILY GRIND TIMELINE WORKFLOW */}
        <DailyGrind onPlayBeep={playRetroBeep} />

        {/* 6. THE LOOT (Rewards Block with custom SVGs) */}
        <div className="mt-12">
          <div className="mb-6">
            <PaintStampLabel text="THE LOOT" rotate="-1deg" bgColor="bg-black" textColor="text-[#FFFF00]" />
          </div>

          <h2 className="font-chunky text-2xl sm:text-3xl md:text-4xl text-black uppercase tracking-tight mb-8">
            WHAT YOU WALK OUT WITH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Loot 1 */}
            <div className="border-[6px] border-black bg-[#FFFF00] p-5 sm:p-8 md:p-10 neo-shadow bento-hover transition-all relative group">
              <div className="mb-4 text-4xl sm:text-5xl">💰</div>
              <h3 className="font-chunky text-xl sm:text-2xl text-black uppercase">₹50,000 Cash</h3>
              <p className="font-sans text-xs sm:text-base text-gray-800 mt-4 leading-relaxed font-extrabold">
                Equity-free cash award for the absolute top builder block at the culminating Demo Day.
              </p>
              <div className="absolute bottom-3 right-3 text-3xl sm:text-4xl opacity-25 group-hover:scale-125 transition-transform">💸</div>
            </div>

            {/* Loot 2 */}
            <div className="border-[6px] border-black bg-black text-[#FFFF00] p-5 sm:p-8 md:p-10 neo-shadow bento-hover transition-all relative group">
              <div className="mb-4 text-4xl sm:text-5xl">🏢</div>
              <h3 className="font-chunky text-xl sm:text-2xl text-white uppercase">Access to 23V Hub</h3>
              <p className="font-mono text-xs md:text-sm text-[#FFFF00]/90 mt-4 leading-relaxed font-semibold">
                24/7 dedicated physical access desk with high speed ethernet, cloud credits, and snacks.
              </p>
              <div className="absolute bottom-3 right-3 text-3xl sm:text-4xl opacity-25 group-hover:scale-125 transition-transform text-[#FFFF00]">📶</div>
            </div>

            {/* Loot 3 */}
            <div className="border-[6px] border-black bg-[#FF00FF] text-black p-5 sm:p-8 md:p-10 neo-shadow bento-hover transition-all relative group">
              <div className="mb-4 text-4xl sm:text-5xl">💼</div>
              <h3 className="font-chunky text-xl sm:text-2xl text-black uppercase">Internships</h3>
              <p className="font-sans text-xs sm:text-base text-black mt-4 leading-relaxed font-extrabold">
                Hand-picked fast-track roles at leading high-growth venture-backed internet companies.
              </p>
              <div className="absolute bottom-3 right-3 text-3xl sm:text-4xl opacity-25 group-hover:scale-125 transition-transform">⚙</div>
            </div>

          </div>
        </div>

        {/* INTERACTIVE VELOCITY SCORE ESTIMATOR */}
        <VelocityScoreCalculator 
          onPlayBeep={playRetroBeep} 
          onPrefillIdea={(idea) => {
            scrollToApply(idea);
          }} 
        />

        {/* 7. INTERACTIVE VIBE CHECK ROASTER (Instant Mechanical Vibe Check) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Mechanical Roaster Vibe Checker Left Grid Column */}
          <section className="lg:col-span-12 xl:col-span-7 h-full">
            <RoastBox onApplyWithIdea={scrollToApply} />
          </section>

          {/* Logistics Static Receipt Block (Bento Card Right) */}
          <aside className="lg:col-span-12 xl:col-span-5 h-full">
            <div className="border-[6px] border-black bg-white p-5 sm:p-8 md:p-10 neo-shadow bento-hover relative overflow-hidden h-full flex flex-col justify-between">
              
              <div>
                <div className="mb-6">
                  <PaintStampLabel text="LOGISTICS" rotate="1.5deg" bgColor="bg-[#FF00FF]" textColor="text-white" />
                </div>

                <h3 className="font-chunky text-xl sm:text-2xl text-black uppercase mb-6">
                  THE DETAILS & REGIME
                </h3>

                <div className="space-y-4 sm:space-y-6 text-xs sm:text-base font-extrabold text-black font-sans leading-relaxed">
                  
                  {/* Row 1 */}
                  <div className="flex justify-between items-center py-2.5 sm:py-3 border-b-[3px] border-dashed border-gray-300">
                    <span className="text-gray-500 font-mono text-[10px] sm:text-sm uppercase">🗓 DATES</span>
                    <span className="font-chunky text-xs sm:text-base text-rose-600">23rd June – 23rd Sep</span>
                  </div>

                  {/* Row 2 */}
                  <div className="flex justify-between items-center py-2.5 sm:py-3 border-b-[3px] border-dashed border-gray-300">
                    <span className="text-gray-500 font-mono text-[10px] sm:text-sm uppercase">⌛ SCHEDULE</span>
                    <span className="font-chunky text-xs sm:text-base text-black">Mon / Wed / Fri / Sat</span>
                  </div>

                  {/* Row 3 */}
                  <div className="flex justify-between items-center py-2.5 sm:py-3 border-b-[3px] border-dashed border-gray-300">
                    <span className="text-gray-500 font-mono text-[10px] sm:text-sm uppercase">🪙 INVESTMENT</span>
                    <span className="font-chunky text-xs sm:text-base text-emerald-600">₹5,000/month</span>
                  </div>

                  {/* Row 4 */}
                  <div className="flex justify-between items-center py-2.5 sm:py-3">
                    <span className="text-gray-500 font-mono text-[10px] sm:text-sm uppercase">👥 SEATS</span>
                    <span className="font-chunky text-xs sm:text-base text-rose-600">30 ONLY. EVER.</span>
                  </div>

                </div>

                {/* Additional Warning info Box resembling paper notice */}
                <div className="mt-6 sm:mt-8 border-[3px] border-black p-4 sm:p-5 bg-yellow-100 flex items-start space-x-2.5 sm:space-x-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-rose-500 font-chunky text-lg sm:text-xl leading-none">⚠</span>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-850 font-mono leading-relaxed font-black">
                    NO REFUNDS. NO MAKEUP SESSIONS. IF YOU FAIL TO SHIP A DEMO BY WEEK 6, YOU ARE SUMMARILY DISCHARGED FROM THE TEAM. NO QUESTIONS.
                  </p>
                </div>
              </div>

              {/* Decorative design credit */}
              <div className="mt-6 sm:mt-8 pt-4 border-t-2 border-dashed border-gray-200 flex justify-between items-center text-[9px] sm:text-[10px] text-gray-400 font-mono">
                <span>SYSTEM_REV: YOLO_v1.2</span>
                <span className="text-black font-bold">BOOTCAMP_2026_COV</span>
              </div>

            </div>
          </aside>
        </div>

        {/* INTERACTIVE STARTUP GRAVEYARD SECT */}
        <StartupGraveyard 
          onPlayBeep={playRetroBeep} 
          onIncorporateIdea={(idea) => {
            scrollToApply(idea);
          }} 
        />

        {/* 8. APPLICATION CIRCUIT FORM PLACE & CERTIFICATE RESULTS */}
        <div className="mt-8 pb-12">
          <TicketPass 
            onSubmitSuccess={handleApplySuccess} 
            prefilledIdea={selectedIdea} 
          />
        </div>

        {/* Display previous submissions if any in a beautiful receipt box */}
        {myApplications.length > 0 && (
          <div className="mt-6 border-4 border-black bg-black text-white p-6 neo-shadow bento-hover">
            <h3 className="font-chunky text-lg text-[#FFFF00] uppercase mb-4 flex items-center space-x-2">
              <UserCheck className="w-5 h-5 text-[#00FF00]" />
              <span>YOUR LOCAL SEAT INITIATIONS ({myApplications.length})</span>
            </h3>
            <div className="space-y-4">
              {myApplications.map((app, idx) => (
                <div key={idx} className="border-2 border-[#FFFF00] p-4 bg-gray-900 rounded-none relative">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="font-mono text-sm text-[#00FF00] font-bold">
                      @{app.twitter} ({app.role})
                    </span>
                    <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-sm">
                      VERIFIED APPLICANT PASS
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2 italic font-serif">
                    "Requested startup idea: {app.idea}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="mt-16 text-center text-xs text-gray-500 font-mono tracking-wider border-t-4 border-black pt-8 bg-black py-8">
        <p className="text-[#FFFF00] font-chunky text-base mb-2 uppercase">
          YOU ONLY LAUNCH ONCE.
        </p>
        <p className="text-gray-300">
          Designed for builders, risk-takers & non-academic doers. Est. 2026.
        </p>
        <p className="text-[#FF00FF] font-black mt-1 uppercase text-[10px]">
          POWERED & BACKED BY 23VENTURES
        </p>
        <div className="flex justify-center space-x-4 mt-4 text-[#FFFF00]/80">
          <span className="hover:underline cursor-pointer">@YOLOCIRCUIT</span>
          <span>•</span>
          <a href="mailto:submissions@youonlylaunchitonce.com" className="hover:underline cursor-pointer text-[#00FFFF]">GMAIL (submissions@youonlylaunchitonce.com)</a>
          <span>•</span>
          <button 
            onClick={() => setShowPrivacy(!showPrivacy)} 
            className="hover:underline cursor-pointer text-rose-400 font-black uppercase text-xs focus:outline-none"
          >
            🛡️ PRIVACY POLICY {showPrivacy ? "▲" : "▼"}
          </button>
        </div>

        {/* Animated Privacy Policy Panel */}
        <AnimatePresence>
          {showPrivacy && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="mt-8 mx-auto max-w-3xl border-4 border-[#FFFF00] bg-neutral-900 text-left p-6 font-mono text-[11px] text-gray-300 leading-relaxed shadow-[6px_6px_0px_0px_rgba(255,255,0,0.8)] overflow-hidden"
            >
              <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4 bg-neutral-950 p-2 border-2 border-[#FFFF00]/30 select-none">
                <span className="text-[#FFFF00] font-chunky text-xs">🛡️ 23VENTURES SECURE DATA PRIVACY LAW</span>
                <span className="text-rose-500 font-bold">REV: 2026.06_SECURE</span>
              </div>
              <div className="space-y-4">
                <p>
                  <strong className="text-white block uppercase mb-1">1. ZERO Remote Surveillance</strong>
                  We do not monitor, log, or store your custom startup concepts or codebases. The Mechanical general vibe roaster functions entirely offline, inside your sandbox browser virtual stack. Zero payload transmissions are sent to external AI servers.
                </p>
                <p>
                  <strong className="text-white block uppercase mb-1">2. Secure Tally Form Integration</strong>
                  The application form is mounted via secure end-to-end sandbox frame widgets, authorized directly through Tally.so. All submitted files and builder records are directly reviewed by the private committee of <strong>23ventures</strong> under strict physical data encapsulation.
                </p>
                <p>
                  <strong className="text-white block uppercase mb-1">3. Gmail Intake Safeguards</strong>
                  When using direct correspondence desks (<span className="text-[#00FFFF]">submissions@youonlylaunchitonce.com</span>), email contents, slide decks, and code repository links are shared only with registered venture board members. We do not sell or distribute applicant registers to external recruiters or brokers.
                </p>
                <p>
                  <strong className="text-white block uppercase mb-1">4. Absolute Data Sovereignty</strong>
                  You possess absolute deletion permissions over persistent local application entries. Simply execute clean actions from your client browser cache, or demand formal entry removal.
                </p>
                <div className="text-center pt-2">
                  <button 
                    onClick={() => setShowPrivacy(false)} 
                    className="bg-[#FFFF00] text-black hover:bg-[#FF00FF] font-chunky text-[10px] uppercase py-2 px-4 border-2 border-black transition-all cursor-pointer"
                  >
                    Close Secure Protocol
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </footer>

    </div>
  );
}
