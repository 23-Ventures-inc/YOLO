import React, { useState } from "react";
import { Gauge, CheckSquare, Square, Rocket, AlertTriangle, ShieldCheck } from "lucide-react";
import { PaintStampLabel } from "./Scribbles";

interface CalculatorMetric {
  id: string;
  text: string;
  points: number;
  isPenalty?: boolean;
}

const BUILTIN_METRICS: CalculatorMetric[] = [
  {
    id: "m1",
    text: "I can prototype a working React layout or interactive database mockup in under 8 hours.",
    points: 20
  },
  {
    id: "m2",
    text: "I have asked at least 3 real local shopkeepers or strangers what their biggest daily problem is.",
    points: 25
  },
  {
    id: "m3",
    text: "I am willing to send 50 personalized Cold DMs daily and get rejected without crying.",
    points: 20
  },
  {
    id: "m4",
    text: "I am perfectly happy starting my business website with exactly ONE single main feature (No Bloat).",
    points: 20
  },
  {
    id: "m5",
    text: "I regularly share raw, semi-broken code snippets on GitHub or Twitter instead of waiting for perfection.",
    points: 15
  },
  // PENALTIES
  {
    id: "p1",
    text: "I will not release my project unless I get a patent-pending certificate or sign an NDA (Ego flag).",
    points: -15,
    isPenalty: true
  },
  {
    id: "p2",
    text: "I plan to spend over 3 weeks designing the perfect vector logo and choosing secondary color presets.",
    points: -20,
    isPenalty: true
  },
  {
    id: "p3",
    text: "My mother is my only prospective target audience or financial supporter.",
    points: -15,
    isPenalty: true
  }
];

export function VelocityScoreCalculator({ 
  onPlayBeep, 
  onPrefillIdea 
}: { 
  onPlayBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
  onPrefillIdea: (ideaText: string) => void;
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>(["m1", "m4"]); // default a couple checked
  const [hasCalculated, setHasCalculated] = useState(false);
  const [calculating, setCalculating] = useState(false);

  const toggleMetric = (id: string, weight: number) => {
    onPlayBeep(weight > 0 ? 550 : 280, "sawtooth", 0.05);
    setHasCalculated(false); // Reset calculation results to force user to click the big calculate button

    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Calculate final score bounded between 0 and 100
  const totalScoreByCalc = () => {
    let score = 0;
    BUILTIN_METRICS.forEach(m => {
      if (selectedIds.includes(m.id)) {
        score += m.points;
      }
    });
    // add a baseline of 10
    score = score + 10;
    return Math.max(0, Math.min(100, score));
  };

  const executeCalculation = () => {
    onPlayBeep(330, "sine", 0.1);
    setCalculating(true);
    
    // Simulate high speed database query spinner
    let ticks = 0;
    const interval = setInterval(() => {
      onPlayBeep(440 + ticks * 50, "sine", 0.04);
      ticks++;
      if (ticks >= 4) {
        clearInterval(interval);
        setCalculating(false);
        setHasCalculated(true);
        onPlayBeep(880, "sine", 0.25);
      }
    }, 150);
  };

  const finalScore = totalScoreByCalc();

  // Custom feedback categories
  const getFeedbackCategory = (score: number) => {
    if (score <= 25) {
      return {
        rating: "SLEEPWALKING SNAIL (Ego Level: 100%)",
        color: "bg-red-500 text-white border-red-700",
        quote: "You have extreme case-study paralysis. You are likely to spend 9 months writing a 42-page business brief before calling a single customer on the phone.",
        action: "We suggest applying as a McKinsey corporate strategy slide-deck intern instead."
      };
    } else if (score <= 55) {
      return {
        rating: "COUCH SCHOLAR (Ego Level: 75%)",
        color: "bg-[#FF00FF] text-black border-black",
        quote: "You want the reputation, but you are afraid to ship raw stuff. You spend too much time tuning CSS gradients and testing your button layout in Firefox mobile instead of collecting cold currency.",
        action: "Clean your terminal history, purge your unused layout plugins, and target Month 1 startup compression."
      };
    } else if (score <= 80) {
      return {
        rating: "CIRCULAR BATTLE BUILDER (Ego Level: 35%)",
        color: "bg-[#00FFFF] text-black border-black",
        quote: "Decent tactical potential. You can write modular code and understand that shipping beats theoretical perfection. However, we still detect some fear of stranger-rejection.",
        action: "You are the ideal candidate for the YOLO pressure cooker. We will force-extract your remaining ego."
      };
    } else {
      return {
        rating: "HYPER-VELOCITY MVP METEOR (Ego Level: 0%)",
        color: "bg-[#00FF00] text-black border-black border-[5px]",
        quote: "Absolute savage. You sleep under the terminal, write responsive HTML code in your head, and don't care if 100 people tell you your design looks like MS Paint as long as they pay you.",
        action: "Unblock your stripe accounts. Come claim your ₹50,000 cash grant at Demo Day."
      };
    }
  };

  const feed = getFeedbackCategory(finalScore);

  return (
    <div id="velocity-calc-section" className="w-full border-[6px] border-black bg-white p-4 sm:p-8 md:p-12 neo-shadow relative mt-16 text-black">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <PaintStampLabel text="METER LABS" rotate="1deg" bgColor="bg-black" textColor="text-[#FF00FF]" />
        <div className="font-mono text-[10px] md:text-xs font-black uppercase text-gray-500 flex items-center gap-1.5 bg-gray-50 px-3 py-1 border-2 border-black w-full sm:w-auto justify-center">
          <Gauge className="w-4 h-4 text-rose-500" />
          <span>VELOCITY ESTIMATOR SYSTEM: CALIBRATED</span>
        </div>
      </div>

      <h2 className="font-chunky text-3xl md:text-5xl text-black uppercase tracking-tight mb-4">
        THE SHIP VELOCITY TESTER
      </h2>

      <p className="font-serif text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mb-8 font-bold">
        Are you actually a high-vibe shipping warrior or just a tech-larper playing startup playground? Check the boxes below truthfully to run the mathematical diagnostics.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
        {/* Left column: Checkboxes */}
        <div className="lg:col-span-7 space-y-4">
          <div className="border-4 border-black p-4 bg-yellow-50 flex items-start space-x-2.5">
            <span className="text-yellow-600 font-chunky text-base">ℹ</span>
            <p className="text-[11px] md:text-xs font-mono text-gray-700 leading-tight">
              Select or deselect traits that reflect your true developer habits. Point weight values will run live additions or heavy penalties to your score rating.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {BUILTIN_METRICS.map((metric) => {
              const checked = selectedIds.includes(metric.id);
              return (
                <button
                  type="button"
                  key={metric.id}
                  onClick={() => toggleMetric(metric.id, metric.points)}
                  className={`w-full text-left border-[3px] border-black p-3 md:p-4 flex items-start space-x-3 transition-colors ${
                    checked 
                      ? metric.isPenalty ? "bg-rose-55 border-red-500" : "bg-[#e5ffd5] border-emerald-500" 
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {checked ? (
                      <CheckSquare className={`w-5 h-5 ${metric.isPenalty ? "text-rose-600" : "text-emerald-700"}`} />
                    ) : (
                      <Square className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className={`font-sans text-xs md:text-sm font-extrabold ${checked ? "text-black" : "text-gray-600"}`}>
                      {metric.text}
                    </span>
                    <span className={`ml-2 font-mono text-[10px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded-sm select-none ${
                        metric.isPenalty ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {metric.points > 0 ? `+${metric.points} Points` : `${metric.points} Penalty`}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={executeCalculation}
              disabled={calculating}
              className="w-full bg-black text-[#FFFF00] hover:bg-[#FF00FF] hover:text-black font-chunky uppercase py-4 px-6 text-sm md:text-base border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 transition-all text-center select-none"
            >
              {calculating ? "[ RUNNING ENGINE CALCULATOR... ]" : "⚡ [ EXECUTE VELOCITY SCIENTIFIC TEST ]"}
            </button>
          </div>
        </div>

        {/* Right column: live metrics panel */}
        <div className="lg:col-span-5 border-[6px] border-black bg-[#faf9f5] p-5 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          
          <div>
            <span className="font-chunky text-xs uppercase tracking-widest text-[#FF00FF] bg-black px-2.5 py-1 font-black">
              LIVE SPEEDOMETER
            </span>

            {/* Large score representation */}
            <div className="mt-6 text-center">
              <span className="font-chunky text-7xl md:text-9xl leading-none block tracking-tighter">
                {calculating ? "??" : `${finalScore}`}
              </span>
              <span className="font-mono text-xs text-gray-500 uppercase font-black block mt-2">
                SHIPPING VELOCITY SCORE / 100
              </span>
            </div>

            {/* Custom Meter graphic */}
            <div className="mt-6 border-[3px] border-black bg-gray-200 h-8 relative select-none overflow-hidden">
              <div 
                className="bg-[#00ff7f] h-full border-r-[3px] border-black transition-all duration-500" 
                style={{ width: `${calculating ? 25 : finalScore}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-between px-3 text-[10px] font-mono font-black uppercase text-black mix-blend-exclusion">
                <span>SLOW_ZONE</span>
                <span>COMFORT_LIMIT</span>
                <span>YOLO_SPEED</span>
              </div>
            </div>
          </div>

          {/* Calculator outcomes */}
          {hasCalculated && !calculating ? (
            <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 space-y-4 animate-scale-up-fade text-black">
              <div className={`p-4 border-[3px] border-black font-chunky text-sm md:text-base uppercase flex items-center gap-1.5 ${feed.color}`}>
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>{feed.rating}</span>
              </div>

              <p className="font-serif text-sm font-semibold text-gray-700 leading-relaxed italic">
                "{feed.quote}"
              </p>

              <div className="border-2 border-black p-3 bg-white font-mono text-[11px] md:text-xs font-black text-rose-600 leading-snug">
                RECONSTRUCTIVE RECOMMENDIVE: {feed.action}
              </div>

              <button
                onClick={() => {
                  onPlayBeep(920, "triangle", 0.08);
                  onPrefillIdea(`Checked velocity potential (${finalScore} score) on ship-calculator. Target concept: MVP launch with single core asset`);
                }}
                className="w-full bg-[#FFFF00] text-black font-chunky uppercase text-xs py-2 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#000]"
              >
                [ AUTO-FILL SEAT FORM WITH CALC RESULT ]
              </button>
            </div>
          ) : (
            <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 text-center select-none py-6">
              <span className="text-3xl animate-pulse text-gray-400 block mb-2">⚖</span>
              <p className="font-mono text-xs text-gray-400 uppercase font-black">
                {calculating ? "CALCULATING SCORE..." : "Awaiting estimation cycle run"}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
