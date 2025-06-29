"use client";

import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineWatchLater } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkflowPage = () => {
    const [showTrigger, setShowTrigger] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());
    const [selectedRepeat, setSelectedRepeat] = useState("Custom (every 2 days)");

    // Sample repeat options
    const repeatOptions = [
        "Custom (every 2 days)",
        "Daily",
        "Weekly",
        "Monthly",
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-[896px] mx-auto flex justify-center gap-6 mt-6">
                <div className="w-1/2 h-[100px]">
                    <div className="border-2 rounded-lg">
                        <h3 className="p-3">Add a step to turn on the workflow</h3>
                        <div className="flex items-center justify-between border-t-2 pt-3 mb-2">
                            <div className="flex items-center justify-center gap-3 ml-3">
                                <span>1</span>
                                <div className="border p-1 rounded">
                                    <MdOutlineWatchLater />
                                </div>
                                <span>Every 2 days</span>
                            </div>
                            <div>
                                <Switch id="airplane-mode" className="mr-3" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-blue-500 font-semibold p-2 rounded-lg border-2 border-dotted border-blue-500 bg-[#EEF8FF] mt-6">
                        <button onClick={() => setShowTrigger(true)}>+ Add Step</button>
                    </div>
                </div>

                {showTrigger && (
                    <div className="w-1/2 border-2 rounded-lg mb-6">
                        <div className="flex items-center justify-between p-3">
                            <div className="flex items-center gap-3">
                                <div className="border p-1 rounded">
                                    <MdOutlineWatchLater />
                                </div>
                                <span>Start run on a schedule</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="outline" className="flex items-center">
                                    <span>Run as</span>
                                    <Image
                                        src="/dashboardIcons/profileImg.png"
                                        width={20}
                                        height={20}
                                        alt="Profile"
                                        className="rounded-full"
                                    />
                                </Button>
                                <button onClick={() => setShowTrigger(false)}>
                                    <RxCross2 />
                                </button>
                            </div>
                        </div>
                        <Separator />

                        <label className="block text-xs font-medium text-gray-700 mb-1 mt-3 ml-3">First Instance</label>
                        <div className="my-2 mx-3 flex justify-between items-center">
                            <div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    className="w-full p-1 border border-gray-300 rounded-sm text-sm focus:outline-none"
                                    dateFormat="dd MMM yyyy"
                                    placeholderText="Select date"
                                />
                            </div>

                            <div>
                                <DatePicker
                                    selected={selectedTime}
                                    onChange={(date) => setSelectedTime(date)}
                                    className="w-full p-1 border border-gray-300 rounded-sm text-sm focus:outline-none"
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    placeholderText="Select time"
                                />
                            </div>
                        </div>
                        <div className="space-y-2 w-full px-3">
                            <label className="block text-xs font-medium text-gray-700">Repeats</label>
                            <select
                                value={selectedRepeat}
                                onChange={(e) => setSelectedRepeat(e.target.value)}
                                className="w-full p-1 border rounded-sm border-gray-300 text-sm focus:outline-none appearance-none bg-white pr-8"
                            >
                                {repeatOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-between items-center px-3 py-3">
                            <input type="text" placeholder="2" className="border rounded-sm pl-2 p-0.5"/>
                            <input type="text" placeholder="days" className="border rounded-sm pl-2 p-0.5"/>
                        </div> 
                        <Separator/>
                        <div className="text-right my-3">
                            <Button className="bg-blue-500 pr-3">Done</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkflowPage;
