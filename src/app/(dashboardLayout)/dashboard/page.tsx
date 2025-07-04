
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
import { Settings } from "lucide-react";
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
                      src="/dashboardIcons/profileImg.png"
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
                <div>
                  <div className="bg-blue-500 hover:bg-blue-500 flex justify-center mt-4 rounded-sm">
                    <Link href="/dashboard/workflow">
                      <button className="text-sm py-1.5 font-semibold rounded-sm text-white flex items-center gap-1 cursor-pointer">
                        <HiPlus /> New Workflow
                      </button>
                    </Link>
                  </div>
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
                      <Image src="/dashboardIcons/home.svg" width={20} height={20} alt=""/>
                      <span className="text-sm">Dashboard</span>
                    </Link>
                  </button>
                </div>

                {/* Manage */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Manage</p>
                {[
                  { label: "Workflow", icon: "/dashboardIcons/workflow.svg", href: "/dashboard/workflow" },
                  { label: "Runs", icon: "/dashboardIcons/runs.png", href: "/dashboard/runsoverview" },
                  { label: "Integrations", icon: "/dashboardIcons/integrationsDash.png", href: "/dashboard/integration" },
                  { label: "Knowledge", icon: "/dashboardIcons/knowledge.png", href: "/dashboard/knowledgeoverview" },
                ].map(({ label, icon, href }) => (
                  <div key={label}>
                    <button
                      className={`flex items-center w-full gap-2 rounded-sm px-2 py-1.5 transition-colors ${pathname === href
                        ? "bg-[#F7F7F81A] text-white"
                        : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                        }`}
                    >
                      <Link href={href} className="flex items-center gap-2 w-full">
                        <Image src={icon} width={20} height={20} alt={label} />
                        <span className="text-sm">{label}</span>
                      </Link>
                    </button>
                  </div>
                ))}

                {/* Explore */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Explore</p>
                {[
                  { label: "Templates", icon: "/dashboardIcons/templates.png", href: "/dashboard/template" },
                  { label: "Documentation", icon: "/dashboardIcons/documentation.png", href: "/dashboard/documentation" },
                ].map(({ label, icon, href }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton
                      className={`flex items-center gap-2 rounded-sm px-2 py-1.5 transition-colors ${pathname === href
                        ? "bg-[#F7F7F81A] text-white"
                        : "text-[#D5D6E2] hover:bg-[#F7F7F81A] hover:text-white focus:bg-[#F7F7F81A] focus:text-white"
                        }`}
                    >
                      <Link href={href} className="flex items-center gap-2 w-full">
                        <Image src={icon} width={20} height={20} alt={label} />
                        <span className="text-sm">{label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
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
              <Settings onClick={() => setOpen(true)} size={18} className="cursor-pointer"/>
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

