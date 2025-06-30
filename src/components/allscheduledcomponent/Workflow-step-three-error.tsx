"use client";

import { useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { Button } from "../ui/button";
import DatePicker from "react-datepicker";
import { FaChevronDown } from "react-icons/fa";

const WorkflowStepThreeError = () => {
  const [showTrigger, setShowTrigger] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2025-06-30T08:29:00+06:00")
  );
  const [selectedOption, setSelectedOption] = useState<string>("Email");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (selectedOption === "Not Assigned") {
      setError("No assignee selected");
    } else {
      setError("");
      console.log("Form submitted successfully");
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "Not Assigned") {
      setError("No assignee selected");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <form className="max-w-4xl mx-auto px-4" onSubmit={handleSubmit}>
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
                  <span className="text-sm text-[#22222F] font-semibold">
                    Every 2 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="workflow-switch" />
                  <BsThreeDotsVertical className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className={`flex items-center justify-between px-4 py-3 border-2 rounded-lg ${
              selectedOption === "Not Assigned"
                      ? "border-red-500"
                      : ""
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700">2</span>
                <div className="border p-1 rounded text-gray-600">
                  <AiOutlineLike />
                </div>
                <span className="text-sm text-[#22222F] font-semibold">
                  Get approval to continue
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-sm -mr-1">
                  No Assigned
                </Button>
                <BsThreeDotsVertical className="text-gray-400" />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowTrigger(true)}
              className="w-full text-blue-600 font-semibold border-2 border-dotted hover:border-blue-500 border-blue-400 bg-blue-50 py-2 rounded-lg text-center hover:bg-blue-100 transition cursor-pointer"
            >
              + Add Step
            </button>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2">
            {showTrigger && (
              <div className="rounded-br-lg rounded-lg shadow w-full p-0 border border-t-0">
                <div className="p-3 flex items-center justify-between border rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <div className="border rounded p-0.5">
                      <AiOutlineLike className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#22222F]">
                      Get approval to continue
                    </h3>
                  </div>
                  <button type="button" onClick={() => setShowTrigger(false)}>
                    <RxCross2 />
                  </button>
                </div>

                <div className="w-full p-4">
                  <h4 className="text-[#22222F] text-sm font-semibold mb-2">
                    Send approval request over
                  </h4>
                  <div className="relative">
                    <select
                      value={selectedOption}
                      onChange={handleSelectChange}
                      className={`w-full p-2 border-2 rounded-lg text-sm font-semibold appearance-none bg-white pr-10 ${
                        selectedOption === "Not Assigned"
                          ? "border-red-500 text-red-500"
                          : "border-gray-300 text-[#22222F]"
                      }`}
                    >
                      <option value="Email">Email</option>
                      <option value="Slack">Slack</option>
                      <option value="Not Assigned">Not Assigned</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <FaChevronDown className="w-3 h-3" />
                    </div>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>

                {/* Assignee */}
                <div className="w-full p-4">
                  <h4 className="text-[#22222F] text-sm font-semibold mb-2">
                    Assignee
                  </h4>
                  <div className="relative">
                    <div className="w-full p-2 border-2 rounded-lg text-sm bg-white pr-10 flex items-center gap-2">
                      <Image
                        src="/dashboardIcons/profileImg.png"
                        width={15}
                        height={15}
                        alt="Profile"
                        className="rounded-full"
                      />
                      <span className="text-sm font-semibold text-[#22222F]">
                        Ruben Vallt
                      </span>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <FaChevronDown className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="p-4">
                  <h4 className="text-[#22222F] text-sm font-semibold mb-2">
                    Message
                  </h4>
                  <textarea
                    placeholder="Add instructions for the assignee"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-sm text-[#8588AB] focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y h-24"
                  />
                </div>

                {/* Due date and Reminder */}
                <div className="px-4 flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Due date
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        className="w-full p-2 border-2 border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        dateFormat="dd-MM-yyyy"
                        minDate={new Date("2025-06-30T08:53:00+06:00")}
                        placeholderText="Select date"
                      />
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-xs pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Remind after initial notification
                    </label>
                    <div className="relative">
                      <select className="w-full p-2 border-2 border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white pr-10">
                        <option>2 days after initial notification</option>
                        <option>1 day after initial notification</option>
                        <option>3 days after initial notification</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <FaChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview */}
                <div className="px-4 py-2 mt-4 bg-blue-50 rounded-lg shadow-sm">
                  <h4 className="text-sm font-semibold text-[#22222F] mb-2">
                    Preview
                  </h4>
                  <p className="text-sm text-[#8588AB] mb-4">
                    Send yourself an example of the approval notification
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-[#22222F] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send preview to yourself
                  </button>
                </div>

                {/* Done Button */}
                <div className="p-4 text-right">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold rounded-md"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkflowStepThreeError;
