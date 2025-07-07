"use client";

import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ScheduledBatchRun = () => {
  // switch button 
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("flsfksld");
    router.push("/dashboard/workflowstepone");
  };

  return (
    <div className="min-h-screen py-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="border-2 rounded-lg bg-white shadow-sm">
              <h3 className="p-4 text-[#22222F] font-semibold text-sm border-b">
                Add a step to turn on the workflow
              </h3>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#8588AB] font-semibold">
                    1
                  </span>
                  <div className="border p-1 rounded">
                    <Image
                      src="/dashboardIcons/scheduled.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                  <span className="text-sm text-[#22222F] font-semibold">
                    Every 2 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                 <button
                    onClick={() => setEnabled(!enabled)}
                    className={`w-12 h-7 rounded-full p-1 flex items-center transition duration-300 ${enabled ? "bg-blue-700 justify-end shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" : "bg-gray-300 justify-start"
                      }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-[2px_2px_5px_rgba(0,0,0,0.2)]">
                      <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                    </div>
                  </button>

                  <BsThreeDotsVertical className="text-[#8588AB]" />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full text-blue-600 font-semibold border-2 border-dotted border-blue-400 bg-blue-50 text-sm py-3 rounded-lg text-center hover:bg-blue-100 transition cursor-pointer"
            >
              + Add Step
            </button>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 border rounded-lg bg-white shadow-sm">
            <div className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center gap-3">
                <div className="border p-1 rounded text-gray-600">
                  <Image
                    src="/dashboardIcons/batch.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                </div>
                <span className="text-[#22222F] font-semibold text-sm">
                  Start batch of runs on a schedule
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 text-sm border-2 px-2 p-0.5 rounded-lg">
                  <span className="text-sm font-semibold">Run as</span>
                  <Image
                    src="/dashboardIcons/profileImage.jpg"
                    width={16}
                    height={16}
                    alt="Profile"
                    className="rounded-full"
                  />
                </button>
                <Link href="/dashboard/workflow">
                  <button type="button">
                    <RxCross2 className="text-gray-500 cursor-pointer" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-4">
              {/* When to run dropdown */}
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="whenToRun"
                  className="text-sm font-semibold text-[#22222F]"
                >
                  When to run
                </label>
                <select
                  id="whenToRun"
                  className="border-2 rounded-lg px-3 py-1 pr-10 text-sm text-[#22222F] cursor-pointer focus:outline-none focus:ring focus:ring-blue-200 appearance-none"
                >
                  <option className="text-[#22222F] font-semibold]">
                    Automatically start this workflow periodically
                  </option>
                  <option className="text-[#22222F] font-semibold]">
                    Manually
                  </option>
                </select>
                <HiChevronDown
                  className="absolute right-2 top-8 pointer-events-none text-gray-500"
                  size={18}
                />
              </div>

              {/* Select integration dropdown */}
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="selectIntegration"
                  className="text-sm font-semibold text-[#22222F]"
                >
                  Select integration
                </label>
                <select
                  id="selectIntegration"
                  className="border-2 rounded-lg px-3 py-1 pr-10 text-sm cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-[#D5D6E2] appearance-none"
                >
                  <option className="text-[#22222F] font-semibold]">
                    Select a resource
                  </option>
                  <option className="text-[#22222F] font-semibold]">
                    Integration 1
                  </option>
                  <option className="text-[#22222F] font-semibold]">
                    Integration 2
                  </option>
                </select>
                <HiChevronDown
                  className="absolute right-2 top-8 pointer-events-none text-gray-500"
                  size={18}
                />
              </div>

              {/* Done button */}
              <div className="flex justify-end">
                <button className="bg-blue-600 py-[5px] hover:bg-blue-700 text-white text-sm font-semibold px-3 rounded-lg cursor-pointer">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScheduledBatchRun;
