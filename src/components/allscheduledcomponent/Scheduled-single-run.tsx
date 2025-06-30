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
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const ScheduledSingleRun = () => {
  const [showTrigger, setShowTrigger] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());
  const [selectedRepeat, setSelectedRepeat] = useState<string>("Custom (every 2 days)");
  const [customNumber, setCustomNumber] = useState<string>("2");
  const [customUnit, setCustomUnit] = useState<string>("days");

  const repeatOptions = ["Custom (every 2 days)", "Daily", "Weekly", "Monthly"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      selectedDate,
      selectedTime,
      selectedRepeat,
      customNumber: selectedRepeat === "Custom (every 2 days)" ? customNumber : undefined,
      customUnit: selectedRepeat === "Custom (every 2 days)" ? customUnit : undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="border rounded-lg bg-white shadow-sm">
              <h3 className="p-4 text-gray-800 font-medium border-b">Workflow Steps</h3>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-700">1</span>
                  <div className="border p-1 rounded text-gray-600">
                    <MdOutlineWatchLater />
                  </div>
                  <span className="text-sm text-gray-700">Every 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="workflow-switch" className="data-[state=checked]:bg-blue-500" />

                  <BsThreeDotsVertical className="text-gray-400" />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowTrigger(true)}
              className="w-full text-blue-600 font-semibold border-2 border-dotted border-blue-400 bg-blue-50 py-2 rounded-lg text-center hover:bg-blue-100 transition"
            >
              + Add Step
            </button>
          </div>

          {/* Right Panel */}
          {showTrigger && (
            <div className="w-full md:w-1/2 border rounded-lg bg-white shadow-sm">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="border p-1 rounded text-gray-600">
                    <MdOutlineWatchLater />
                  </div>
                  <span className="text-gray-800 font-medium">Start run on a schedule</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="flex items-center gap-2 text-sm">
                    <span>Run as</span>
                    <Image
                      src="/dashboardIcons/profileImg.png"
                      width={20}
                      height={20}
                      alt="Profile"
                      className="rounded-full"
                    />
                  </Button>
                  <button type="button" onClick={() => setShowTrigger(false)}>
                    <RxCross2 className="text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {/* First Instance */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">First Instance</label>
                  <div className="flex gap-2">
                    {/* Date Picker */}
                    <div className="w-1/2 relative">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        className="w-full p-1 pr-8 border border-gray-300 rounded text-sm focus:outline-none"
                        dateFormat="dd MMM yyyy"
                        placeholderText="Select date"
                      />
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
                    </div>

                    {/* Time Picker */}
                    <div className="w-1/2 relative">
                      <DatePicker
                        selected={selectedTime}
                        onChange={(date) => setSelectedTime(date)}
                        className="w-full p-1 pr-8 border border-gray-300 rounded text-sm focus:outline-none"
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText="Select time"
                      />
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Repeats */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Repeats</label>
                  <div className="relative">
                    <select
                      value={selectedRepeat}
                      onChange={(e) => setSelectedRepeat(e.target.value)}
                      className="w-full p-1 border rounded text-sm focus:outline-none appearance-none bg-white"
                    >
                      {repeatOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
                  </div>
                </div>

                {/* Conditional Inputs */}
                {selectedRepeat === "Custom (every 2 days)" && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="2"
                      readOnly
                      value={customNumber}
                      onChange={(e) => setCustomNumber(e.target.value)}
                      className="w-1/2 border rounded pl-2 py-1 text-sm focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="days"
                      readOnly
                      value={customUnit}
                      onChange={(e) => setCustomUnit(e.target.value)}
                      className="w-1/2 border rounded pl-2 py-1 text-sm focus:outline-none"
                    />
                  </div>
                )}
              </div>

              <Separator />

              <div className="text-right p-4">
                <Button type="submit" className="bg-blue-500 text-white px-4">
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ScheduledSingleRun;
