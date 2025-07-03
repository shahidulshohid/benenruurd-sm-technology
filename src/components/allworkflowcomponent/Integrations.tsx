"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export default function IntegrationsPage() {

  return (
    <div className="rounded-lg shadow w-full max-w-md borderborder-t-0">
      <h4 className="text-xs font-semibold text-[#8588AB] mb-3 pt-3 pl-4">
        Communication
      </h4>
      {/* Separator */}
      <Separator className="w-full h-px bg-gray-200" />
      {/* slack */}
      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
        <div className="flex items-center gap-3 my-3">
          <div className="border p-1 rounded">
            <Image src="/dashboardIcons/slack.svg" width={14} height={12} alt="Google Calender image" />
          </div>
          <h3 className="text-sm font-semibold text-[#22222F]">
            Slack
          </h3>
        </div>
        <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
      </div>
      {/* email  */}
      <Separator className="w-full h-px bg-gray-200" />
      <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
        E-mail
      </h4>
      {/* Separator */}
      <Separator className="w-full h-px bg-gray-200" />
      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
        <div className="flex items-center gap-3 my-3">
          <div className="border p-1 rounded">
            <Image src="/dashboardIcons/google.svg" width={16} height={12} alt="Google image" />
          </div>
          <h3 className="text-sm font-semibold text-[#22222F]">
            Gmail
          </h3>
        </div>
        <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
      </div>
      {/* project management */}
      <Separator className="w-full h-px bg-gray-200" />
      <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
        Project Management
      </h4>
      {/* Separator */}
      <Separator className="w-full h-px bg-gray-200" />
      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
        <div className="flex items-center gap-3 my-3">
          <div className="border p-1 rounded">
            <Image src="/dashboardIcons/notion.svg" width={16} height={12} alt="Google image" />
          </div>
          <h3 className="text-sm font-semibold text-[#22222F]">
            Notion
          </h3>
        </div>
        <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
      </div>
      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
        <div className="flex items-center gap-3 my-3">
          <div className="border p-1 rounded">
            <Image src="/dashboardIcons/linear.svg" width={16} height={12} alt="Google image" />
          </div>
          <h3 className="text-sm font-semibold text-[#22222F]">
            Linear
          </h3>
        </div>
        <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
      </div>
      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
        <div className="flex items-center gap-3 my-3">
          <div className="border p-1 rounded">
            <Image src="/dashboardIcons/asana.svg" width={16} height={12} alt="Google image" />
          </div>
          <h3 className="text-sm font-semibold text-[#22222F]">
            Gmail
          </h3>
        </div>
        <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
      </div>
      {/* file store */}
      <Separator className="w-full h-px bg-gray-200" />
      <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
        File Storage
      </h4>
      {/* Separator */}
      <Separator className="w-full h-px bg-gray-200" />
      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
        <div className="flex items-center gap-3 my-3">
          <div className="border p-1 rounded">
            <Image src="/dashboardIcons/googleDrive.svg" width={16} height={12} alt="Google image" />
          </div>
          <h3 className="text-sm font-semibold text-[#22222F]">
            Google Drive
          </h3>
        </div>
        <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
      </div>
      {/* calendar */}
      <Separator className="w-full h-px bg-gray-200" />
      <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
        Calendar
      </h4>
      {/* Separator */}
      <Separator className="w-full h-px bg-gray-200" />
      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
        <div className="flex items-center gap-3 my-3">
          <div className="border p-1 rounded">
            <Image src="/dashboardIcons/googleCalendar.svg" width={16} height={12} alt="Google image" />
          </div>
          <h3 className="text-sm font-semibold text-[#22222F]">
            Google Drive
          </h3>
        </div>
        <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
      </div>
    </div>
  );
}
