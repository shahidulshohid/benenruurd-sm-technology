"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import AddTrigger from "@/components/allworkflowcomponent/Add-trigger";
import Integrations from "@/components/allworkflowcomponent/Integrations";
import ManualComponent from "@/components/allworkflowcomponent/Manual";
import ScheduledComponent from "@/components/allworkflowcomponent/Scheduled";
import { CiStar } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Tab = "editor" | "runs";

const WorkflowPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("editor");
  const [showTrigger, setShowTrigger] = useState<boolean>(false);
  const [showEditRuns, setShowEditRuns] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  let currentTitle = "Add Trigger";
  let currentComponent = <AddTrigger />;

  if (normalizedQuery.includes("manual")) {
    currentTitle = "Manual";
    currentComponent = <ManualComponent />;
  } else if (normalizedQuery.includes("integration")) {
    currentTitle = "Integrations";
    currentComponent = <Integrations />;
  } else if (normalizedQuery.includes("scheduled")) {
    currentTitle = "Scheduled";
    currentComponent = <ScheduledComponent />;
  }

  const dynamicPlaceholder = `Search ${currentTitle}`;

  return (
    <div>
      <div className="relative flex items-center justify-between px-8 h-[60px]">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 p-2">
            <Image
              src="/google.png"
              width={35}
              height={35}
              alt="Gmail icon"
              className="border p-1 rounded-lg cusop"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-[#22222F]">Gmail - Email received</p>
            </div>
            <CiStar className="text-[#8588AB]" />
            <MdOutlineKeyboardArrowDown className="text-[#8588AB] cursor-pointer -ml-1" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/messageImg.png"
            width={20}
            height={20}
            alt="Message image"
            className="cursor-pointer"
          />
          <Image
            src="/dashboardIcons/vector.png"
            width={20}
            height={20}
            alt="Vector image"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <Image src="/notifications.svg" width={30} height={30} alt="" className="border p-0.5 text-sm rounded-sm cursor-pointer"/>
          <Image src="/share.svg" width={30} height={30} alt="" className="border p-0.5 text-sm rounded-sm cursor-pointer"/>
          <Image src="/help.svg" width={30} height={30} alt="" className="border p-0.5 text-sm rounded-sm cursor-pointer"/>
          <Image src="/dots.svg" width={30} height={30} alt="" className="border p-0.5 text-sm rounded-sm cursor-pointer"/>
        </div>
      </div>

      <div className="text-center">
        <Separator className="mb-2 bg-gray-200" />
        <div className="flex justify-center gap-5 border w-[235px] mx-auto py-1 rounded-lg">
          <button
            onClick={() => {
              setActiveTab("editor");  
              setShowEditRuns(true);
            }}
            className={`px-8 py-1 cursor-pointer rounded-[7px] ${activeTab === "editor" ? "bg-[#22222F] text-white" : "bg-[#FCFCFD] text-[#8588AB] hover:bg-[#FCFCFD]"}`}
          >
            Editor
          </button>
          <button
            onClick={() => {
              setActiveTab("runs");
              setShowEditRuns(false);
            }}
            className={`px-8 py-1 cursor-pointer rounded-[7px] ${activeTab === "runs" ? "bg-[#22222F] text-white" : "bg-[#FCFCFD] text-[#8588AB] hover:bg-[#FCFCFD]"}`}
          >
            Runs
          </button>
        </div>
        <Separator className="mt-2 bg-gray-200" />
      </div>

      {showEditRuns ? (
        <div className="max-w-[896px] mx-auto md:flex justify-center gap-6 mt-6">
          <div className="md:w-1/2 mx-auto border-2 rounded-lg h-[100px] mr-4 ml-4 lg:mr-0 lg:ml-0 mt-5 lg:mt-0">
            <h3 className="p-3">Trigger</h3>
            <div className="text-center text-blue-500 font-semibold p-4 border-t-2">
              <button onClick={() => setShowTrigger(true)}>+ Add a Trigger</button>
            </div>
          </div>

          {showTrigger && (
            <div className="md:w-1/2 mx-auto border-2 rounded-lg mb-6 mr-4 ml-4 md:mr-0 md:ml-0 mt-5 md:mt-0">
              <div className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GoArrowLeft />
                  <h3 className="text-sm font-semibold">{currentTitle}</h3>
                </div>
                <button onClick={() => setShowTrigger(false)}>
                  <RxCross2 />
                </button>
              </div>
              <Separator />

              <div className="relative w-full">
                <CiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={dynamicPlaceholder}
                  className="w-full pl-10 pr-4 py-2 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Separator />

              {currentComponent}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center mt-[330px]">
          <h1 className="text-xl font-semibold">Work in progress</h1>
        </div>
      )}
    </div>
  );
};

export default WorkflowPage;
