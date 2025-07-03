"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export default function AddTrigger() {

    return (
        <section className="rounded-br-lg rounded-bl-lg shadow w-full p-0 border border-t-0">
            <div className="space-y-2">
                {/* Integrations */}
                <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image src="/dashboardIcons/integrations.svg" width={24} height={24} alt="Integrations image" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#22222F]">
                                Integrations
                            </h3>
                            <p className="text-xs text-[#8588AB]">Start runs based on actions in other integrations</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
                </div>

                {/* Manual */}
                <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image src="/dashboardIcons/manual.svg" width={24} height={24} alt="Manual image" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#22222F]">
                                Manual
                            </h3>
                            <p className="text-xs text-[#8588AB]">Start runs on demand</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
                </div>

                {/* Scheduled */}
                <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                    <div className="flex items-center gap-4">
                        <div className="border rounded p-1">
                            <Image src="/dashboardIcons/scheduled.svg" width={14} height={14} alt="Scheduled image" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#22222F]">
                                Scheduled
                            </h3>
                            <p className="text-xs text-[#8588AB]">Start runs on schedule</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
                </div>
            </div>

            {/* Separator */}
            <Separator className="w-full h-px bg-gray-200 my-2" />
            <h4 className="text-xs font-semibold text-[#8588AB] mb-2 py-2 pl-4">
                Connected Integrations
            </h4>
            {/* Separator */}
            <Separator className="w-full h-px bg-gray-200 my-2" />
            <div>
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
                <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                    <div className="flex items-center gap-3 my-3">
                        <div className="border p-1 rounded">
                            <Image src="/dashboardIcons/googleCalendar.svg" width={16} height={12} alt="Google Calender image" />
                        </div>
                        <h3 className="text-sm font-semibold text-[#22222F]">
                            Google Calender
                        </h3>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                    <div className="flex items-center gap-3 my-3">
                        <div className="border p-1 rounded">
                            <Image src="/dashboardIcons/slack.svg" width={16} height={12} alt="Google Calender image" />
                        </div>
                        <h3 className="text-sm font-semibold text-[#22222F]">
                            Slack
                        </h3>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
                </div>
            </div>
        </section>
    );
}
