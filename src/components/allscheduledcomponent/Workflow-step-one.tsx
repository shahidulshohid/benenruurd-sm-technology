"use client";

import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowRight } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WorkflowStepOne = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="min-h-screen py-8">
      <form className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="border rounded-lg shadow-sm hover:shadow-md transition bg-[#FCFCFD]">
              <h3 className="p-4 text-[#22222F] font-semibold border-b">
                Add a step to turn on the workflow
              </h3>
              <div className="flex items-center justify-between px-4 py-3 bg-[#FFFFFF] rounded-b-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold  text-[#8588AB]">
                    1
                  </span>
                  <div className="border p-1 rounded text-[#000000]">
                    <Image
                      src="/dashboardIcons/scheduled.svg"
                      width={16}
                      height={16}
                      alt="Scheduled image"
                    />
                  </div>
                  <span className="text-sm text-[#22222F] font-semibold">
                    Every 2 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => setEnabled(!enabled)}
                    className={`cursor-pointer w-12 h-7 rounded-full flex items-center transition duration-300 ${enabled ? "bg-[#217AFC] border border-[#0D5AE8] justify-end p-1 shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" : "bg-transparent border border-[#D5D6E2] justify-start"
                      }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-[#D5D6E2] shadow-[2px_2px_5px_rgba(0,0,0,0.2)]">
                      {
                        enabled && (
                          <div className="w-2 h-2 bg-[#217AFC] rounded-full"></div>
                        )
                      }
                    </div>
                  </div>
                  <BsThreeDotsVertical className="text-gray-400" />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full text-[#217AFC] font-semibold border-2 border-dotted border-[#217AFC] bg-blue-50 py-2 rounded-lg text-center cursor-pointer"
            >
              + Add Step
            </button>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2">
            <div className="rounded-br-lg rounded-lg shadow w-full p-0 border bg-[#FFFFFF]">
              <Link href="/dashboard/batchrunscheduled">
                <div className="p-3 flex items-center justify-between bg-[#FCFCFD] rounded-t-lg">
                  <div className="bg-[#FCFCFD]">
                    <h3 className="text-sm font-semibold text-[#22222F]">
                      Add a step
                    </h3>
                  </div>
                  <button>
                    <RxCross2 className="w-4 h-4 cursor-pointer text-[#8588AB]" />
                  </button>
                </div>
              </Link>
              <Separator className="bg-[#D5D6E2]" />

              <div className="relative w-full">
                <Image src="/dashboardIcons/search.svg" width={20} height={20} alt="search icon" className=" text-[#8588AB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search integrations and actions"
                  className="w-full pl-10 pr-4 px-4 py-3 focus:outline-none text-[#8588AB] text-sm"
                />
              </div>
              <Separator className="bg-[#D5D6E2]" />

              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src="/dashboardIcons/integrations3.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Integrations
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Automate actions in apps like Slack, Gmail and Linear
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-[#8588AB]" size={20} />
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src="/flowcontrol.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Flow Control
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Add logic like paths and waiting
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-[#8588AB]" size={20} />
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex items-center gap-3">
                    <div className="border p-1 rounded">
                      <Image src="/ai.svg" width={16} height={16} alt="" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        AI
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Use AI to make actions like summarizing
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-[#8588AB]" size={20} />
                </div>

                <Link href="/dashboard/workflowsteptwo">
                  <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image src="/human.svg" width={14} height={14} alt="" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#22222F]">
                          Human Steps
                        </h3>
                        <p className="text-xs text-[#8588AB]">
                          Wait for someone to do something
                        </p>
                      </div>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </Link>
              </div>

              <Separator className="bg-[#D5D6E2]" />
              <h4 className="text-xs font-semibold text-[#8588AB] px-4 py-3 pl-4 bg-[#FCFCFD]">
                Connected Integrations
              </h4>
              <Separator className="bg-[#D5D6E2] mb-1" />
              <div>
                <div className="p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image
                          src="/dashboardIcons/gmail.svg"
                          width={16}
                          height={16}
                          alt="Gmail image"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Gmail
                      </h3>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </div>

                <div className="p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image
                          src="/dashboardIcons/googleCalendar.svg"
                          width={16}
                          height={16}
                          alt="Gmail image"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Google Calendar
                      </h3>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </div>

                <div className="p-3 hover:bg-gray-50 cursor-pointer transition rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image
                          src="/dashboardIcons/slack.svg"
                          width={16}
                          height={16}
                          alt="Gmail image"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Slack
                      </h3>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkflowStepOne;
