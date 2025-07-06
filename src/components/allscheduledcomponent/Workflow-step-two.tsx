"use client";

import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowRight, MdOutlineWatchLater } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const WorkflowStepTwo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <form className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="border rounded-lg bg-white shadow-sm">
              <h3 className="p-4 text-gray-800 font-medium border-b">
                Add a step to turn on the workflow
              </h3>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-700">1</span>
                  <div className="border p-1 rounded text-gray-600">
                    <MdOutlineWatchLater />
                  </div>
                  <span className="text-sm text-[#22222F] font-semibold">Every 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="workflow-switch"
                    className="scale-125 bg-transparent data-[state=checked]:bg-transparent border border-gray-300 rounded-full cursor-pointer [&>span]:border [&>span]:border-gray-300 cup"
                  />
                  <BsThreeDotsVertical className="text-gray-400" />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full text-blue-600 font-semibold border-2 border-dotted border-blue-400 bg-blue-50 py-2 rounded-lg text-center hover:bg-blue-100 transition cursor-pointer"
            >
              + Add Step
            </button>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2">
            <div className="rounded-br-lg rounded-lg shadow w-full p-0 border border-t-0">
              <Link href="/dashboard/workflowstepone">
                <div className="p-3 flex items-center justify-between border rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <GoArrowLeft />
                    <h3 className="text-sm font-semibold text-[#22222F]">
                      Human Steps
                    </h3>
                  </div>
                  <button>
                    <RxCross2 className="cursor-pointer" />
                  </button>
                </div>
              </Link>
              <Separator />

              <div className="relative w-full">
                <CiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Human Steps"
                  className="w-full pl-10 pr-4 py-2 focus:outline-none text-[#8588AB]"
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Link href="/dashboard/workflowstepthree">
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image
                          src="/integrations.svg"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Get approval to continue
                        </h3>
                        <p className="text-xs text-gray-500">
                          Request approval from the assignee to continue
                        </p>
                      </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400" size={20} />
                  </div>
                </Link>
                <div className="flex justify-between items-center p-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="border p-1 rounded">
                      <Image
                        src="/flowcontrol.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Get data input
                      </h3>
                      <p className="text-xs text-gray-500">
                        Request data from the assignee to continue
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-gray-400" size={20} />
                </div>
                <div className="flex justify-between items-center p-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="border p-1 rounded">
                      <Image src="/ai.svg" width={20} height={20} alt="" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Complete a task
                      </h3>
                      <p className="text-xs text-gray-500">
                        Use AI to make actions like summarizing
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-gray-400" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkflowStepTwo;
