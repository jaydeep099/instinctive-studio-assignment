"use client";

import { CalendarDays, Disc, EllipsisVerticalIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  };
  return (
    <section className="flex flex-row gap-6">
      <div className="w-[796px] h-[450px] rounded-[6px] relative">
        <img src="./camera-1.png" alt="cam1" className="opacity-75" />
        <div className="w-[141px] h-[20px] absolute top-[9px] left-2 bg-black rounded flex flex-col gap-1 py-0.5 pr-2 pl-1.5 justify-between">
          <CalendarDays className="w-3 h-3 absolute top-[3px] left-2 text-gray-500" />
          <p className="w-[111px] h-[16px]  absolute top-2 left-6  font-sans font-medium leading-1 text-center text-[10px] tracking-normal">
            {formatTime(time)}
          </p>
        </div>
        <div className="w-[116px] h-[24px] absolute top-[380px] left-[8px]">
          <div className="w-[116px] h-[24px] gap-1 rounded py-0.5 pr-2 pl-[10px] bg-black flex flex-row justify-evenly">
            <Disc className="text-red-500 h-[14px] w-[14px] relative top-[3px] left-[1px] border-[1px] border-[#EF4444]" />
            <p className="text-white w-[82px] h-[20px] text-sm font-semibold font-[inter] text-center leading-5 tracking-normal">
              Camera - 01
            </p>
          </div>
        </div>
        <div className="flex flex-row w-[253px] h-[84px] absolute top-[320px] left-[535px] gap-[13px] justify-between">
          <div className="flex flex-col w-[120px]  bg-[#0B0B0B] rounded blur-[5%]">
            <div className="flex flex-row justify-between py-[3.2px] pr-[4.8px] pl-[6.4px] bg-[#0B0B0B] rounded blur-[5%] shadow">
              <p className="w-12 h-[10px] font-[Inter] font-normal text-[8px] leading-[9.6px] text-center text-[#D4D4D4]">
                Camera - 02
              </p>
              <EllipsisVerticalIcon className="w-[9.6px] h-[9.6px]" />
            </div>

            <img
              src="./camera-2.png"
              alt="cam-2"
              className="border-t-[0.8px] border-[rgba(255,255,255,0.25)] rounded-b"
            />
          </div>
        </div>

        <div className="flex flex-row w-[253px] h-[84px] absolute top-[320px] left-[535px] gap-[13px] justify-between">
          <div className="flex flex-col w-[120px]  bg-[#0B0B0B] rounded blur-[5%]">
            <div className="flex flex-row justify-between py-[3.2px] pr-[4.8px] pl-[6.4px] bg-[#0B0B0B] rounded blur-[5%] shadow">
              <p className="w-12 h-[10px] font-[Inter] font-normal text-[8px] leading-[9.6px] text-center text-[#D4D4D4]">
                Camera - 02
              </p>
              <EllipsisVerticalIcon className="w-[9.6px] h-[9.6px]" />
            </div>

            <img
              src="./camera-2.png"
              alt="cam-2"
              className="border-t-[0.8px] border-[rgba(255,255,255,0.25)] rounded-b"
            />
          </div>

          <div className="flex flex-col w-[120px]  bg-[#0B0B0B] rounded blur-[5%]">
            <div className="flex flex-row justify-between py-[3.2px] pr-[4.8px] pl-[6.4px] bg-[#0B0B0B] rounded blur-[5%] shadow">
              <p className="w-12 h-[10px] font-[Inter] font-normal text-[8px] leading-[9.6px] text-center text-[#D4D4D4]">
                Camera - 03
              </p>
              <EllipsisVerticalIcon className="w-[9.6px] h-[9.6px]" />
            </div>

            <img
              src="./camera-3.png"
              alt="cam-3"
              className="border-t-[0.8px] border-[rgba(255,255,255,0.25)] rounded-b"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
