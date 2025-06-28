"use client";

import { FaBolt, FaClock, FaRegHandPaper } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiGmail, SiSlack } from "react-icons/si";
import { LuCalendarFold } from "react-icons/lu";
import { Separator } from "@radix-ui/react-separator";

export default function AddTrigger() {
    const triggers = [
        {
            icon: <FaBolt size={18} />,
            title: "Integrations",
            description: "Start runs based on actions in other integrations",
        },
        {
            icon: <FaRegHandPaper size={18} />,
            title: "Manual",
            description: "Start runs on demand",
        },
        {
            icon: <FaClock size={18} />,
            title: "Scheduled",
            description: "Start runs on schedule",
        },
    ];

    const connectedIntegrations = [
        { icon: <SiGmail size={18} />, name: "Gmail" },
        { icon: <LuCalendarFold size={18} />, name: "Google Calendar" },
        { icon: <SiSlack size={18} />, name: "Slack" },
    ];

    return (
        <div className="rounded-br-lg rounded-bl-lg shadow w-full p-0 border border-t-0">
            <div className="space-y-2">
                {triggers.map((trigger) => (
                    <div
                        key={trigger.title}
                        className="flex justify-between items-center p-3"
                    >
                        <div className="flex items-center gap-3">
                            <div className="border p-1 rounded">
                                {trigger.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                    {trigger.title}
                                </h3>
                                <p className="text-xs text-gray-500">{trigger.description}</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className="text-gray-400" size={20} />
                    </div>
                ))}
            </div>

            {/* Separator */}
            <Separator className="w-full h-px bg-gray-200 my-2" />
            <h4 className="text-xs font-semibold text-gray-500 mb-2 py-1 pl-4">
                Connected Integrations
            </h4>
            {/* Separator */}
            <Separator className="w-full h-px bg-gray-200 my-2" />
            <div className="space-y-2">

                <div className="p-3">
                    {connectedIntegrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="flex justify-between items-center"
                        >
                            <div className="flex items-center gap-3 my-2">
                                <div className="border p-1 rounded">
                                    {integration.icon}
                                </div>
                                <h3 className="text-sm font-medium text-gray-900">
                                    {integration.name}
                                </h3>
                            </div>
                            <MdKeyboardArrowRight className="text-gray-400" size={20} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
