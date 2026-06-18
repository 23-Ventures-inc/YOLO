import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HandDrawnStar, PaintStampLabel, ReceiptDivider } from "./Scribbles";
import { Sparkles, Terminal, AlertTriangle, Play, RefreshCw, Lock } from "lucide-react";

export const RoastBox = ({ onApplyWithIdea }: { onApplyWithIdea: (idea: string) => void }) => {
  const [fearState, setFearState] = useState<"unanswered" | "afraid" | "brave">("unanswered");
  const [ideaInput, setIdeaInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [roastOutput, setRoastOutput] = useState<string | null>(null);
  const [builderName, setBuilderName] = useState("");

  const handleYes = () => {
    setFearState("afraid");
    setRoastOutput(null);
  };

  const handleNo = () => {
    setFearState("brave");
    setRoastOutput(null);
  };

  const executeMechanicalRoast = (name: string, idea: string): string => {
    const normIdea = idea.toLowerCase();
    const cleanName = name.trim() || "Brave Builder";

    if (normIdea.includes("ai") || normIdea.includes("gpt") || normIdea.includes("llm") || normIdea.includes("agent") || normIdea.includes("gemini")) {
      return `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] Bro, an AI wrapper in 2026? How groundbreaking. I too can copy-paste a 3-sentence API call inside an express template and call myself 'Chief Artificial Intelligence Architect'. This is high-grade cope. Go do 50 actual cold DMs.`;
    }
    if (normIdea.includes("crypto") || normIdea.includes("blockchain") || normIdea.includes("nft") || normIdea.includes("solana") || normIdea.includes("coin")) {
      return `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] Web3? You are literally 5 years late to the digital exit coin party, bro. Nobody is buying your high-latency hyper-inflated monkey tokens anymore. Delete your MetaMask extension and build something a real human wants to buy.`;
    }
    if (normIdea.includes("dating") || normIdea.includes("love") || normIdea.includes("match") || normIdea.includes("relationship") || normIdea.includes("tinder")) {
      return `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] Another dating app. Because what the universe clearly demands is another layer of gamified digital despair. Your target audience of 4 ultra-anxious guys in Bangalore is not going to fund your retirement. Drop this immediately.`;
    }
    if (normIdea.includes("notion") || normIdea.includes("tracker") || normIdea.includes("todo") || normIdea.includes("to-do") || normIdea.includes("productivity") || normIdea.includes("habit")) {
      return `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] A productivity habit tracker?! You basically built a glorified JSON notepad in two weekends because you were too terrified of pitching a real product to paying customers. Absolute peak developer procrastinating behavior.`;
    }
    if (normIdea.includes("social") || normIdea.includes("network") || normIdea.includes("instagram") || normIdea.includes("tiktok") || normIdea.includes("sharing") || normIdea.includes("friend")) {
      return `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] You are trying to build another localized social network. I guarantee you Mark Zuckerberg is not losing any sleep tonight. Focus on capturing cold, hard subscription currency instead of vanity follower metrics on paper.`;
    }
    if (normIdea.includes("saas") || normIdea.includes("dashboard") || normIdea.includes("crm") || normIdea.includes("automate") || normIdea.includes("b2b")) {
      return `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] B2B SaaS for optimizing automated cold beverages. This smells like a product designed for people who write theoretical LinkedIn posts. Go talk to an actual local shopkeeper and see if they will pay you ₹5,000 in physical cash today.`;
    }

    // General savage fallbacks
    const fallbacks = [
      `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] Congratulations, you just invented a newsletter. You will write exactly 2 issues, get 3 subscribers (including your mom), and then never open the editor again. High-level pre-revenue cope.`,
      `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] This sounds like a solution looking for a problem that was already solved by a 14-year-old on Twitter using standard HTML over a single Saturday package. Drop the ego, go back to the launchpad!`,
      `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] Is the target market for this concept just you in 3 hidden developer tabs in Brave browser? Build something that extracts actual currency from real customers, coward!`,
      `[MECHANICAL SYSTEM VERDICT: ${cleanName.toUpperCase()}] This is literally just a standard database wrapper decorated in pastel gradients. If you fail to launch this to real humans in 10 days, you might as well go back to making slide decks for corporate managers.`
    ];

    const idx = Math.abs(idea.length + name.length) % fallbacks.length;
    return fallbacks[idx];
  };

  const runRoastEngine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaInput.trim()) return;

    setLoading(true);
    setRoastOutput(null);

    const loadingSteps = [
      "Waking up the Drill Sergeant...",
      "Analyzing McKinsey career paths...",
      "Simulating 5,000 cold DMs...",
      "De-bloating slide-deck logic...",
      "Engaging Brutalist Vibe matrix..."
    ];

    let currentStep = 0;
    setLoadingMessage(loadingSteps[currentStep]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < loadingSteps.length) {
        setLoadingMessage(loadingSteps[currentStep]);
      } else {
        clearInterval(interval);
        setRoastOutput(executeMechanicalRoast(builderName, ideaInput));
        setLoading(false);
      }
    }, 400); // Super fast interactive feel, no AI wait delays!
  };

  return (
    <div className="w-full border-[6px] border-black bg-white p-4 sm:p-8 md:p-12 neo-shadow relative group overflow-hidden">
      {/* Decorative top paint bar resembling a Window Titlebar */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-black text-[#FFFF00] font-mono text-xs md:text-sm flex items-center justify-between px-4 select-none">
        <span className="flex items-center gap-1.5 font-bold uppercase">
          <Terminal className="w-4 h-4 text-rose-500" />
          <span>CYBERNETIC_GENERAL_VIBE_ROASTER.EXE</span>
        </span>
        <div className="flex space-x-1.5">
          <span className="w-4.5 h-4.5 border-2 border-[#FFFF00] inline-block text-center text-[10px] leading-[10px]">_</span>
          <span className="w-4.5 h-4.5 border-2 border-[#FFFF00] inline-block text-center text-[10px] leading-[10px] bg-[#FFFF00] text-black">█</span>
          <span className="w-4.5 h-4.5 border-2 border-[#FFFF00] inline-block text-center text-[10px] leading-[10px]">X</span>
        </div>
      </div>

      <div className="mt-8">
        <PaintStampLabel text="MECHANICAL DRILL GENERAL" rotate="1deg" bgColor="bg-rose-500" textColor="text-white" />
        
        <h3 className="font-chunky text-xl md:text-3xl text-black mt-6 uppercase tracking-tight leading-tight">
          Are you afraid of a human saying "No"?
        </h3>

        {/* Buttons section with responsive spring animation */}
        <div className="grid grid-cols-2 gap-5 mt-8">
          <motion.button
            id="vibe-check-yes-btn"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            className={`py-4 px-5 text-sm md:text-lg font-chunky border-[5px] border-black uppercase transition-all ${
              fearState === "afraid"
                ? "bg-rose-600 text-white translate-x-1.5 translate-y-1.5 shadow-none"
                : "bg-[#ffd5d5] text-black hover:bg-rose-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            [ YES, VERY ] 💀
          </motion.button>
          
          <motion.button
            id="vibe-check-no-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNo}
            className={`py-4 px-5 text-sm md:text-lg font-chunky border-[5px] border-black uppercase transition-all ${
              fearState === "brave"
                ? "bg-[#00ff7f] text-black translate-x-1.5 translate-y-1.5 shadow-none"
                : "bg-[#e5ffd5] text-black hover:bg-emerald-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            [ NO, NEVER ] ⚡
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {/* YES condition response */}
          {fearState === "afraid" && (
            <motion.div
              key="afraid-box"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 15 }}
              className="mt-8 border-[5px] border-black bg-rose-100 p-6 text-rose-950 font-sans shadow-[6px_6px_0px_0px_#f43f5e] relative"
            >
              <div className="font-chunky text-xl text-rose-700 uppercase flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 animate-bounce text-rose-600" />
                <span>⚠ WARNING: EXTREME EGO DETECTED</span>
              </div>
              <p className="mt-3 text-sm md:text-base leading-relaxed font-semibold">
                <strong>Booo! You are living inside a cocoon of absolute safety.</strong> The YOLO Bootcamp is basically a giant physical ego shredder. If you're afraid of "No", you will never ship anything that matters to anyone.
              </p>
              <p className="mt-3 text-xs md:text-sm font-black uppercase text-rose-800">
                ⚡ Reprogram yourself! Reach up and click the <strong className="underline text-black">[ NO, NEVER ]</strong> button above to mock-test your idea!
              </p>
            </motion.div>
          )}

          {/* NO condition response: Enter Mechanical Roast Section */}
          {fearState === "brave" && (
            <motion.div
              key="brave-box"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 15 }}
              className="mt-8 border-[5px] border-black bg-[#e5ffd5]/80 p-6 font-sans shadow-[6px_6px_0px_0px_#00ff7f] relative"
            >
              <div className="font-chunky text-xl text-emerald-800 uppercase flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-emerald-700 animate-pulse" />
                <span>🚀 HELL YEAH! ACCELERATOR PERMISSION GRANTED</span>
              </div>
              <p className="mt-2 text-sm md:text-base text-emerald-950 leading-relaxed font-bold">
                You claim to have zero fear of rejection. Put your startup or product idea into our cybernetically automated **Savage Vibe Machine** to test your resistance!
              </p>

              <form onSubmit={runRoastEngine} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs md:text-sm font-chunky uppercase text-black mb-2">
                    Your Builder Call-Sign (Name):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Swaglord Builder"
                    value={builderName}
                    onChange={(e) => setBuilderName(e.target.value)}
                    className="w-full border-[5px] border-black p-3.5 bg-white text-black text-sm md:text-base font-sans focus:outline-none focus:ring-4 focus:ring-black/15 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-chunky uppercase text-black mb-2">
                    Your Startup / Product Concept:
                  </label>
                  <textarea
                    placeholder="e.g. A localized dashboard showing when tea stalls are open so developers can coordinate caffeine runs."
                    value={ideaInput}
                    onChange={(e) => setIdeaInput(e.target.value)}
                    className="w-full border-[5px] border-black p-3.5 bg-white text-black text-sm md:text-base font-mono focus:outline-none focus:ring-4 focus:ring-black/15 min-h-[100px] font-bold"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#FFFF00] text-black hover:bg-yellow-300 font-chunky uppercase py-4 px-6 text-sm md:text-base border-[5px] border-black transition-all neo-shadow active:translate-y-0.5 disabled:opacity-50"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Play className="w-4 h-4 text-black font-black" />
                    <span>{loading ? `[ ANALYZING BUBBLE CLUTTER... ]` : `[ RUN MECHANICAL VIBE ENGINE ]`}</span>
                  </span>
                </motion.button>
              </form>

              {/* Loading progress bar */}
              {loading && (
                <div className="mt-6 border-[5px] border-dashed border-black bg-white p-4 text-center animate-pulse">
                  <p className="font-mono text-xs md:text-sm text-rose-500 font-black uppercase">
                    {loadingMessage}
                  </p>
                  <div className="mt-3 w-full bg-gray-200 h-6 border-[3px] border-black overflow-hidden relative">
                    <div className="bg-[#00ff7f] h-full absolute top-0 left-0 animate-marquee-fast" style={{ width: "200%" }}>
                      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                    </div>
                  </div>
                </div>
              )}

              {/* Roast output panel */}
              {roastOutput && !loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 border-[5px] border-black bg-black text-[#FFFF00] p-6 font-mono text-xs md:text-sm shadow-inner relative leading-relaxed"
                >
                  <div className="flex justify-between items-center mb-3 text-white border-b-2 border-dashed border-[#FFFF00]/40 pb-1.5">
                    <span className="font-chunky text-sm flex items-center gap-1.5 text-rose-500">
                      <RefreshCw className="w-4 h-4 animate-spin text-rose-500" />
                      <span>ROAST TRANSMISSION: SECURED</span>
                    </span>
                    <span className="bg-[#ff007f] text-white px-2.5 py-0.5 text-[9px] uppercase font-sans font-extrabold select-none border border-black">
                      100% OFFLINE SECURE
                    </span>
                  </div>
                  
                  <p className="italic font-sans text-sm md:text-lg text-gray-100 font-black leading-relaxed mb-4">
                    "{roastOutput}"
                  </p>

                  <ReceiptDivider />

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
                    <span className="text-[11px] md:text-xs text-gray-400 font-sans font-medium flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Processed strictly locally inside your sandbox browser stack.</span>
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onApplyWithIdea(ideaInput)}
                      className="bg-[#00ff7f] text-black font-chunky uppercase text-xs md:text-sm px-4 py-2.5 border-[3px] border-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-100 shadow-[3px_3px_0px_0px_#000]"
                    >
                      🚀 LOCK IDEA & APPLY FAST-TRACK
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
