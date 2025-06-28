"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrIntegration } from "react-icons/gr";
import { MdOutlineCardMembership } from "react-icons/md";
import { IoPlanetSharp } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Switch } from "@/components/ui/switch"

export function DialogCloseContentSetting() {
  const [activeItem, setActiveItem] = useState("Account Details"); // Default active item

  const menuItems = [
    { label: "Account Details", icon: CiHome, category: "General" },
    { label: "Notifications", icon: IoMdNotificationsOutline, category: "General" },
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
              <span className="text-sm font-semibold text-gray-600">General</span>
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
                        className={`text-left text-gray-800 px-2 py-1 rounded w-full ${activeItem === item.label ? "bg-blue-200" : "hover:bg-gray-200"
                          }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ))}
              </div>

              <span className="text-sm font-semibold text-gray-600 mt-4">Team</span>
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
                        className={`text-left text-gray-800 px-2 py-1 rounded w-full ${activeItem === item.label ? "bg-blue-200" : "hover:bg-gray-200"
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
                activeItem === "Account Details" && (
                  <div className="pl-4">
                    <h1 className="text-xl mb-4 font-semibold text-[#22222F]">Account details</h1>
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
                          <h3 className="text-lg text-[#22222F]">Ruben Vaalt</h3>
                          <p className="text-sm">Acme Inc.</p>
                        </div>
                      </div>
                      <Button variant="outline" className="mr-4">Sign out</Button>
                    </div>
                    <h4 className="text-sm font-semibold mt-3 text-[#22222F]">Delete my account</h4>
                    <div className="flex justify-between items-center">
                      <p>
                        Permanently delete this account and data. This action can’t be undone!
                      </p>
                      <Button variant="outline" className="text-red-500 hover:text-red-500 mr-3">Delete account</Button>
                    </div>
                  </div>
                ) ||
                activeItem === "Notifications" && (
                  <div className="pl-5">
                    <h1 className="text-xl mb-4 font-semibold text-[#22222F]">Notifications</h1>
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <h4 className="text-[#22222F] font-semibold">Email notifications</h4>
                        <p>Receive workflow notifications on your email address</p>
                      </div>
                      <Switch id="airplane-mode" className="mr-5" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-[#22222F] font-semibold">Email notifications</h4>
                        <p>Receive workflow notifications on your email address</p>
                      </div>
                      <Switch id="airplane-mode" className="mr-5" />
                    </div>
                  </div>
                ) ||
                activeItem === "Itegrations" && (
                  <h1>Itegrations</h1>
                )
              }
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}