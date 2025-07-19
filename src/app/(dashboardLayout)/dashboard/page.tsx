
"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DialogCloseContentSetting } from "@/components/Account-setting-modal";
import { Dialog } from "@/components/ui/dialog";

export default function AppSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Sidebar>
      <SidebarContent className="bg-[#0D0D17] flex flex-col justify-between min-h-full p-4">
        {/* Top Section */}
        <div>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Profile */}
                <div className="flex justify-between items-center mb-3">
                  <Link href="/">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/dashboardIcons/profileImage.jpg"
                        width={40}
                        height={40}
                        alt="Profile"
                        className="rounded-full"
                      />
                      <div className="text-white">
                        <h3 className="text-sm font-semibold">Ruben Vaalt</h3>
                        <p className="text-xs text-[#D5D6E2]">Acme Inc.</p>
                      </div>
                    </div>
                  </Link>
                  <div className="text-white text-xl">
                    <RiArrowDropDownLine />
                  </div>
                </div>

                <Separator className="bg-[#242432]" />

                {/* New Workflow Button */}
                <div
                  className="bg-[#217AFC] hover:bg-[#217AFC] border border-blue-700 flex justify-center mt-4 rounded-lg"
                  style={{
                    boxShadow:
                      "0px 1px 1px 0px rgba(100, 102, 241, 0.12), 0px 2px 2px 0px rgba(100, 102, 241, 0.12)",
                  }}
                >
                  <Link href="/dashboard/workflow">
                    <button className="text-sm py-1.5 font-semibold text-[#FFFFFF] flex items-center gap-2 cursor-pointer">
                      <HiPlus /> New Workflow
                    </button>
                  </Link>
                </div>


                {/* Overview */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Overview</p>
                <div>
                  <button
                    className={`flex w-full items-center gap-2 rounded-sm px-2 py-1.5 transition-colors ${pathname === "/dashboard/dashboard"
                      ? "bg-[#F7F7F81A] text-white"
                      : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                      }`}
                  >
                    <Link href="/dashboard/dashboard" className="flex items-center gap-2 w-full">
                      <Image src="/dashboardIcons/home.svg" width={20} height={20} alt="" />
                      <span className="text-sm">Dashboard</span>
                    </Link>
                  </button>
                </div>

                {/* Manage */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Manage</p>
                <div className="space-y-2">
                  {/* Workflow */}
                  <button
                    className={`flex items-center w-full gap-2 rounded-sm px-2 py-1.5 transition-colors ${pathname === "/dashboard/workflow"
                      ? "bg-[#F7F7F81A] text-white"
                      : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                      }`}
                  >
                    <Link href="/dashboard/workflow" className="flex items-center gap-2 w-full">
                      <Image src="/dashboardIcons/workflow.svg" width={20} height={20} alt="Workflow" />
                      <span className="text-sm">Workflow</span>
                    </Link>
                  </button>

                  {/* Runs */}
                  <button
                    className={`flex items-center w-full gap-2 rounded-sm px-2 py-1.5 transition-colors ${pathname === "/dashboard/runsoverview"
                      ? "bg-[#F7F7F81A] text-white"
                      : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                      }`}
                  >
                    <Link href="/dashboard/runsoverview" className="flex items-center gap-2 w-full">
                      <Image src="/dashboardIcons/runs.svg" width={20} height={20} alt="Runs" />
                      <span className="text-sm">Runs</span>
                    </Link>
                  </button>

                  {/* Integrations */}
                  <button
                    onClick={() => setOpen(true)}
                    className={`flex items-center w-full gap-2 rounded-sm px-2 py-1.5 transition-colors cursor-pointer ${pathname === "/dashboard/integration"
                        ? "bg-[#F7F7F81A] text-white"
                        : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                      }`}
                  >
                    <Image
                      src="/dashboardIcons/integrations.svg"
                      width={20}
                      height={20}
                      alt="Integrations"
                    />
                    <span className="text-sm">Integrations</span>
                  </button>


                  {/* Knowledge */}
                  <button
                    className={`flex items-center w-full gap-2 rounded-sm px-2 py-1.5 transition-colors ${pathname === "/dashboard/knowledgeoverview"
                      ? "bg-[#F7F7F81A] text-white"
                      : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                      }`}
                  >
                    <Link href="/dashboard/knowledgeoverview" className="flex items-center gap-2 w-full">
                      <Image src="/dashboardIcons/knowledge.svg" width={20} height={20} alt="Knowledge" />
                      <span className="text-sm">Knowledge</span>
                    </Link>
                  </button>
                </div>


                {/* Explore */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Explore</p>
                {/* Templates */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className={`flex items-center gap-2 rounded-sm px-2 py-1.5 transition-color ${pathname === "/dashboard/template"
                      ? "bg-[#F7F7F81A] text-white"
                      : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                      }`}
                  >
                    <Link href="/dashboard/template" className="flex items-center gap-2 w-full">
                      <Image src="/dashboardIcons/templates.svg" width={20} height={20} alt="Templates" />
                      <span className="text-sm">Templates</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Documentation */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className={`flex items-center gap-2 rounded-sm px-2 py-1.5 transition-color ${pathname === "/dashboard/documentation"
                      ? "bg-[#F7F7F81A] text-white"
                      : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                      }`}
                  >
                    <Link href="/dashboard/documentation" className="flex items-center gap-2 w-full">
                      <Image src="/dashboardIcons/documentaionDash.svg" width={20} height={20} alt="Documentation" />
                      <span className="text-sm">Documentation</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Bottom Section */}
        <div className="pt-4">
          <Separator className="bg-[#242432] mb-4" />
          <SidebarMenu>
            {/* Professional and Settings */}
            <div className="flex justify-between items-center text-white mb-2">
              <span className="text-sm font-semibold">Professional</span>
              <button onClick={() => setOpen(true)} className="cursor-pointer">
                <Image src="/dashboardIcons/settings.svg" width={20} height={20} alt="Setting icon" />
              </button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogCloseContentSetting />
              </Dialog>
            </div>

            {/* Interactions and Count */}
            <div className="flex justify-between items-center text-[#D5D6E2] text-sm mb-1">
              <span>Interactions</span>
              <span>134 / 750</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#242432] h-1 rounded mb-2">
              <div className="bg-blue-500 h-1 rounded" style={{ width: "30%" }} />
            </div>

            {/* Bottom Note */}
            <p className=" text-[#8588AB] text-xs">
              Next refresh in 28 days
            </p>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

