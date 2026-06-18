import React, { useState } from "react";
import { Trash2, AlertOctagon, Skull, Ghost, RefreshCw } from "lucide-react";
import { PaintStampLabel } from "./Scribbles";

interface GraveyardIdea {
  id: number;
  project: string;
  tagline: string;
  causeOfDeath: string;
  roastVerdict: string;
  epitaph: string;
  color: string;
}

const GRAVEYARD_ITEMS: GraveyardIdea[] = [
  {
    id: 1,
    project: "MeowLedger",
    tagline: "Web3 Smart-contracts for Decentralized Stray Cat Ownership Tracking.",
    causeOfDeath: "Zero customer demand. Stray cats do not understand private keys or transaction fees.",
    roastVerdict: "Cat-astrophic developer delusion. A system built entirely to play with blockchain APIs while feline users just sleep on trash cans.",
    epitaph: "Here lies MeowLedger. Burned ₹30L on audits. Cats still prefer cardboard boxes.",
    color: "bg-[#ffd5d5]"
  },
  {
    id: 2,
    project: "ButterVibe AI",
    tagline: "LLM-powered real-time tracking of the precise angle you spread butter on sourdough.",
    causeOfDeath: "Extreme micro-feature LARPing. Solving a non-existent threat with infinite model tokens.",
    roastVerdict: "You spend ₹500 an hour queries to ask an AI if your toast is buttery. Your target audience is exactly one person (yourself).",
    epitaph: "R.I.P. ButterVibe. Toast remains manually buttered. Founders now working at Subway.",
    color: "bg-[#e5ffd5]"
  },
  {
    id: 3,
    project: "SaaS-Squared",
    tagline: "A software platform that manages subscriptions for other software platforms that manage subscription software.",
    causeOfDeath: "The infinite recursive void of useless SaaS tools.",
    roastVerdict: "Selling meta-management to people who have no real business operations. It is software-ception and a direct precursor of doom.",
    epitaph: "SaaS-Squared has shut down. The stack was too heavy. Not even the founder renewed the subscription.",
    color: "bg-[#d5f5ff]"
  },
  {
    id: 4,
    project: "Doodlr",
    tagline: "Uber for premium, certified manual pencil sharpening on-demand in Bengaluru hubs.",
    causeOfDeath: "Negative unit economics. It costs ₹150 in fuel to sharpen a ₹5 Nataraj pencil.",
    roastVerdict: "A localized physical service that makes zero mathematical sense. Just buy a ₹10 plastic sharpener or use a cutter.",
    epitaph: "Pencil was broken, and so was the cap table. May it rest in graphite shavings.",
    color: "bg-[#fdedff]"
  },
  {
    id: 5,
    project: "FoghornZen",
    tagline: "An application that blasts a 120-decibel foghorn audio loop if you look at Instagram instead of meditating.",
    causeOfDeath: "Immediate app store ban + acoustic trauma lawsuits.",
    roastVerdict: "A masterclass in self-inflicted distress masquerading as a self-care wellness utility. Users deleted it within 9 seconds.",
    epitaph: "Gone but most definitely HEARD. Decibel rating exceeded venture capital thresholds.",
    color: "bg-[#fff7d5]"
  }
];

export function StartupGraveyard({ 
  onPlayBeep, 
  onIncorporateIdea 
}: { 
  onPlayBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
  onIncorporateIdea: (idea: string) => void;
}) {
  const [items, setItems] = useState<GraveyardIdea[]>(GRAVEYARD_ITEMS);
  const [selectedKid, setSelectedKid] = useState<number>(0);
  const [customBuriedName, setCustomBuriedName] = useState("");
  const [customBuriedTag, setCustomBuriedTag] = useState("");

  const inspectTombstone = (idx: number) => {
    setSelectedKid(idx);
    onPlayBeep(320 + idx * 40, "sawtooth", 0.12);
  };

  const handleBuryNewIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customBuriedName.trim() || !customBuriedTag.trim()) return;

    onPlayBeep(220, "sine", 0.25);

    const newGraveyardItem: GraveyardIdea = {
      id: items.length + 1,
      project: customBuriedName,
      tagline: customBuriedTag,
      causeOfDeath: "Disqualified instantly during preliminary ego audit. Idea was deemed too safe/vague.",
      roastVerdict: "Classic bubble-thought. Zero customer validation, 100% fear of a cold DM.",
      epitaph: "Buried on live feed. May its database rest in locally uncommitted branches forever.",
      color: "bg-[#eaeaea]"
    };

    setItems(prev => [newGraveyardItem, ...prev]);
    setSelectedKid(0); // Select the new buried idea
    setCustomBuriedName("");
    setCustomBuriedTag("");
  };

  const activeIdea = items[selectedKid] || items[0];

  return (
    <div className="w-full border-[6px] border-black bg-white p-4 sm:p-8 md:p-12 neo-shadow relative mt-16 text-black">
      <div className="mb-6">
        <PaintStampLabel text="THE GRAVEYARD OF BS" rotate="-1.5deg" bgColor="bg-rose-600" textColor="text-white" />
      </div>

      <h2 className="font-chunky text-3xl md:text-5xl text-black uppercase tracking-tight mb-4">
        THE STARTUP GRAVEYARD
      </h2>

      <p className="font-serif text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mb-8 font-bold">
        We do not tolerate 'passion projects' that solve artificial problems. Look at these actual, real concepts we buried this morning so they wouldn't waste another single rupee of pre-seed capital:
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Graveyard plots grid */}
        <div className="xl:col-span-6 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((item, idx) => {
              const isSelected = idx === selectedKid;
              return (
                <button
                  key={item.id}
                  onClick={() => inspectTombstone(idx)}
                  className={`border-[5px] border-black p-4 flex flex-col items-center justify-center relative cursor-pointer group transition-all duration-100 select-none ${
                    isSelected 
                      ? "bg-black text-[#FFFF00] translate-x-1.5 translate-y-1.5 shadow-none" 
                      : `${item.color} text-black hover:-translate-x-1 hover:-translate-y-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0`
                  }`}
                >
                  {/* Gravestone badge */}
                  <span className="text-3xl mb-2 group-hover:animate-bounce">🪦</span>
                  <span className="font-chunky text-sm uppercase text-center block tracking-tight line-clamp-1">
                    {item.project}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider mt-1 opacity-80 block">
                    {isSelected ? "[ INSPECTING ]" : "BURIED"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic interactive burier form */}
          <form 
            onSubmit={handleBuryNewIdea} 
            className="border-[5px] border-dashed border-gray-400 bg-gray-50 p-6 md:p-8 mt-6 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] space-y-4"
          >
            <h3 className="font-chunky text-base md:text-lg text-gray-700 uppercase flex items-center gap-1.5 leading-none">
              <Skull className="w-5 h-5 text-rose-500 animate-pulse" />
              <span>HAVE A BAD IDEA? BURY IT HERE INSTANTLY</span>
            </h3>
            
            <p className="text-[11px] md:text-xs text-gray-500 font-mono leading-relaxed">
              Clear your mind! If you have a mediocre idea (like an 'Instagram wrapper for matching custom socks'), type it here and commit it to the dirt so you never speak of it again.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Idea Name (e.g. SockMatch)"
                  value={customBuriedName}
                  onChange={(e) => setCustomBuriedName(e.target.value)}
                  className="w-full border-[3px] border-black p-2.5 bg-white text-xs font-mono focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Low-vibe Tagline (e.g. Uber for Socks)"
                  value={customBuriedTag}
                  onChange={(e) => setCustomBuriedTag(e.target.value)}
                  className="w-full border-[3px] border-black p-2.5 bg-white text-xs font-mono focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-rose-400 hover:text-rose-300 font-chunky text-xs uppercase py-3 border-[3px] border-black transition-all flex items-center justify-center space-x-2"
            >
              <span>[ BURY AND COMMENCE THE CRYING ]</span>
              <Ghost className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Detailed Report Panel */}
        <div className="xl:col-span-6 border-[6px] border-black bg-rose-50 p-5 sm:p-8 md:p-10 neo-shadow relative overflow-hidden">
          <div className="absolute top-4 right-4 text-rose-400 opacity-20">
            <Trash2 className="w-24 h-24 stroke-1 animate-spin" style={{ animationDuration: "15s" }} />
          </div>

          <div className="relative z-10 space-y-6 text-black">
            <div className="inline-flex items-center space-x-2 bg-rose-200 border-2 border-black px-3 py-1 font-mono text-[11px] md:text-xs font-black uppercase text-rose-900 select-none">
              <AlertOctagon className="w-4 h-4 text-rose-700 inline" />
              <span>OFFICIAL AUTOPSY REPORT ID: #GY-00{activeIdea.id}</span>
            </div>

            <div>
              <h3 className="font-chunky text-3xl text-rose-800 uppercase tracking-tight">
                {activeIdea.project}
              </h3>
              <p className="text-sm md:text-base italic font-serif text-gray-700 font-black mt-1">
                "{activeIdea.tagline}"
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-rose-500 pl-4 py-1">
              <div>
                <span className="font-mono text-xs text-rose-700 uppercase block tracking-wider font-extrabold">
                  ⚠️ Cause of Death:
                </span>
                <p className="text-sm md:text-base font-sans font-bold leading-relaxed text-black mt-1">
                  {activeIdea.causeOfDeath}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-rose-700 uppercase block tracking-wider font-extrabold">
                  🔥 Drills Sergeant Vibe Verdict:
                </span>
                <p className="text-xs md:text-sm font-mono leading-relaxed text-gray-800 mt-1">
                  {activeIdea.roastVerdict}
                </p>
              </div>
            </div>

            <div className="border-[3px] border-dashed border-rose-900/40 bg-rose-100 p-4 font-mono text-xs leading-relaxed italic text-center select-none font-semibold">
              " {activeIdea.epitaph} "
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-[10px] text-gray-400 font-mono">
                DECEASED_STAMP: 23V_MORTUARY
              </span>
              <button
                onClick={() => {
                  onPlayBeep(700, "square", 0.08);
                  onIncorporateIdea(activeIdea.project + " (fixed version with validated sales)");
                }}
                className="bg-[#00ff7f] text-black font-chunky text-xs uppercase px-4 py-2.5 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                🛠 Let me fix this & Build Real Version!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
