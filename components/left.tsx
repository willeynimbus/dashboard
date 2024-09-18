import { ChevronDown, MoreHorizontal, Pin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Left() {
  return (
    <section className="p-4 md:w-[1100px] ">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="w-full h-full  md:h-[136px] flex flex-col gap-[16px] p-3 rounded-xl bg-[#FFEFE7]">
          <h1 className="font-medium text-[#161E54] text-[18px] leading-[28px]">
            Available Position
          </h1>
          <h1 className="font-medium text-[#161E54] text-[36px] leading-[28px]">
            24
          </h1>
          <h1 className="font-normal text-[16px] leading-[24px] text-[#FF5151]">
            4 Urgently needed
          </h1>
        </div>
        <div className="w-full h-full  md:h-[136px] flex flex-col gap-[16px] p-3 rounded-xl bg-[#E8F0FB]">
          <h1 className="font-medium text-[#161E54] text-[18px] leading-[28px]">
            Job Open
          </h1>
          <h1 className="font-medium text-[#161E54] text-[36px] leading-[28px]">
            10
          </h1>
          <h1 className="font-normal text-[16px] leading-[24px] text-[#3786F1]">
            4 Active hiring
          </h1>
        </div>
        <div className="w-full h-full  md:h-[136px] flex flex-col gap-[16px] p-3 rounded-xl bg-[#FDEBF9]">
          <h1 className="font-medium text-[#161E54] text-[18px] leading-[28px]">
            New Employees
          </h1>
          <h1 className="font-medium text-[#161E54] text-[36px] leading-[28px]">
            24
          </h1>
          <h1 className="font-normal text-[16px] leading-[24px] text-[#EE61CF]">
            4 Department
          </h1>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2 mt-2">
        <div className="w-full h-full md:h-[190px] p-3 rounded-xl bg-[#FFFFFF] flex items-center justify-between border-[1px]">
          <div className="w-full md:w-[117px] h-full md:h-[150px] gap-8 flex flex-col">
            <div className="w-full h-full flex flex-col justify-between gap-8">
              <h1 className="font-medium text-[18px] text-[#161E54] text-nowrap leading-[28px]">
                Total Employees
              </h1>
              <h1 className="font-medium text-[48px] text-[#161E54] leading-[28px]">
                216
              </h1>
            </div>
            <div className="w-full md:w-[147px] h-full md:h-[40px] flex flex-col gap-1">
              <h1 className="font-normal text-[12px] leading-[18px] text-[#686868]">
                120 Men
              </h1>
              <h1 className="font-normal text-[12px] leading-[18px] text-[#686868]">
                96 Women
              </h1>
            </div>
          </div>
          <div className="w-full h-full md:w-[115px] md:h-[121px] flex flex-col items-center justify-between">
            <Image
              src={"/Group 4.png"}
              alt="Logo"
              width={115}
              height={121}
              className="mt-10"
            />
            <div className="bg-[#FFEFE7] rounded p-1">
              <h1 className="font-normal text-[12px] leading-6 text-[#303030]">
                +2% Past month
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:h-[190px] p-3 rounded-xl bg-[#FFFFFF] flex items-center justify-between border-[1px]">
          <div className="w-full md:w-[117px] h-full md:h-[150px] gap-8 flex flex-col">
            <div className="w-full h-full flex flex-col justify-between gap-8">
              <h1 className="font-medium text-[18px] text-[#161E54] text-nowrap leading-[28px]">
                Talent Request
              </h1>
              <h1 className="font-medium text-[48px] text-[#161E54] leading-[28px]">
                16
              </h1>
            </div>
            <div className="w-full md:w-[147px] h-full md:h-[40px] flex flex-col gap-1">
              <h1 className="font-normal text-[12px] leading-[18px] text-[#686868]">
                6 Men
              </h1>
              <h1 className="font-normal text-[12px] leading-[18px] text-[#686868]">
                10 Women
              </h1>
            </div>
          </div>
          <div className="w-full h-full md:w-[115px] md:h-[121px] flex flex-col items-center justify-between">
            <Image
              src={"/Group 4 (1).png"}
              alt="Logo"
              width={115}
              height={121}
              className="mt-10"
            />
            <div className="bg-[#FFEFE7] rounded p-1">
              <h1 className="font-normal text-[12px] leading-6 text-[#303030]">
                +5% Past month
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] bg-white mt-3 rounded-xl p-4">
        <div className="w-full h-[28px] flex items-center justify-between">
          <h1 className="font-medium text-[#161E54] text-[16px] leading-[28px]">
            Announcement
          </h1>
          <button className="text-nowrap flex items-center gap-1 font-normal text-[12px] leading-[28px] text-[#686868]">
            Today, 13 Sep 2021 <ChevronDown />
          </button>
        </div>

        <div className="w-full h-[68px]  flex items-center justify-between p-3 gap-[95px] border rounded-xl bg-[#E0E0E0] mt-2">
          <div className="w-full h-full md:w-[405px] md:h-[44px] flex flex-col gap-[6px]">
            <h1 className="font-medium text-[#303030] md:text-[16px] leading-[24px] md:text-nowrap">
              Outing schedule for every departement
            </h1>
            <h1 className="font-medium text-[#303030] text-[10px] leading-[14px]">
              5 Minutes ago
            </h1>
          </div>
          <div className="w-full h-full flex items-center justify-end gap-5">
            <Pin className="rotate-45 text-[#686868]" fill="#686868" />
            <MoreHorizontal className="text-[#686868]" />
          </div>
        </div>
        <div className="w-full h-[68px]  flex items-center justify-between p-3 gap-[95px] border rounded-xl bg-[#E0E0E0] mt-2">
          <div className="w-full h-full md:w-[405px] md:h-[44px] flex flex-col gap-[6px]">
            <h1 className="font-medium text-[#303030] text-[16px] leading-[24px] text-nowrap">
              Meeting HR Deprtment
            </h1>
            <h1 className="font-medium text-[#303030] text-[10px] leading-[14px]">
              Yesterday, 12:30PM
            </h1>
          </div>
          <div className="w-full h-full flex items-center justify-end gap-5">
            <Pin className="rotate-45 text-[#686868]" fill="#686868" />
            <MoreHorizontal className="text-[#686868]" />
          </div>
        </div>
        <div className="w-full h-[68px]  flex items-center justify-between p-3 gap-[35px] border rounded-xl bg-[#E0E0E0] mt-2">
          <div className="w-full h-full md:w-[405px] md:h-[44px] flex flex-col gap-[6px]">
            <h1 className="font-medium text-[#303030] md:text-[16px] leading-[24px] md:text-nowrap">
              IT Department need two more talents for UI/UX Designer Position
            </h1>
            <h1 className="font-medium text-[#303030] text-[10px] leading-[14px]">
              Yesterday, 9:15AM
            </h1>
          </div>
          <div className="w-full h-full flex items-center justify-end gap-5">
            <Pin className="rotate-45 text-[#686868]" fill="#686868" />
            <MoreHorizontal className="text-[#686868]" />
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <h1 className="font-medium text-[#FF5151] text-[14px] leading-[20px]">
            See All Announcement
          </h1>
        </div>
      </div>
    </section>
  );
}
