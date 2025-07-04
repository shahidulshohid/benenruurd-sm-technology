"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function AddTrigger() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Helper function to check if search matches a string
  const matchSearch = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <section>
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

      {/* add trigger section */}
      <div className="rounded-br-lg rounded-bl-lg shadow w-full p-0 border border-t-0">
        <div className="space-y-2">
          {/* Integrations */}
          {matchSearch("integrations") && (
            <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src="/dashboardIcons/integrations.svg"
                    width={24}
                    height={24}
                    alt="Integrations image"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#22222F]">
                    Integrations
                  </h3>
                  <p className="text-xs text-[#8588AB]">
                    Start runs based on actions in other integrations
                  </p>
                </div>
              </div>
              <MdKeyboardArrowRight
                className="text-gray-400 hover:text-gray-600 transition duration-200"
                size={20}
              />
            </div>
          )}

          {/* Manual */}
          {matchSearch("manual") && (
            <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src="/dashboardIcons/manual.svg"
                    width={24}
                    height={24}
                    alt="Manual image"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#22222F]">
                    Manual
                  </h3>
                  <p className="text-xs text-[#8588AB]">
                    Start runs on demand
                  </p>
                </div>
              </div>
              <MdKeyboardArrowRight
                className="text-gray-400 hover:text-gray-600 transition duration-200"
                size={20}
              />
            </div>
          )}

          {/* Scheduled */}
          {matchSearch("scheduled") && (
            <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
              <div className="flex items-center gap-4">
                <div className="border rounded p-1">
                  <Image
                    src="/dashboardIcons/scheduled.svg"
                    width={14}
                    height={14}
                    alt="Scheduled image"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#22222F]">
                    Scheduled
                  </h3>
                  <p className="text-xs text-[#8588AB]">
                    Start runs on schedule
                  </p>
                </div>
              </div>
              <MdKeyboardArrowRight
                className="text-gray-400 hover:text-gray-600 transition duration-200"
                size={20}
              />
            </div>
          )}
        </div>

        <Separator className="w-full h-0.5 bg-gray-200 my-2" />
        <h4 className="text-xs font-semibold text-[#8588AB] mb-2 py-2 pl-4">
          Connected Integrations
        </h4>
        <Separator className="w-full h-0.5 bg-gray-200 my-2" />

        <div>
          {/* Gmail */}
          {matchSearch("gmail") && (
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
          )}

          {/* Google Calendar */}
          {matchSearch("google calendar") && (
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
          )}

          {/* Slack */}
          {matchSearch("slack") && (
            <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
              <div className="flex items-center gap-3 my-3">
                <div className="border p-1 rounded">
                  <Image
                    src="/dashboardIcons/slack.svg"
                    width={16}
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
          )}
        </div>
      </div>
    </section>
  );
}
