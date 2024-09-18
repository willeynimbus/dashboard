import { ChevronDown, MoreHorizontal } from "lucide-react";
import React from "react";

export default function Right() {
  return (
    <section className="flex flex-col items-center justify-center mr-2 gap-2">
      <div className="md:w-[427px] w-full h-full">
        <div className="bg-[#1B204A]  p-[10px] gap-[10px] rounded-t-xl">
          <h1 className="text-white font-medium text-[18px] leading-[28px]">
            Recently Activity
          </h1>
        </div>
        <div className="w-full h-full md:w-[427px] bg-[#161E54] rounded-b-xl mr-2 flex flex-col items-center gap-5 p-4 justify-center text-white">
          <div className="w-full h-full flex flex-col gap-[6px]">
            <h1 className="font-medium text-[10px] leading-[11.72px] text-white">
              10.40 AM, Fri 10 Sept 2021
            </h1>
            <h1 className="font-medium text-[18px] leading-[28px] text-white">
              You Posted a New Job
            </h1>
            <h1 className="font-normal text-[14px] leading-[20px] text-white">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </h1>
          </div>
          <div className="w-full h-full flex items-center justify-between">
            <h1 className="font-medium text-[14px] leading-[21px]">
              Today you makes 12 Activity
            </h1>
            <button className="bg-[#FF5151] text-white p-4 rounded-lg">
              <h1 className="text-white font-medium text-[14px] leading-[21px]">
                See All Activity
              </h1>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:w-[427px] bg-white border-1 p-[10px] rounded-xl">
        <div className="w-full h-full flex items-center justify-between">
          <h1 className="font-medium text-[18px] leading-[28px]">
            Upcoming Schedule
          </h1>
          <div>
            <h1 className="flex items-center justify-center gap-2 text-[#686868] text-[12px] leading-[28px]">
              Today, 13 Sep 2021 <ChevronDown />
            </h1>
          </div>
        </div>
        <h1 className="font-medium text-[12px] text-[#686868] leading-[28px]">
          Priority
        </h1>
        <div className="w-full h-full flex items-center justify-between rounded-xl border p-3">
          <div className="w-full h-full flex flex-col gap-1   p-1">
            <h1 className="font-medium text-[18px] text-[#686868] leading-[28px]">
              Review candidate application
            </h1>
            <h1 className="font-medium text-[12px] text-[#686868] leading-[28px]">
              Today - 11:30 AM
            </h1>
          </div>
          <div className="w-6 h-6">
            <MoreHorizontal className="text-[#686868]" />
          </div>
        </div>
        <h1 className="font-medium text-[12px] text-[#686868] leading-[28px]">
          Other
        </h1>
        <div className="w-full h-full flex items-center justify-between rounded-xl border p-3">
          <div className="w-full h-full flex flex-col gap-1   p-1">
            <h1 className="font-medium text-[18px] text-[#686868] leading-[28px]">
              Interview with Candidate
            </h1>
            <h1 className="font-medium text-[12px] text-[#686868] leading-[28px]">
              Today - 10:30 AM
            </h1>
          </div>
          <div className="w-6 h-6">
            <MoreHorizontal className="text-[#686868]" />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-between rounded-xl mt-2 border p-3">
          <div className="w-full h-full flex flex-col gap-1   p-1">
            <h1 className="font-medium text-[18px] text-[#686868] leading-[28px]">
              Short Meeting with product designer from IT department
            </h1>
            <h1 className="font-medium text-[12px] text-[#686868] leading-[28px]">
              Today - 09:15 AM
            </h1>
          </div>
          <div className="w-6 h-6">
            <MoreHorizontal className="text-[#686868]" />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="font-medium text-[14px] text-[#FF5151] leading-[20px]">
            Create a new schedule
          </h1>
        </div>
      </div>
    </section>
  );
}
