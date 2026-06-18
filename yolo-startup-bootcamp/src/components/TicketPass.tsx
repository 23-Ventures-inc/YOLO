import React from "react";
import { HandDrawnStar, PaintStampLabel } from "./Scribbles";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";

export const TicketPass = ({
  prefilledIdea = "",
}: {
  onSubmitSuccess?: (app: any) => void;
  prefilledIdea?: string;
}) => {
  return (
    <div id="apply-circuit-section" className="w-full border-[6px] border-black bg-white p-4 sm:p-8 md:p-12 neo-shadow relative overflow-hidden text-black">
      {/* Tape Decors */}
      <div className="absolute top-[-10px] right-[-30px] w-48 h-12 bg-yellow-300 border-2 border-black rotate-12 flex items-center justify-center font-mono text-[9px] font-black uppercase text-black select-none z-10">
        FAST-TRACK GRANTED
      </div>
      <div className="absolute bottom-[-10px] left-[-30px] w-48 h-12 bg-black border-2 border-yellow-300 -rotate-12 flex items-center justify-center font-mono text-[9px] font-black uppercase text-yellow-300 select-none z-10">
        23VENTURES PORTFOLIO
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center space-x-3">
          <PaintStampLabel text="ADMISSION MODULE" rotate="-1deg" bgColor="bg-rose-600" textColor="text-white" />
          <HandDrawnStar className="w-8 h-8 text-rose-500 animate-pulse" />
        </div>
        <div className="font-mono text-xs font-black uppercase tracking-widest text-[#FF00FF] bg-black px-3 py-1 border-[3px] border-black rotate-1">
          PARENT: 23VENTURES INC. ⚡
        </div>
      </div>

      <div className="space-y-6 text-black">
        {/* Main Header & Pitch Pitch */}
        <div className="border-[5px] border-black bg-[#faf9f5] p-6 md:p-8 relative">
          <div className="absolute top-3 right-3 bg-black text-[#00FF00] font-mono text-[10px] font-black px-2 py-0.5 uppercase border-2 border-black animate-pulse select-none">
            CIRCUIT-1 INTAKE
          </div>

          <h2 className="font-chunky text-3xl md:text-5xl text-black uppercase tracking-tight leading-none mb-4">
            APPLY TO THE FIRST CIRCUIT
          </h2>
          
          <p className="font-serif text-sm md:text-base text-gray-800 leading-relaxed max-w-3xl font-bold">
            The 90-day physical execution compound is initiated and backed by <span className="text-rose-600 underline">23ventures</span>. No theoretical slide decks, no academic exercises. We expect high-velocity product shipping, daily deployment targets, and direct customer communication.
          </p>

          {/* Prefilled Locked Idea Alert */}
          {prefilledIdea && (
            <div className="mt-6 border-[3px] border-black bg-[#e5ffd5] p-4 font-mono text-xs md:text-sm text-black shadow-[4px_4px_0px_0px_#00FF00] animate-scale-up-fade">
              <div className="flex items-center space-x-2 text-emerald-800 font-chunky uppercase mb-1">
                <Sparkles className="w-4 h-4 text-emerald-700 inline" />
                <span>IDEOLOGY RADAR TARGET DETECTED</span>
              </div>
              <p className="font-bold leading-relaxed">
                Your custom startup concept <span className="bg-white/80 border border-black px-1.5 py-0.5 text-rose-700">"{prefilledIdea}"</span> has been locked into the launcher. Make sure to paste or mention this key initiative when filling the form below, or send your full pitch assets directly!
              </p>
            </div>
          )}
        </div>

        {/* Double Core Action Blocks (Email Intake vs Direct link button) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Action 1: Big Tally Link Button directly opening in new tab */}
          <div className="border-[5px] border-black bg-[#FFFF00] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden neo-shadow group">
            <div className="space-y-4">
              <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-black uppercase">
                FORM SUBMISSIONS
              </div>
              <h3 className="font-chunky text-2xl uppercase tracking-tight leading-none text-black">
                OFFICIAL PORTAL
              </h3>
              <p className="font-serif text-sm md:text-base font-bold leading-relaxed text-black">
                Submit your builder experience profile and startup objectives on our official application form.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="https://tally.so/r/8121go" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-black text-[#FFFF00] hover:text-white hover:bg-neutral-900 font-chunky text-base uppercase py-5 px-6 border-[4px] border-black transition-all flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 block text-center"
              >
                <span>APPLY NOW ON TALLY</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <span className="block text-center text-[10px] font-mono tracking-wider text-black font-semibold mt-3">
                SECURE ROUTE: https://tally.so/r/8121go
              </span>
            </div>
          </div>

          {/* Action 2: Gmail Correspondence panel */}
          <div className="border-[5px] border-black bg-black text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden neo-shadow">
            <div className="absolute right-[-20px] bottom-[-20px] text-gray-800 pointer-events-none select-none font-chunky text-7xl uppercase opacity-20">
              GMAIL
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center space-x-2 text-rose-400">
                <Mail className="w-5 h-5" />
                <span className="font-chunky text-xs uppercase tracking-widest font-black">GMAIL SUBMISSION DESK</span>
              </div>

              <h3 className="font-chunky text-xl uppercase leading-snug">
                PITCH VIA SECURE EMAIL INTAKE
              </h3>

              <p className="font-mono text-[11px] leading-relaxed text-gray-300">
                Have an existing code repo, transactional proof, or high-compression slides? Bypass regular lists and stream directly to the parent company review board.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 space-y-3 relative z-10 w-full">
              <div className="bg-gray-900 border-2 border-gray-700 p-3.5 font-mono text-xs text-[#00FF00] break-all select-all font-bold text-center">
                submissions@youonlylaunchitonce.com
              </div>

              <a 
                href="mailto:submissions@youonlylaunchitonce.com?subject=YOLO%20Circuit-1%20Founder%20Application&body=Hello%20YOLO%20Team%2C%0D%0A%0D%0AMy%20Name%3A%20%0D%0AMy%20Project%3A%20%0D%0AGame-plan%20link%3A%20"
                className="w-full bg-[#00ff7f] hover:bg-[#02e071] text-black font-chunky text-xs uppercase py-3.5 px-4 border-2 border-black transition-all text-center block"
              >
                ➔ DISPATCH GMAIL INQUIRY
              </a>
            </div>
          </div>

        </div>

        {/* Footer info box mentioning 23ventures as parent */}
        <div className="border-[3px] border-dashed border-gray-400 bg-gray-50 p-4 font-mono text-[10px] text-gray-500 text-center leading-relaxed">
          <p className="font-black uppercase">
            YOLO COV INCUBATOR IS SPONSORED, DIRECTED AND DEPLOYED GLOBALLY OF THE INTELLECTUAL CAPITAL OF <strong className="text-rose-600">23VENTURES</strong>.
          </p>
          <p className="mt-1">
            All submitted applications, files, and intellectual proposals are managed in strict confidentiality with target VC committees. Est. 2026.
          </p>
        </div>
      </div>
    </div>
  );
};
