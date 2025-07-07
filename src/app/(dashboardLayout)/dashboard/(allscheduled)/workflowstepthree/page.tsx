"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import WorkflowStepThree from "@/components/allscheduledcomponent/Workflow-step-three";

type Tab = "editor" | "runs";

const WorkflowPage = () => {
    const [activeTab, setActiveTab] = useState<Tab>("editor");

    return (
        <div>
            <div className="relative flex items-center justify-between px-8 h-[60px]">
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2 p-2">
                        <Image
                            src="/dashboardIcons/gmail.svg"
                            width={30}
                            height={30}
                            alt="Gmail icon"
                            className="border p-1 rounded-[3px]"
                        />
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold text-[#22222F]">
                                Gmail - Email received
                            </p>
                        </div>
                        <Image src="/dashboardIcons/star.svg" width={20} height={20} alt="star icon" className="text-[#8588AB]" />
                        <MdOutlineKeyboardArrowDown className="text-[#8588AB] cursor-pointer -ml-1" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Image
                        src="/dashboardIcons/messageImg.svg"
                        width={20}
                        height={20}
                        alt="Message image"
                        className="cursor-pointer"
                    />
                    <Image
                        src="/dashboardIcons/victor.svg"
                        width={20}
                        height={20}
                        alt="Vector image"
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src="/notifications.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                    <Image
                        src="/share.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                    <Image
                        src="/help.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                    <Image
                        src="/dots.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                </div>
            </div>

            <div className="text-center">
                <Separator className="mb-2 bg-gray-200" />
                <div className="flex justify-center gap-4 border w-[235px] mx-auto py-1 rounded-lg">
                    <button
                        onClick={() => {
                            setActiveTab("editor");
                        }}
                        className={`px-8.5 py-0.5 cursor-pointer rounded-[7px] ${activeTab === "editor"
                            ? "bg-[#22222F]  text-sm font-medium text-[#FFFFFF]"
                            : "bg-[#FCFCFD] text-[#8588AB] hover:bg-[#FCFCFD]"
                            }`}
                    >
                        Editor
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("runs");
                        }}
                        className={`px-8.5 py-0.5 cursor-pointer rounded-[7px] ${activeTab === "runs"
                            ? "bg-[#22222F]  text-sm font-medium text-[#FFFFFF]"
                            : "bg-[#FCFCFD] text-[#8588AB] hover:bg-[#FCFCFD]"
                            }`}
                    >
                        Runs
                    </button>
                </div>
                <Separator className="mt-2 bg-gray-200" />
            </div>

            <div>
                {activeTab === "editor" && <WorkflowStepThree />}
                {activeTab === "runs" && (
                    <div className="text-center mt-[330px]">
                        <h1 className="text-xl font-semibold">Work in progress</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkflowPage;
