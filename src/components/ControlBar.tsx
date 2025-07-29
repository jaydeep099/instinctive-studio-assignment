"use client";

import { PlayCircle, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useState } from "react";

export default function ControlBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds} (${day}-${month}-${year})`;
  };

  return (
    <section className="flex flex-col w-full h-fit">
      <div className="flex gap-6 ml-auto items-center w-full h-[44px] rounded-[6px] py-1 px-4 bg-[#131313] text-white">
        <div className="flex gap-4 items-center">
          <button>
            <SkipBack className="w-6 h-6" />
          </button>
          <button>
            <img src="./10secback.svg" alt="10s back" className="w-6 h-6" />
          </button>
          <button>
            <PlayCircle className="w-8 h-8" />
          </button>
          <button>
            <img
              src="./10secforward.svg"
              alt="10s forward"
              className="w-6 h-6"
            />
          </button>
          <button>
            <SkipForward className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm font-sans">{formatTime(time)}</div>
          <div className="flex items-center gap-4">
            <span className="text-xs">1x</span>
            <button className="w-5 h-5">
              <img src="./playback.svg" alt="speed control" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[246px] rounded-[6px]"></div>
    </section>
  );
}
