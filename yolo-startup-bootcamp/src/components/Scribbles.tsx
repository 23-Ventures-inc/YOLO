import React from "react";

// Beautiful SVG hand-drawn scribble stars that rotate/pulse
export const HandDrawnStar = ({ className = "w-6 h-6 text-black" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Rough 4-point star sketch */}
    <path d="M12 2 C13 7 17 11 22 12 C17 13 13 17 12 22 C11 17 7 13 2 12 C7 11 11 7 12 2 Z" />
  </svg>
);

// Hand-drawn custom squiggle arrow
export const HandDrawnScribbleArrow = ({ className = "w-8 h-8 text-black" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    className={className}
  >
    {/* Squiggly line pointing down */}
    <path d="M50,5 Q55,20 45,30 Q50,40 50,45" strokeDasharray="3 3" />
    <path d="M40,37 L50,47 L58,35" />
  </svg>
);

// High-fidelity handcrafted MS Paint Rocket custom illustration card
export const MSPaintRocketCard = () => {
  return (
    <div className="w-full h-full min-h-[350px] border-4 border-black bg-black text-[#FFFF00] p-6 flex flex-col items-center justify-between relative overflow-hidden neo-shadow group">
      {/* Absolute floating grid in background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFFF00_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Retro MS Paint canvas overlay details */}
      <div className="absolute top-2 left-2 text-[10px] bg-red-600 text-white px-2 py-0.5 border-2 border-black font-mono select-none">
        PAINT.EXE - 95%
      </div>
      <div className="absolute top-2 right-2 text-[10px] bg-green-600 text-white px-2 py-0.5 border-2 border-black font-mono select-none">
        ZOOM 1x
      </div>

      <div className="w-full flex-1 flex flex-col items-center justify-center mt-6">
        {/* Animated Handdrawn Rocket SVG */}
        <div className="relative w-44 h-44 animate-bounce duration-[3000ms] ease-in-out">
          {/* Sparkles / Stars in Orbit */}
          <div className="absolute top-2 left-2 animate-pulse text-[#00ff7f]">
            <HandDrawnStar className="w-5 h-5 text-[#00ff7f]" />
          </div>
          <div className="absolute top-8 right-0 animate-spin duration-[5000ms]">
            <HandDrawnStar className="w-6 h-6 text-[#ff007f]" />
          </div>
          <div className="absolute bottom-12 left-4 animate-ping duration-[4000ms]">
            <span className="text-sky-400 font-bold">✵</span>
          </div>

          <svg
            viewBox="0 0 100 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-yellow-300 drop-shadow-[0_0_10px_rgba(243,255,0,0.3)]"
          >
            {/* Rocket Thruster Flames */}
            <path
              d="M42 90 L50 115 L58 90 L48 100 Z"
              fill="#ff3366"
              stroke="#ff3366"
              strokeWidth="2.5"
              className="animate-pulse"
            />
            <path
              d="M46 90 L50 106 L54 90 Z"
              fill="#ffcc00"
              stroke="#ffcc00"
              strokeWidth="2.5"
              className="animate-pulse"
            />

            {/* Rocket Body Sketch */}
            {/* Nosecone */}
            <path d="M50 10 C56 22 66 38 66 50 C66 65 66 85 66 90 L34 90 C34 85 34 65 34 50 C34 38 44 22 50 10 Z" fill="#222" />
            
            {/* Fine handdrawn scribbles inside outer shell */}
            <path d="M38 48 C44 46, 56 46, 62 48" stroke="#FFFF00" strokeWidth="2" />
            <path d="M36 72 C44 70, 56 70, 64 72" stroke="#FFFF00" strokeWidth="2" strokeDasharray="3 3" />

            {/* Wings */}
            <path d="M34 70 L15 88 L34 90 Z" fill="#222" stroke="#00ff7f" strokeWidth="3" />
            <path d="M66 70 L85 88 L66 90 Z" fill="#222" stroke="#00ff7f" strokeWidth="3" />

            {/* Porthole/Window */}
            <circle cx="50" cy="48" r="10" stroke="#ff3366" strokeWidth="3.5" fill="#33adff" />
            <circle cx="47" cy="45" r="3" fill="#fff" />
          </svg>

          {/* Squiggly launch lines under body */}
          <div className="absolute bottom-2 left-6 right-6">
            <svg viewBox="0 0 100 15" className="w-full text-emerald-400">
              <path
                d="M 5 8 Q 15 2, 25 10 T 45 8 T 65 10 T 85 5 T 95 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Slogan details */}
      <div className="text-center w-full z-10 flex flex-col items-center">
        <p className="font-marker tracking-wider text-xl uppercase mt-4 mb-2 text-white">
          SHIPS OR GET SHIPPED ON
        </p>
        <span className="text-[11px] font-mono tracking-widest text-[#00ff99] border-t-2 border-dashed border-[#00ff99]/40 pt-1 w-3/4">
          AUTOMATIC CODE DEPOT 🌟
        </span>
      </div>
    </div>
  );
};

// Hand-drawn custom underline scribble
export const ScribbleUnderline = () => (
  <svg
    viewBox="0 0 300 15"
    className="w-full h-4 text-black absolute left-0 bottom-[-10px] pointer-events-none"
    preserveAspectRatio="none"
  >
    <path
      d="M3 11 C80 5, 170 3, 297 10 C220 14, 110 12, 10 14 Z"
      fill="currentColor"
    />
  </svg>
);

// High impact neon stamp label (Tilted stickers used in Early MS-Paint / GenZ web)
export const PaintStampLabel = ({
  text,
  rotate = "-3deg",
  bgColor = "bg-black",
  textColor = "text-[#FFFF00]",
  id,
}: {
  text: string;
  rotate?: string;
  bgColor?: string;
  textColor?: string;
  id?: string;
}) => (
  <div
    id={id}
    className={`inline-block py-1.5 px-4 font-chunky text-xs uppercase tracking-tighter border-2 border-black ${bgColor} ${textColor} transform -skew-x-6 origin-center select-none neo-shadow`}
    style={{ transform: `rotate(${rotate}) skewX(-6deg)` }}
  >
    {text}
  </div>
);

// Dotted receipt line separator
export const ReceiptDivider = () => (
  <div className="w-full my-4 border-b-4 border-dotted border-black opacity-90" />
);
