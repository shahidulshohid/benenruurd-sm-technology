"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import Link from "next/link";
import { CiHome, CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrIntegration } from "react-icons/gr";
import { MdKeyboardArrowRight, MdOutlineCardMembership } from "react-icons/md";
import { IoPlanetSharp } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Switch } from "@/components/ui/switch";
import { LuCalendarFold } from "react-icons/lu";
import { FaGoogleDrive } from "react-icons/fa";
import { SiAsana, SiGmail, SiLinear, SiNationalrail } from "react-icons/si";
import { PiSlackLogoLight } from "react-icons/pi";

export function DialogCloseContentSetting() {
  const [activeItem, setActiveItem] = useState<string>("Account Details"); // Default active item

  const menuItems = [
    { label: "Account Details", icon: CiHome, category: "General" },
    {
      label: "Notifications",
      icon: IoMdNotificationsOutline,
      category: "General",
    },
    { label: "Integrations", icon: GrIntegration, category: "General" },
    { label: "General", icon: IoMdNotificationsOutline, category: "Team" },
    { label: "Members", icon: MdOutlineCardMembership, category: "Team" },
    { label: "Plan & Billing", icon: IoPlanetSharp, category: "Team" },
  ];

  return (
    <DialogContent className="px-0 py-0 h-[612px] min-w-[840px]">
      <DialogHeader className="h-full">
        <DialogDescription className="h-full rounded-xl">
          <div className="flex justify-between h-full rounded-lg">
            {/* Sidebar */}
            <div className="bg-[#ECECF2] w-1/4 p-6 flex flex-col gap-4 h-full">
              <span className="text-sm font-semibold text-gray-600">
                General
              </span>
              <div className="flex flex-col gap-2">
                {menuItems
                  .filter((item) => item.category === "General")
                  .map((item) => (
                    <Link
                      href="#"
                      key={item.label}
                      onClick={() => setActiveItem(item.label)}
                      className="flex items-center"
                    >
                      <item.icon size={15} />
                      <button
                        className={`text-left text-gray-800 px-2 py-1 rounded w-full ${
                          activeItem === item.label
                            ? "bg-blue-200"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ))}
              </div>

              <span className="text-sm font-semibold text-gray-600 mt-4">
                Team
              </span>
              <div className="flex flex-col gap-2">
                {menuItems
                  .filter((item) => item.category === "Team")
                  .map((item) => (
                    <Link
                      href="#"
                      key={item.label}
                      onClick={() => setActiveItem(item.label)}
                      className="flex items-center"
                    >
                      <item.icon size={15} />
                      <button
                        className={`text-left text-gray-800 px-2 py-1 rounded w-full ${
                          activeItem === item.label
                            ? "bg-blue-200"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white flex-1 py-4 -pl-3 h-full">
              {
                // account details
                (activeItem === "Account Details" && (
                  <div className="pl-4">
                    <h1 className="text-xl mb-4 font-semibold text-[#22222F]">
                      Account details
                    </h1>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/dashboardIcons/profileImg.png"
                          width={40}
                          height={40}
                          alt="Profile"
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg text-[#22222F]">
                            Ruben Vaalt
                          </h3>
                          <p className="text-sm">Acme Inc.</p>
                        </div>
                      </div>
                      <Button variant="outline" className="mr-4">
                        Sign out
                      </Button>
                    </div>
                    <h4 className="text-sm font-semibold mt-3 text-[#22222F]">
                      Delete my account
                    </h4>
                    <div className="flex justify-between items-center">
                      <p>
                        Permanently delete this account and data. This action
                        can’t be undone!
                      </p>
                      <Button
                        variant="outline"
                        className="text-red-500 hover:text-red-500 mr-3"
                      >
                        Delete account
                      </Button>
                    </div>
                  </div>
                )) ||
                  // notifications
                  (activeItem === "Notifications" && (
                    <div className="pl-5">
                      <h1 className="text-xl mb-4 font-semibold text-[#22222F]">
                        Notifications
                      </h1>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <h4 className="text-[#22222F] font-semibold">
                            Email notifications
                          </h4>
                          <p>
                            Receive workflow notifications on your email address
                          </p>
                        </div>
                        <Switch id="airplane-mode" className="mr-5" />
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-[#22222F] font-semibold">
                            Email notifications
                          </h4>
                          <p>
                            Receive workflow notifications on your email address
                          </p>
                        </div>
                        <Switch id="airplane-mode" className="mr-5" />
                      </div>
                    </div>
                  )) ||
                  // integrations
                  (activeItem === "Integrations" && (
                    <div>
                      <h1 className="text-xl pl-5 mb-4 font-semibold text-[#22222F]">
                        Notifications
                      </h1>
                      <div>
                        {/* Search */}
                        <div className="relative w-full pl-5">
                          <CiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Search Integrations"
                            className="w-full pl-10 pr-4 py-2 focus:outline-none"
                          />
                        </div>
                        {/* communication */}
                        <div className="border-t border-b">
                          <h1 className="text-[#8588AB] pl-5 my-2 px-2 font-semibold">
                            Communication
                          </h1>
                        </div>
                        <div className="flex justify-between items-center pl-3">
                          <div className="flex items-center gap-3 py-3 px-2">
                            <PiSlackLogoLight
                              size={25}
                              className="text-black border rounded p-1"
                            />
                            <h3 className="font-semibold">Slack</h3>
                          </div>
                          <div>
                            <MdKeyboardArrowRight size={30} className="pr-3" />
                          </div>
                        </div>
                        {/* Email */}
                        <div className="border-t border-b">
                          <h1 className="text-[#8588AB] pl-5 my-2 px-2 font-semibold">
                            E-mail
                          </h1>
                        </div>
                        <div className="flex justify-between items-center pl-3">
                          <div className="flex items-center gap-3 py-3 px-2">
                            <SiGmail
                              size={25}
                              className="text-black border rounded p-1"
                            />
                            <h3 className="font-semibold">Gmail</h3>
                          </div>
                          <div>
                            <Button variant="outline" className="mr-5">
                              Connect
                            </Button>
                          </div>
                        </div>
                        {/* project management */}
                        <div className="border-t border-b">
                          <h1 className="text-[#8588AB] pl-5 my-2 px-2 font-semibold">
                            Project manangement
                          </h1>
                        </div>
                        <div className="flex justify-between items-center pl-3">
                          <div className="flex items-center gap-3 py-3 px-2">
                            <SiNationalrail
                              size={25}
                              className="text-black border rounded p-1"
                            />
                            <h3 className="font-semibold">Nation</h3>
                          </div>
                          <div>
                            <Button variant="outline" className="mr-5">
                              Connect
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pl-3">
                          <div className="flex items-center gap-3 py-3 px-2">
                            <SiLinear
                              size={25}
                              className="text-black border rounded p-1"
                            />
                            <h3 className="font-semibold">Linear</h3>
                          </div>
                          <div>
                            <Button variant="outline" className="mr-5">
                              Connect
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pl-3">
                          <div className="flex items-center gap-3 py-3 px-2">
                            <SiAsana
                              size={25}
                              className="text-black border rounded p-1"
                            />
                            <h3 className="font-semibold">Asana</h3>
                          </div>
                          <div>
                            <MdKeyboardArrowRight size={30} className="pr-3" />
                          </div>
                        </div>
                        {/* file store */}
                        <div className="border-t border-b">
                          <h1 className="text-[#8588AB] pl-5 my-2 px-2 font-semibold">
                            File Store
                          </h1>
                        </div>
                        <div className="flex justify-between items-center pl-3">
                          <div className="flex items-center gap-3 py-3 px-2">
                            <FaGoogleDrive
                              size={25}
                              className="text-black border rounded p-1"
                            />
                            <h3 className="font-semibold">Google Drive</h3>
                          </div>
                          <div>
                            <Button variant="outline" className="mr-5">
                              Connect
                            </Button>
                          </div>
                        </div>
                        {/* calendar */}
                        <div>
                          <h1 className="text-[#8588AB] pl-5 my-2 px-2 font-semibold">
                            Calendar
                          </h1>
                        </div>
                        <div className="flex justify-between items-center pl-3 mb-4">
                          <div className="flex items-center gap-3 py-3 px-2">
                            <LuCalendarFold
                              size={25}
                              className="text-black border rounded p-1"
                            />
                            <h3 className="font-semibold">Google Calender</h3>
                          </div>
                          <div>
                            <Button variant="outline" className="mr-5">
                              Connect
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-t">
                          <div className="flex items-center gap-2 pl-5 mt-3">
                            <p>Need help? Mail</p>
                            <p className="text-blue-500">
                              {" "}
                              support@namehere.com
                            </p>
                          </div>
                          <div className="flex items-center text-blue-500 gap-5 pr-5 mt-3">
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) ||
                  // general
                  (activeItem === "General" && (
                    <div className="pl-5">
                      <h1 className="text-xl mb-4 font-semibold text-[#22222F]">
                        General Team Setting
                      </h1>
                    </div>
                  )) ||
                  (activeItem === "Members" && (
                    <div className="pl-5">
                      <h1 className="text-xl mb-4 font-semibold text-[#22222F]">
                        Team Members
                      </h1>
                    </div>
                  )) ||
                  (activeItem === "Plan & Billing" && (
                    <div className="pl-5">
                      <h1 className="text-xl mb-4 font-semibold text-[#22222F]">
                        Plan & Billing
                      </h1>
                    </div>
                  ))
              }
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
