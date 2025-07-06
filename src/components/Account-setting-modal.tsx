
"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export function DialogCloseContentSetting() {
  const [activeItem, setActiveItem] = useState<string>("Account Details"); // Default active item

  const menuItems = [
    { label: "Account Details", icon: "/dashboardIcons/homeModal.svg", category: "General" },
    { label: "Notifications", icon: "/dashboardIcons/notificationModal.svg", category: "General" },
    { label: "Integrations", icon: "/dashboardIcons/integrationModal.svg", category: "General" },
    { label: "General", icon: "/dashboardIcons/notificationModal.svg", category: "Team" },
    { label: "Members", icon: "/dashboardIcons/memberModal.svg", category: "Team" },
    { label: "Plan & Billing", icon: "/dashboardIcons/integrationModal.svg", category: "Team" },
  ];

  // dropdown of general
  const [selectedTimezone, setSelectedTimezone] = useState<string>(
    "(GMT+02:00) Central European Time (Amsterdam)"
  );

  const timezones = [
    "(GMT+02:00) Central European Time (Amsterdam)",
    "(GMT+06:00) Bangladesh Standard Time (Dhaka)",
    "(GMT+05:30) India Standard Time (Kolkata)",
    "(GMT+00:00) Greenwich Mean Time (London)",
  ];

  const [selectedRole, setSelectedRole] = useState<string>("Admin");
  const [selectedRole1, setSelectedRole1] = useState<string>("Admin");
  const roles = ["Admin", "User", "Moderator", "Guest"];
  const roles1 = ["Admin", "User", "Moderator", "Guest"];

  return (
    <DialogContent className="px-0 py-0 h-[612px] min-w-[880px]">
      <DialogHeader className="h-full">
        <DialogDescription className="h-full rounded-xl">
          <div className="flex justify-between h-full rounded-lg">
            {/* Sidebar */}
            <div className="bg-[#ECECF2] w-[240px] flex flex-col h-full p-4">
              <span className="text-sm font-semibold text-[#8588AB] pb-2">General</span>
              <div className="flex flex-col">
                {menuItems
                  .filter((item) => item.category === "General")
                  .map((item) => {
                    const isActive = activeItem === item.label;
                    return (
                      <button
                        key={item.label}
                        onClick={() => setActiveItem(item.label)}
                        className={`flex items-center gap-2 w-full pl-1 pr-2 py-1 mb-2 rounded-lg text-left
                          ${isActive
                            ? "bg-[#D5D6E2] text-[#22222F] text-sm font-semibold"
                            : "hover:bg-[#D5D6E2] text-sm font-medium text-[#22222F] cursor-pointer"
                          }`}
                      >
                        <Image
                          src={item.icon}
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
              </div>

              <span className="text-sm font-semibold text-[#8588AB] pt-4 mb-2">Team</span>
              <div className="flex flex-col">
                {menuItems
                  .filter((item) => item.category === "Team")
                  .map((item) => {
                    const isActive = activeItem === item.label;
                    return (
                      <button
                        key={item.label}
                        onClick={() => setActiveItem(item.label)}
                        className={`flex items-center gap-2 w-full pl-1 pr-2 py-1 mb-2 rounded-lg text-left
                          ${isActive
                            ? "bg-[#D5D6E2] text-[#22222F] text-sm font-semibold"
                            : "hover:bg-[#D5D6E2] text-sm font-medium text-[#22222F] cursor-pointer"
                          }`}
                      >
                        <Image
                          src={item.icon}
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
              </div>
            </div>
            {/* Main Content Area */}
            <div className="bg-white flex-1 flex flex-col h-full">
              <div className="flex-1 overflow-y-auto py-4">
                <div className="bg-white flex-1 py-4 -pl-3 h-full overflow-y-auto">
                  {
                    // Account Details
                    activeItem === "Account Details" ? (
                      <div className="pl-4">
                        <h1 className="text-xl mb-6 font-semibold text-[#22222F]">
                          Account details
                        </h1>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/dashboardIcons/profileImage.jpg"
                              width={40}
                              height={40}
                              alt="Profile"
                              className="rounded-full"
                            />
                            <div>
                              <h3 className="text-sm font-semibold text-[#22222F]">Ruben Vaalt</h3>
                              <p className="text-sm text-[#8588AB]">Acme Inc.</p>
                            </div>
                          </div>
                          <button
                            className="mr-4 text-[#22222F] text-sm font-semibold hover:bg-transparent cursor-pointer border border-[#D5D6E2] px-3 py-1.5 rounded-lg"
                            style={{
                              boxShadow:
                                "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
                            }}
                          >
                            Sign out
                          </button>

                        </div>
                        <h4 className="text-sm font-semibold mt-6 text-[#22222F]">
                          Delete my account
                        </h4>
                        <div className="flex justify-between items-center">
                          <p className="text-[#8588AB] text-[12px]">
                            Permanently delete this account and data. This action can’t be
                            undone!
                          </p>
                          <button
                            className="text-[#D94F4F] hover:text-[#D94F4F] hover:bg-transparent font-semibold text-sm mr-3 cursor-pointer border border-[#D5D6E2] px-3 py-1.5 rounded-lg"
                          >
                            Delete account
                          </button>

                        </div>
                      </div>
                    ) : activeItem === "Notifications" ? (
                      <div className="pl-5">
                        <h1 className="text-xl mb-6 font-semibold text-[#22222F]">
                          Notifications
                        </h1>
                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <h4 className="text-[#22222F] font-semibold text-sm">
                              Email notifications
                            </h4>
                            <p className="text-[#8588AB] text-[12px]">Receive workflow notifications on your email address</p>
                          </div>
                          <Switch
                            id="email-notifications-1"
                            className="scale-125 mr-5 data-[state=checked]:bg-[#217AFC] cursor-pointer"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-[#22222F] font-semibold text-sm">
                              Mobile notifications
                            </h4>
                            <p className="text-[#8588AB] text-[12px]">Receive workflow notifications on your mobile device</p>
                          </div>
                          <Switch
                            id="workflow-switch"
                            className="scale-125 bg-transparent data-[state=checked]:bg-transparent border border-gray-300 rounded-full cursor-pointer [&>span]:border [&>span]:border-gray-300 cup mr-5"
                          />
                        </div>
                      </div>
                    ) : activeItem === "Integrations" ? (
                      <div>
                        <h1 className="text-xl pl-5 mb-4 font-semibold text-[#22222F]">
                          Integrations
                        </h1>
                        <div>
                          {/* Search */}
                          <div className="relative w-full pl-7">
                            <Image
                              src="/dashboardIcons/search.svg"
                              width={20}
                              height={20}
                              alt="search icon"
                              className="w-6 h-6 text-[#8588AB] absolute left-3 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                              type="text"
                              placeholder="Search Integrations"
                              className="w-full pl-10 pr-4 py-2 -ml-7 focus:outline-none"
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
                              <Image src="/dashboardIcons/slack.svg" width={24} height={24} alt="slack icon"
                                className="border rounded p-1"
                              />
                              <h3 className="font-semibold text-[#22222F] text-sm">Slack</h3>
                            </div>
                            <div>
                              <MdKeyboardArrowRight size={30} className="pr-3 cursor-pointer" />
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
                              <Image src="/dashboardIcons/gmail.svg" width={24} height={24} alt="gmail icon"
                                className="border rounded p-1"
                              />
                              <h3 className="font-semibold text-[#22222F] text-sm">Gmail</h3>
                            </div>
                            <div>
                              <button
                                className="mr-4 px-3 py-1.5 rounded-lg border font-semibold text-sm text-[#22222F] cursor-pointer"
                                style={{
                                  boxShadow:
                                    "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
                                  borderColor: "#D5D6E2",
                                }}
                              >
                                Connect
                              </button>

                            </div>
                          </div>
                          {/* project management */}
                          <div className="border-t border-b">
                            <h1 className="text-[#8588AB] pl-5 my-2 px-2 font-semibold">
                              Project management
                            </h1>
                          </div>
                          <div className="flex justify-between items-center pl-3">
                            <div className="flex items-center gap-3 py-3 px-2">
                              <Image src="/dashboardIcons/notion.svg" width={24} height={24} alt="nation icon" className="border rounded p-1"
                              />
                              <h3 className="font-semibold text-[#22222F] text-sm">Nation</h3>
                            </div>
                            <div>
                              <button
                                className="mr-4 px-3 py-1.5 rounded-lg border font-semibold text-sm text-[#22222F] cursor-pointer"
                                style={{
                                  boxShadow:
                                    "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
                                  borderColor: "#D5D6E2",
                                }}
                              >
                                Connect
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center pl-3">
                            <div className="flex items-center gap-3 py-3 px-2">
                              <Image src="/dashboardIcons/linear.svg" width={24} height={24} alt="linear icon" className="border rounded p-1"
                              />
                              <h3 className="font-semibold text-[#22222F] text-sm">Linear</h3>
                            </div>
                            <div>
                              <button
                                className="mr-4 px-3 py-1.5 rounded-lg border font-semibold text-sm text-[#22222F] cursor-pointer"
                                style={{
                                  boxShadow:
                                    "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
                                  borderColor: "#D5D6E2",
                                }}
                              >
                                Connect
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center pl-3">
                            <div className="flex items-center gap-3 py-3 px-2">
                              <Image src="/dashboardIcons/asana.svg" width={24} height={24} alt="asana icon" className="border rounded p-1"
                              />
                              <h3 className="font-semibold text-[#22222F] text-sm">Asana</h3>
                            </div>
                            <div>
                              <MdKeyboardArrowRight size={30} className="pr-3 cursor-pointer" />
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
                              <Image src="/dashboardIcons/googleDrive.svg" width={24} height={24} alt="asana icon" className="border rounded p-1"
                              />
                              <h3 className="font-semibold text-[#22222F] text-sm">Google Drive</h3>
                            </div>
                            <div>
                              <button
                                className="mr-4 px-3 py-1.5 rounded-lg border font-semibold text-sm text-[#22222F] cursor-pointer"
                                style={{
                                  boxShadow:
                                    "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
                                  borderColor: "#D5D6E2",
                                }}
                              >
                                Connect
                              </button>
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
                              <Image src="/dashboardIcons/googleDrive.svg" width={24} height={24} alt="asana icon" className="border rounded p-1"
                              />
                              <h3 className="font-semibold text-[#22222F] text-sm">Google Calendar</h3>
                            </div>
                            <div>
                              <button
                                className="mr-4 px-3 py-1.5 rounded-lg border font-semibold text-sm text-[#22222F] cursor-pointer"
                                style={{
                                  boxShadow:
                                    "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
                                  borderColor: "#D5D6E2",
                                }}
                              >
                                Connect
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeItem === "General" ? (
                      <div>
                        <h1 className="text-xl pl-5 mb-4 font-semibold text-[#22222F]">
                          General Team Setting
                        </h1>
                        <div>
                          <div className="flex justify-between items-center mx-5">
                            <div>
                              <h3 className="text-[#22222F] text-sm font-semibold">
                                Workspace name
                              </h3>
                              <p className="text-xs text-[#8588AB]">The name of your workspace</p>
                            </div>
                            <div>
                              <input
                                type="text"
                                placeholder="Acme Inc."
                                className="border px-3 pb-1 rounded-sm pr-46 text-[#22222F] "
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center mx-5 mt-6">
                            <div>
                              <h3 className="text-[#22222F] text-sm font-semibold">
                                Workspace time zone
                              </h3>
                              <p className="text-xs text-[#8588AB]">The timezone of your workspace</p>
                            </div>
                            <div className="inline-block">
                              <select
                                value={selectedTimezone}
                                onChange={(e) => setSelectedTimezone(e.target.value)}
                                className="border border-[#D5D6E2] rounded-md px-3 pb-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
                              >
                                {timezones.map((tz, idx) => (
                                  <option key={idx} value={tz}>
                                    {tz}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeItem === "Members" ? (
                      <div className="pl-5">
                        <h1 className="text-xl mb-6 font-semibold text-[#22222F]">
                          Team Members
                        </h1>
                        <button className="bg-[#217AFC] px-3 py-1.5 rounded-sm mb-6 cursor-pointer text-[#FFFFFF]">
                          + Invite team members
                        </button>
                        <div>
                          <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/dashboardIcons/profileImage.jpg"
                                width={40}
                                height={40}
                                alt="Profile"
                                className="rounded-full"
                              />
                              <div>
                                <h3 className="text-lg text-[#22222F]">Ruben Vaalt</h3>
                                <p className="text-sm text-[#8588AB]">Acme Inc.</p>
                              </div>
                            </div>
                            <div className="flex items-center border border-[#D5D6E2] rounded-md px-2 pb-1 mr-5">
                              <select
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                className="text-sm font-medium text-[#22222F] focus:outline-none cursor-pointer"
                              >
                                {roles.map((role, idx) => (
                                  <option key={idx} value={role}>
                                    {role}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center text-sm text-[#22222F] font-semibold">
                                R
                              </div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm text-[#22222F] font-semibold">
                                  rubenvaalt@live.nl
                                </h3>
                                <p className="text-sm text-[#217AFC] font-semibold bg-[#D8EEFF] px-3 py-1 rounded-full">
                                  Invite sent
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center border border-[#D5D6E2] rounded-md px-2 pb-1 mr-5">
                              <select
                                value={selectedRole1}
                                onChange={(e) => setSelectedRole1(e.target.value)}
                                className="text-sm font-medium text-[#22222F] focus:outline-none cursor-pointer"
                              >
                                {roles1.map((role, idx) => (
                                  <option key={idx} value={role}>
                                    {role}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeItem === "Plan & Billing" ? (
                      <div className="pl-5">
                        <h1 className="text-xl mb-4 font-semibold text-[#22222F]">
                          Usage & Billing
                        </h1>
                        <div className="text-center mt-[250px]">
                          <h3 className="text-sm font-semibold text-[#000000]">
                            Have to discuss this page
                          </h3>
                        </div>
                      </div>
                    ) : null
                  }
                </div>
              </div>
              {/* Footer only at the bottom of right side */}
              <div
                className="flex justify-between items-center border-t py-3 px-5"
                style={{
                  boxShadow: "0px 1px 1px 0px rgba(0, 2, 2, 0.08)",
                  borderColor: "#D5D6E2", // optional: if you want consistent border color
                }}
              >
                <div className="flex items-center gap-2">
                  <p className="text-[#8588AB] text-sm font-medium">Need help? Mail</p>
                  <p className="text-[#217AFC] text-sm font-medium">support@namehere.com</p>
                </div>
                <div className="flex items-center text-blue-500 gap-5">
                  <p className="text-sm font-medium text-[#217AFC]">Privacy Policy</p>
                  <p className="text-sm font-medium text-[#217AFC]">Terms of Use</p>
                </div>
              </div>

            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
