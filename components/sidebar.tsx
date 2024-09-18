"use client";
import React, { useState } from "react";
import {
  Bell,
  ChevronDown,
  Circle,
  Menu,
  MessageSquareMore,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";
import Left from "./left";
import Right from "./right";

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-[242px]">
        <div className="flex flex-col items-center justify-center h-[75px]">
          <div className="w-[169px] h-[64px] p-[10px] gap-[10px] flex items-center justify-center">
            <Image
              src={"/Group 2770.png"}
              alt="Logo"
              width={36.82}
              height={36.81}
            />
            <Image
              src={"/Group 2771.png"}
              alt="Logo"
              width={96.18}
              height={19.87}
            />
          </div>
        </div>
        <div className="w-[242px] h-[318px] flex flex-col items-center justify-center">
          <div className="w-[242px] h-[38px] flex justify-end">
            <div className="w-[212px] h-[18px] flex items-start justify-start">
              <h1 className="font-medium text-[#686868] text-[12px] leading-[18px]">
                MAIN MENU
              </h1>
            </div>
          </div>
          <div className="w-[242px] h-[56px] gap-6 flex items-center justify-center">
            <Image
              src={"/Vector.png"}
              alt="Logo"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <h1 className="font-medium text-[#FF5151] text-[16px] leading-[18px]">
              Dashboard
            </h1>
          </div>
          <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
            <Image
              src={"/Group 7.png"}
              alt="Logo"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <div className="w-[135px] h-6 ">
              <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                Recruitment
              </h1>
            </div>
          </div>
          <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
            <Image
              src={"/Vector (3).png"}
              alt="Logo"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <div className="w-[135px] h-6 ">
              <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                Schedule
              </h1>
            </div>
          </div>
          <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
            <Image
              src={"/Group.png"}
              alt="Logo"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <div className="w-[135px] h-6 ">
              <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                Employee
              </h1>
            </div>
          </div>
          <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
            <Image
              src={"/Vector (2).png"}
              alt="Logo"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <div className="w-[135px] h-6 ">
              <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                Department
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[242px] h-[150px] flex flex-col items-center justify-center">
          <div className="w-[242px] h-[56px] gap-[10px] flex justify-end">
            <div className="w-[212px] h-[18px] ">
              <h1 className="font-medium text-[#686868] text-[12px] leading-[18px]">
                OTHER
              </h1>
            </div>
          </div>
          <div className="w-[242px] h-[56px] gap-3 flex items-center justify-center">
            <Image
              src={"/Vector (1).png"}
              alt="Logo"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <h1 className="font-normal text-base leading-[18px] text-[#686868]">
              Support
            </h1>
          </div>
          <div className="w-[242px] h-[56px] gap-3 flex items-center justify-center">
            <Image
              src={"/Group (1).png"}
              alt="Logo"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <h1 className="font-normal text-base leading-[18px] text-[#686868]">
              Settings
            </h1>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center justify-between w-full h-[50px]">
              <div className="w-full h-full flex items-center justify-start">
                <div className="hidden md:block ">
                  <div className="relative w-full h-[44px]">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full h-full border-[1px] rounded p-4 pl-10"
                    />
                    <div className="absolute top-0 right-0 h-full flex items-center pr-4">
                      <Search className="h-6 w-6 text-[#B2B2B2]" />
                    </div>
                  </div>
                </div>
                <div className="md:hidden ml-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder=""
                      className="w-full h-full rounded p-4 pl-10"
                    />
                    <div className="absolute top-0 left-0 h-full flex items-center pr-4">
                      <Search className="h-6 w-6 text-[#B2B2B2]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-[364px] p-6 gap-[30px] flex items-center justify-center">
                <div className="w-6 h-6 relative">
                  <Bell fill="#B2B2B2" className="text-[#B2B2B2]" />
                  <Circle
                    className="absolute top-0 right-0 text-white w-[10px] h-[10px]"
                    fill="#FF5151"
                  />
                </div>
                <div className="w-6 h-6">
                  <MessageSquareMore fill="#B2B2B2" className="text-white" />
                </div>
                <div className="flex items-center justify-center w-full h-[42px] gap-3">
                  <Image
                    src={"/unsplash.png"}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="hidden md:block text-nowrap font-medium text-[16px] leading-[18px]">
                    Admirra John
                  </div>
                  <div>
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-black" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-[75px]">
              <div className="w-[169px] h-[64px] p-[10px] gap-[10px] flex items-center justify-center">
                <Image
                  src={"/Group 2770.png"}
                  alt="Logo"
                  width={36.82}
                  height={36.81}
                />
                <Image
                  src={"/Group 2771.png"}
                  alt="Logo"
                  width={96.18}
                  height={19.87}
                />
              </div>
            </div>
            <div className="w-[242px] h-[318px] flex flex-col items-center justify-center">
              <div className="w-[242px] h-[38px] flex justify-end">
                <div className="w-[212px] h-[18px] flex items-start justify-start">
                  <h1 className="font-medium text-[#686868] text-[12px] leading-[18px]">
                    MAIN MENU
                  </h1>
                </div>
              </div>
              <div className="w-[242px] h-[56px] gap-6 flex items-center justify-center">
                <Image
                  src={"/Vector.png"}
                  alt="Logo"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <h1 className="font-medium text-[#FF5151] text-[16px] leading-[18px]">
                  Dashboard
                </h1>
              </div>
              <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
                <Image
                  src={"/Group 7.png"}
                  alt="Logo"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <div className="w-[135px] h-6 ">
                  <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                    Recruitment
                  </h1>
                </div>
              </div>
              <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
                <Image
                  src={"/Vector (3).png"}
                  alt="Logo"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <div className="w-[135px] h-6 ">
                  <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                    Schedule
                  </h1>
                </div>
              </div>
              <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
                <Image
                  src={"/Group.png"}
                  alt="Logo"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <div className="w-[135px] h-6 ">
                  <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                    Employee
                  </h1>
                </div>
              </div>
              <div className="w-[242px] h-[56px] gap-6 flex items-center justify-end">
                <Image
                  src={"/Vector (2).png"}
                  alt="Logo"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <div className="w-[135px] h-6 ">
                  <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                    Department
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[242px] h-[150px] flex flex-col items-center justify-center">
              <div className="w-[242px] h-[56px] gap-[10px] flex justify-end">
                <div className="w-[212px] h-[18px] ">
                  <h1 className="font-medium text-[#686868] text-[12px] leading-[18px]">
                    OTHER
                  </h1>
                </div>
              </div>
              <div className="w-[242px] h-[56px] gap-3 flex items-center justify-center">
                <Image
                  src={"/Vector (1).png"}
                  alt="Logo"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                  Support
                </h1>
              </div>
              <div className="w-[242px] h-[56px] gap-3 flex items-center justify-center">
                <Image
                  src={"/Group (1).png"}
                  alt="Logo"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <h1 className="font-normal text-base leading-[18px] text-[#686868]">
                  Settings
                </h1>
              </div>
            </div>
          </div>
        )}

        {/* Page content */}
        <main className="">
          <div className="w-full h-[62px] flex items-center justify-start p-[10px] ">
            <h1 className="font-medium text-[#161E54] text-[20px] md:text-[24px] leading-[42px]">
              Dashboard
            </h1>
          </div>
          <div className="md:flex items-center justify-between gap-5">
            <Left />
            <Right />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
