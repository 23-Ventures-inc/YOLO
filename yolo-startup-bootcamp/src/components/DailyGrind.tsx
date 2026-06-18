import React, { useState } from "react";
import { Clock, Coffee, ShieldAlert, Sparkles, Swords, MessageSquare, Code } from "lucide-react";
import { PaintStampLabel } from "./Scribbles";

interface GrindStep {
  time: string;
  title: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
  tagline: string;
  intel: string;
}

export function DailyGrind({ onPlayBeep }: { onPlayBeep: (freq?: number, type?: OscillatorType, duration?: number) => void }) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: GrindStep[] = [
    {
      time: "07:00 AM",
      title: "Ego Scrubbing & Cold Shock",
      icon: <Coffee className="w-6 h-6" />,
      accent: "bg-[#FF00FF]",
      description: "Awaken in the 23V Hub sleeping quarters. Stand under 4°C freezing water to instantly shock all academic theorizing and slide-deck-fetishism out of your system. There are no safe spaces here.",
      tagline: "CLEAN OUT COGNITIVE BIAS",
      intel: "Pro-tip: If you start thinking of your five-year growth forecast before your first code branch is pushed, we add 10kg to your squat drill."
    },
    {
      time: "09:00 AM",
      title: "The Battle Commit (No Scaffold)",
      icon: <Code className="w-6 h-6" />,
      accent: "bg-[#00FF00]",
      description: "Write the first code commit of the day. No building complex helper engines from scratch. Copy previous boilerplate, pull down working modules, and prioritize user-facing interaction. Your layout must run by 10 AM.",
      tagline: "VELOCITY > STRUCTURE",
      intel: "Linter is configured on strict warning, but we compile on native TS type-stripping for instant validation cycles."
    },
    {
      time: "12:30 PM",
      title: "Out-Of-Comfort Cold DMs",
      icon: <Swords className="w-6 h-6" />,
      accent: "bg-[#00FFFF]",
      description: "Step onto the live digital tarmac or walk local physical shops. Your target: Send or deliver exactly 50 direct pitch-asks before you are permitted to head to the communal canteen. Handing out comfort is strictly banned.",
      tagline: "FACE THE NO SEVENTY TIMES OVER",
      intel: "If you get a 'YES' instantly, your pitch wasn't aggressive or ambitious enough. We force you to double your price on the next call."
    },
    {
      time: "03:00 PM",
      title: "Shatter-Speed Asset Paint",
      icon: <Sparkles className="w-6 h-6" />,
      accent: "bg-yellow-300",
      description: "Create your product landing page banners, graphics, and interactive layout illustrations of features. Under 20 minutes is the allocated slot. No professional design agency buffers. Make it loud, raw, and high-impact.",
      tagline: "MS PAINT IS ALL YOU NEED",
      intel: "Our internal studies show brutalist high-contrast yellow/neon interfaces convert 42% better than boring corporate off-white SaaS designs."
    },
    {
      time: "06:00 PM",
      title: "Cohort Ego Executioner",
      icon: <ShieldAlert className="w-6 h-6" />,
      accent: "bg-rose-500 text-white",
      description: "Stand opposite 29 other builders. Present your day's shipping results. The cohort has exactly 90 seconds to inspect your conversion rate, ask for transactional proof, and roast non-essential feature creep.",
      tagline: "TRUTH DISCOVERED IN MINUTES",
      intel: "Anyone caught explaining 'the theoretical potential' instead of showing active stripe links is requested to buy samosas for the entire hub."
    },
    {
      time: "09:30 PM",
      title: "VC Tactical Smoke Bomb",
      icon: <MessageSquare className="w-6 h-6" />,
      accent: "bg-black text-[#FFFF00]",
      description: "An unscripted, strictly confidential chat with top-tier active partner VCs or high-growth hardware/internet founders. No cameras, no slide presentations, no PR-safe statements. Pure field-level deployment hacks.",
      tagline: "HOW MULTIMILLION-DOLLAR DEALS ACTUALLY WORK",
      intel: "The rules of the game are written in pencil. Learn to draft high-vibe convertible debt structures under 4 minutes."
    }
  ];

  const selectStep = (idx: number) => {
    setActiveStep(idx);
    onPlayBeep(440 + idx * 80, "triangle", 0.08);
  };

  return (
    <div className="w-full border-[6px] border-black bg-white p-4 sm:p-8 md:p-12 neo-shadow relative mt-16 text-black">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <PaintStampLabel text="REGIME BATTLE-PLAN" rotate="-1deg" bgColor="bg-black" textColor="text-[#00FF00]" />
        <div className="font-mono text-[10px] md:text-xs font-black uppercase text-gray-500 flex items-center gap-1.5 bg-gray-100 px-3 py-1 border-[3px] border-black w-full sm:w-auto justify-center">
          <Clock className="w-4 h-4 text-emerald-600 animate-pulse" /> 
          <span>REGIME OPERATIONAL STATUS: LIVE</span>
        </div>
      </div>

      <h2 className="font-chunky text-3xl md:text-5xl text-black uppercase tracking-tight mb-4">
        THE DAILY ROTATION UNIT
      </h2>

      <p className="font-serif text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mb-8 font-bold">
        90 days aren't calculated in calendar months; they are compressed into hour-by-hour sprints. Here is how your daily schedule looks inside our intense physical incubator zone:
      </p>

      {/* Grid container with tab bar and display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
        {/* Left Side: Brutalist Interactive Hour List */}
        <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-start">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => selectStep(idx)}
                className={`w-full text-left border-[5px] border-black p-3.5 sm:p-4 md:p-5 flex items-center justify-between transition-all duration-100 ${
                  isActive 
                    ? `${step.accent} shadow-none translate-x-1.5 translate-y-1.5 text-black` 
                    : "bg-white hover:bg-gray-100 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3.5 min-w-0">
                  <div className="font-mono text-[9px] md:text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 sm:px-2.5 sm:py-1 select-none shrink-0">
                    {step.time}
                  </div>
                  <span className="font-chunky text-xs sm:text-sm md:text-base tracking-tight uppercase truncate">
                    {step.title}
                  </span>
                </div>
                <div className={`p-1.5 border-2 border-black rounded-sm shrink-0 transition-transform ${isActive ? "scale-110 rotate-12" : "group-hover:scale-105"}`} style={{ backgroundColor: isActive ? "#fff" : "transparent" }}>
                  {step.icon}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: High Impact Card Displaying Current Schedule Intel */}
        <div className="lg:col-span-7 border-[6px] border-black bg-[#faf9f5] p-5 sm:p-8 md:p-10 neo-shadow flex flex-col justify-between relative overflow-hidden">
          {/* Subtle high-key design sticker background */}
          <div className="absolute right-[-24px] bottom-[-24px] text-gray-100 select-none pointer-events-none font-black text-[12rem] font-mono leading-none uppercase">
            {steps[activeStep].time.split(":")[0]}
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center space-x-2.5">
              <span className={`w-3.5 h-3.5 rounded-full inline-block animate-ping ${activeStep % 2 === 0 ? "bg-[#FF00FF]" : "bg-[#00FF00]"}`} />
              <span className="font-chunky text-xs md:text-sm tracking-widest text-[#FF00FF] uppercase bg-black px-3 py-1 font-black">
                {steps[activeStep].tagline}
              </span>
            </div>

            <h3 className="font-chunky text-2xl md:text-4xl text-black uppercase leading-tight">
              {steps[activeStep].time} - {steps[activeStep].title}
            </h3>

            <p className="font-serif text-base md:text-lg text-gray-800 leading-relaxed font-bold">
              {steps[activeStep].description}
            </p>

            {/* Special confidential notice box inside the display */}
            <div className="border-[3px] border-dashed border-red-500 bg-rose-50/50 p-5 font-mono text-xs md:text-sm text-rose-950 shadow-[4px_4px_0px_0px_#f43f5e]">
              <div className="flex items-center space-x-2 text-rose-700 font-chunky uppercase mb-1">
                <span>⚠ UNDERGROUND DEPLOYMENT DIRECTIVE</span>
              </div>
              <p className="leading-relaxed font-black">
                {steps[activeStep].intel}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className="text-[11px] text-gray-400 font-mono tracking-wider">
              ROTATION_STAMP_ID: ADM-23V-#{activeStep + 1}
            </span>
            <span className="bg-[#FFFF00] text-black font-chunky text-xs px-4 py-2 border-2 border-black rotate-1 cursor-default select-none animate-bounce">
              HIGH COMPRESSION ACTIVE ⚡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
