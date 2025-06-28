"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import AddTrigger from "@/components/allworkflowcomponent/Add-trigger";
import Integrations from "@/components/allworkflowcomponent/Integrations";
import ManualComponent from "@/components/allworkflowcomponent/Manual";
import ScheduledComponent from "@/components/allworkflowcomponent/Scheduled";

type Tab = "editor" | "runs";

const WorkflowPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("editor");
  const [showTrigger, setShowTrigger] = useState<boolean>(false);
  const [showEditRuns, setShowEditRuns] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState("");

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
          <Image
            src="/dashboardIcons/middle.png"
            width={464}
            height={40}
            alt="Middle image"
          />
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/messageImg.png"
            width={20}
            height={20}
            alt="Message image"
          />
          <Image
            src="/dashboardIcons/vector.png"
            width={20}
            height={20}
            alt="Vector image"
          />
        </div>
        <div>
          <Image
            src="/dashboardIcons/right.png"
            width={464}
            height={40}
            alt="Right image"
          />
        </div>
      </div>

      <div className="text-center">
        <Separator className="mb-2 bg-gray-200" />
        <div className="flex justify-center gap-5 border w-[200px] mx-auto py-1 rounded-lg">
          <Button
            variant={activeTab === "editor" ? "default" : "ghost"}
            onClick={() => {
              setActiveTab("editor");
              setShowEditRuns(true);
            }}
            className="px-6"
          >
            Editor
          </Button>
          <Button
            variant={activeTab === "runs" ? "default" : "ghost"}
            onClick={() => {
              setActiveTab("runs");
              setShowEditRuns(false);
            }}
            className="px-6"
          >
            Runs
          </Button>
        </div>
        <Separator className="mt-2 bg-gray-200" />
      </div>

      {showEditRuns ? (
        <div className="max-w-[896px] mx-auto flex justify-center gap-6 mt-6">
          <div className="w-1/2 border rounded-lg h-[100px]">
            <h3 className="p-3">Trigger</h3>
            <Separator />
            <div className="text-center text-blue-500 font-semibold p-4">
              <button onClick={() => setShowTrigger(true)}>+ Add a Trigger</button>
            </div>
          </div>

          {showTrigger && (
            <div className="w-1/2 border rounded-lg mb-6">
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
