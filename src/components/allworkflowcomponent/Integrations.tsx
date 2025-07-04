"use client";

import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";

interface IntegrationsPageProps {
  setShowTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function IntegrationsPage({
  setShowTrigger,
}: IntegrationsPageProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const matchSearch = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <section className="rounded-lg shadow w-full max-w-md border border-t-0">
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GoArrowLeft />
          <h3 className="text-sm font-semibold text-[#22222F]">
            Integrations
          </h3>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setShowTrigger(false)}
        >
          <RxCross2 />
        </button>
      </div>

      <Separator />
      <div className="relative w-full">
        <CiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search Triggers"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="w-full pl-10 pr-4 py-3 focus:outline-none text-[#8588AB] border-2 border-x-0"
        />
      </div>

      {/* Communication */}
      {matchSearch("slack") && (
        <>
          <h4 className="text-xs font-semibold text-[#8588AB] mb-3 pt-3 pl-4">
            Communication
          </h4>
          <Separator className="w-full h-px bg-gray-200" />
          <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
            <div className="flex items-center gap-3 my-3">
              <div className="border p-1 rounded">
                <Image
                  src="/dashboardIcons/slack.svg"
                  width={14}
                  height={12}
                  alt="Slack image"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#22222F]">Slack</h3>
            </div>
            <MdKeyboardArrowRight
              className="text-gray-400 hover:text-gray-600 transition duration-200"
              size={20}
            />
          </div>
        </>
      )}

      {/* E-mail */}
      {matchSearch("gmail") && (
        <>
          <Separator className="w-full h-px bg-gray-200" />
          <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
            E-mail
          </h4>
          <Separator className="w-full h-px bg-gray-200" />
          <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
            <div className="flex items-center gap-3 my-3">
              <div className="border p-1 rounded">
                <Image
                  src="/dashboardIcons/google.svg"
                  width={16}
                  height={12}
                  alt="Gmail image"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#22222F]">Gmail</h3>
            </div>
            <MdKeyboardArrowRight
              className="text-gray-400 hover:text-gray-600 transition duration-200"
              size={20}
            />
          </div>
        </>
      )}

      {/* Project Management */}
      {(matchSearch("notion") ||
        matchSearch("linear") ||
        matchSearch("asana")) && (
        <>
          <Separator className="w-full h-px bg-gray-200" />
          <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
            Project Management
          </h4>
          <Separator className="w-full h-px bg-gray-200" />

          {matchSearch("notion") && (
            <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
              <div className="flex items-center gap-3 my-3">
                <div className="border p-1 rounded">
                  <Image
                    src="/dashboardIcons/notion.svg"
                    width={16}
                    height={12}
                    alt="Notion image"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#22222F]">Notion</h3>
              </div>
              <MdKeyboardArrowRight
                className="text-gray-400 hover:text-gray-600 transition duration-200"
                size={20}
              />
            </div>
          )}

          {matchSearch("linear") && (
            <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
              <div className="flex items-center gap-3 my-3">
                <div className="border p-1 rounded">
                  <Image
                    src="/dashboardIcons/linear.svg"
                    width={16}
                    height={12}
                    alt="Linear image"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#22222F]">Linear</h3>
              </div>
              <MdKeyboardArrowRight
                className="text-gray-400 hover:text-gray-600 transition duration-200"
                size={20}
              />
            </div>
          )}

          {matchSearch("asana") && (
            <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
              <div className="flex items-center gap-3 my-3">
                <div className="border p-1 rounded">
                  <Image
                    src="/dashboardIcons/asana.svg"
                    width={16}
                    height={12}
                    alt="Asana image"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#22222F]">Asana</h3>
              </div>
              <MdKeyboardArrowRight
                className="text-gray-400 hover:text-gray-600 transition duration-200"
                size={20}
              />
            </div>
          )}
        </>
      )}

      {/* File Storage */}
      {matchSearch("google drive") && (
        <>
          <Separator className="w-full h-px bg-gray-200" />
          <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
            File Storage
          </h4>
          <Separator className="w-full h-px bg-gray-200" />
          <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
            <div className="flex items-center gap-3 my-3">
              <div className="border p-1 rounded">
                <Image
                  src="/dashboardIcons/googleDrive.svg"
                  width={16}
                  height={12}
                  alt="Google Drive image"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#22222F]">
                Google Drive
              </h3>
            </div>
            <MdKeyboardArrowRight
              className="text-gray-400 hover:text-gray-600 transition duration-200"
              size={20}
            />
          </div>
        </>
      )}

      {/* Calendar */}
      {matchSearch("google calendar") && (
        <>
          <Separator className="w-full h-px bg-gray-200" />
          <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
            Calendar
          </h4>
          <Separator className="w-full h-px bg-gray-200" />
          <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
            <div className="flex items-center gap-3 my-3">
              <div className="border p-1 rounded">
                <Image
                  src="/dashboardIcons/googleCalendar.svg"
                  width={16}
                  height={12}
                  alt="Google Calendar image"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#22222F]">
                Google Calendar
              </h3>
            </div>
            <MdKeyboardArrowRight
              className="text-gray-400 hover:text-gray-600 transition duration-200"
              size={20}
            />
          </div>
        </>
      )}
    </section>
  );
}
