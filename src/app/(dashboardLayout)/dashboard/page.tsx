// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
// import Image from "next/image";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { Separator } from "@/components/ui/separator";
// import { HiPlus } from "react-icons/hi";
// import { CiHome } from "react-icons/ci";
// import Link from "next/link";

// export default function AppSidebar() {
//   return (
//     <Sidebar>
//       <SidebarContent className="bg-[#0D0D17]">
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {/* profile design */}
//               <div className="flex justify-between items-center mb-3">
//                 <div className="flex items-center gap-2">
//                   <Image src="/dashboardIcons/profileImg.png" width={40} height={40} alt="Profile Image" className="rounded-full" />
//                   <div className="text-white">
//                     <h3>Ruben Vaalt</h3>
//                     <p>Acme Inc.</p>
//                   </div>
//                 </div>
//                 <div className="text-white text-xl">
//                   <RiArrowDropDownLine />
//                 </div>
//               </div>
//               <Separator className="bg-[#242432]" />
//               <SidebarMenuItem>
//                 <SidebarMenuButton className="bg-blue-500 hover:bg-blue-500 flex justify-center mt-4">
//                   {/* workflow button */}
//                   <Link href='/dashboard/dashboard'><button className="text-sm px-10 py-1 font-semibold rounded-sm text-white flex items-center"> <HiPlus /> New Workflow</button></Link>
//                 </SidebarMenuButton>
//                 {/* overview */}
//                 <p className="text-[#8588AB] mt-4">Overview</p>
//                 <SidebarMenuButton className="bg-[#F7F7F81A] hover:bg-[#F7F7F81A] mt-2">
//                   <Link href="/dashboard/dashbord">
//                     <button className="bg-[#text-sm pr-18 pl-2 py-1 font-semibold rounded-sm text-white flex items-center gap-2"> <CiHome size={20} /> Dashboard</button>
//                   </Link>
//                 </SidebarMenuButton>
//                 {/* manage */}
//                 <p className="text-[#8588AB] mt-4">Manage</p>
//                 <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
//                   <Link href="dashboard/workflow" className="flex items-center gap-2">
//                     <Image src="/dashboardIcons/workflow.png" width={20} height={20} alt="work flow" />
//                     <button>
//                       Workflow
//                     </button>
//                   </Link>
//                 </SidebarMenuButton>
//                 <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
//                   <Link href="dashboard/runs" className="flex items-center gap-2">
//                     <Image src="/dashboardIcons/runs.png" width={20} height={20} alt="work flow" />
//                     <button>
//                       Runs
//                     </button>
//                   </Link>
//                 </SidebarMenuButton>
//                 <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
//                   <Link href="dashboard/workflow" className="flex items-center gap-2">
//                     <Image src="/dashboardIcons/integration.png" width={20} height={20} alt="work flow" />
//                     <button>
//                       Integrations
//                     </button>
//                   </Link>
//                 </SidebarMenuButton>
//                 <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
//                   <Link href="dashboard/workflow" className="flex items-center gap-2">
//                     <Image src="/dashboardIcons/knowledge.png" width={20} height={20} alt="work flow" />
//                     <button>
//                       Knowledge
//                     </button>
//                   </Link>
//                 </SidebarMenuButton>
//                 {/* explore */}
//                 <p className="text-[#8588AB] mt-4">Explore</p>
//                 <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
//                   <Link href="dashboard/template" className="flex items-center gap-2">
//                     <Image src="/dashboardIcons/templates.png" width={20} height={20} alt="work flow" />
//                     <button>
//                       Templates
//                     </button>
//                   </Link>
//                 </SidebarMenuButton>
//                 <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
//                   <Link href="dashboard/documentation" className="flex items-center gap-2">
//                     <Image src="/dashboardIcons/documentation.png" width={20} height={20} alt="work flow" />
//                     <button>
//                       Documentation
//                     </button>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }




import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Settings } from "lucide-react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { HiPlus } from "react-icons/hi";
import { CiHome } from "react-icons/ci";
import Link from "next/link";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-[#0D0D17] flex flex-col justify-between h-full p-4">
        {/* Top Section */}
        <div>
          <SidebarGroup>
            {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Profile */}
                <div className="flex justify-between items-center mb-3">
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
                  <div className="text-white text-xl">
                    <RiArrowDropDownLine />
                  </div>
                </div>

                <Separator className="bg-[#242432]" />

                {/* New Workflow Button */}
                <SidebarMenuItem>
                  <SidebarMenuButton className="bg-blue-500 hover:bg-blue-500 flex justify-center mt-4">
                    <Link href="/dashboard/workflow">
                      <button className="text-sm py-1 font-semibold rounded-sm text-white flex items-center gap-1">
                        <HiPlus /> New Workflow
                      </button>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Overview */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Overview</p>
                <SidebarMenuItem>
                  <SidebarMenuButton className="bg-[#F7F7F81A] hover:bg-[#F7F7F81A]">
                    <Link href="/dashboard/dashboard">
                      <button className="text-sm font-semibold rounded-sm text-white flex items-center gap-2">
                        <CiHome size={20} /> Dashboard
                      </button>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Manage */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Manage</p>
                {[
                  { label: "Workflow", icon: "/dashboardIcons/workflow.png", href: "/dashboard/workflow" },
                  { label: "Runs", icon: "/dashboardIcons/runs.png", href: "/dashboard/runsoverview" },
                  { label: "Integrations", icon: "/dashboardIcons/integration.png", href: "/dashboard/workflow" },
                  { label: "Knowledge", icon: "/dashboardIcons/knowledge.png", href: "/dashboard/knowledgeoverview" },
                ].map(({ label, icon, href }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
                      <Link href={href} className="flex items-center gap-2">
                        <Image src={icon} width={20} height={20} alt={label} />
                        <span className="text-sm">{label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* Explore */}
                <p className="text-[#8588AB] mt-4 mb-2 text-sm font-medium">Explore</p>
                {[
                  { label: "Templates", icon: "/dashboardIcons/templates.png", href: "/dashboard/template" },
                  { label: "Documentation", icon: "/dashboardIcons/documentation.png", href: "/dashboard/documentation" },
                ].map(({ label, icon, href }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton className="hover:bg-transparent hover:text-[#D5D6E2] text-[#D5D6E2]">
                      <Link href={href} className="flex items-center gap-2">
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
              <Settings size={18} />
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
