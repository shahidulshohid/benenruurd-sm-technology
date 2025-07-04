"use client";

import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ScheduledComponent() {
    return (
        <section className="rounded-br-lg rounded-bl-lg shadow w-full p-0 border border-t-0">
            <div className="space-y-2">
                {/* shceduled */}
                <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                    <div className="flex items-center gap-4">
                        <div className="border rounded p-1">
                            <Image src="/dashboardIcons/scheduled.svg" width={14} height={14} alt="Scheduled image" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#22222F]">
                                Start a single run
                            </h3>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
                </div>
            </div>
            <div className="space-y-2">
                {/* batch */}
                <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                    <div className="flex items-center gap-4">
                        <div className="border rounded p-1">
                            <Image src="/dashboardIcons/batch.svg" width={14} height={14} alt="Integrations image" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#22222F]">
                                Start a batch of runs
                            </h3>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400 hover:text-gray-600 transition duration-200" size={20} />
                </div>
            </div>
        </section>
    );
}