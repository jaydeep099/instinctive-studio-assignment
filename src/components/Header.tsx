"use client";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed w-full h-[76px] border-b-[1px] flex flex-row items-center justify-between pt-4 pb-3 px-6">
      <div className="flex flex-col h-[26px] gap-2">
        <div className="flex flex-row h-[26px] gap-2.5">
          <div className="h-[26px] w-5 relative">
            <div className="h-[21px] w-[21px]">
              <img src="./M.png" />
              <div className="w-[10px] h-[16px] absolute top-[10px] left-[5px]">
                <img src="./small-M.png" />
              </div>
            </div>
          </div>
          <div className="w-[90px] h-[19px]">
            <span className="text-[16px] text-center leading-[120%]">
              MANDLAC
            </span>
            <span className="text-[16px] text-center font-extrabold leading-[120%]">
              X
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[540px] h-9 gap-4">
        <button className="flex flex-row w-[110px] h-[36px] rounded-[6px] py-2.5 px-3 gap-[6px]">
          <div className="w-4 h-4">
            <img
              src="./dashboard.svg"
              alt="dashboard"
              className="w-3 h-3 top-0.5 left-0.5"
            />
          </div>
          <div className="w-12 h-[14px] text-[#ffffff] font-bold text-[12px] leading-[120%] text-center tracking-[-1%]">
            Dashboard
          </div>
        </button>
        <button className="flex flex-row w-[98px] h-[36px] rounded-[6px] py-2.5 px-3 gap-[6px]">
          <div className="w-4 h-4">
            <img
              src="./cctv.svg"
              alt="cctv"
              className="w-3 h-3 top-0.5 left-0.5"
            />
          </div>
          <div className="w-[52px] h-[14px] text-[#ffffff] font-bold text-[12px] leading-[120%] text-center tracking-[-1%]">
            Camera
          </div>
        </button>
        <button className="flex flex-row w-[89px] h-[36px] rounded-[6px] py-2.5 px-3 gap-[6px]">
          <div className="w-4 h-4">
            <img
              src="./scenes.svg"
              alt="scenes"
              className="w-3 h-3 top-0.5 left-0.5"
            />
          </div>
          <div className="w-[43px] h-[14px] text-[#ffffff] font-bold text-[12px] leading-[120%] text-center tracking-[-1%]">
            Scenes
          </div>
        </button>
        <button className="flex flex-row w-[100px] h-[36px] rounded-[6px] py-2.5 px-3 gap-[6px]">
          <div className="w-4 h-4">
            <img
              src="./incidents.svg"
              alt="incidents"
              className="w-[14px] h-3 top-0.5 left-[1px]"
            />
          </div>
          <div className="w-[54px] h-[14px] text-[#ffffff] font-bold text-[12px] leading-[120%] text-center tracking-[-1%]">
            Incidents
          </div>
        </button>
        <button className="flex flex-row w-[79px] h-[36px] rounded-[6px] py-2.5 px-3 gap-[6px]">
          <div className="w-4 h-4">
            <img
              src="./users.svg"
              alt="users"
              className="w-[13px] h-[10px] top-[2.67px] left-[1.33px]"
            />
          </div>
          <div className="w-[33px] h-[14px] text-[#ffffff] font-bold text-[12px] leading-[120%] text-center tracking-[-1%]">
            Users
          </div>
        </button>
      </div>
      <div className="flex flex-row w-[200px] h-[48px] gap-2 p-2 rounded-md">
        <div className="flex flex-row w-8 h-8">
          <img
            src="./user-avatar.svg"
            alt="user-avatar"
            className="w-8 h-8 opacity-[1] rounded-full"
          />
        </div>
        <div className="flex flex-col w-[120px] h-[32px] gap-[2]">
          <p className="w-[124px] h-[14px] font-sans font-semibold text-sm tracking-normal leading-[100%]">
            Mohammed Ajhas
          </p>
          <p className="w-[124px] h-[16px] font-sans font-normal text-xs leading-4 tracking-normal">
            ajhas@mandlac.com
          </p>
        </div>
        <div className="w-4 h-4 relative">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
