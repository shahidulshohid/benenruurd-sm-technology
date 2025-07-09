"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

type Tab = "editor" | "runs";

const WorkflowPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("editor");
  const [showTrigger, setShowTrigger] = useState<boolean>(false);
  const [showEditRuns, setShowEditRuns] = useState<boolean>(true);

  // add trigger section
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Helper function to check if search matches a string
  const matchSearch = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  // Check if any item matches
  const hasTriggerMatch =
    matchSearch("integrations") ||
    matchSearch("manual") ||
    matchSearch("scheduled");
  const hasIntegrationMatch =
    matchSearch("gmail") ||
    matchSearch("google calendar") ||
    matchSearch("slack");
  const hasAnyMatch = hasTriggerMatch || hasIntegrationMatch;
  // section hide and false
  const [sectionShow, setSectionShow] = useState<string>("add-trigger");

  return (
    <div>
      <div className="relative flex flex-wrap items-center justify-between px-4 md:px-8 py-2 md:py-0 h-auto md:h-[60px] gap-3">
        {/* Center Section */}
        <div className="w-full md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center">
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

        {/* Top Right Icons */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
          <Image
            src="/dashboardIcons/messageImg.svg"
            width={20}
            height={20}
            alt="Message image"
            className="cursor-pointer"
          />
          {/* "trigger icon" */}
          <SidebarTrigger className="text-[#8588AB] hover:text-[#8588AB] cursor-pointer" />
        </div>

        {/* Bottom Right Icons */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
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
        <div className="flex justify-center gap-1 border w-[220px] mx-auto py-0.5 rounded-lg">
          <button
            onClick={() => {
              setActiveTab("editor");
              setShowEditRuns(true);
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
              setShowEditRuns(false);
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

      {showEditRuns ? (
        <div className="max-w-[896px] mx-auto md:flex justify-center gap-6 mt-6">
          <div className="md:w-1/2 mx-auto rounded-lg h-[100px] mr-4 ml-4 lg:mr-0 lg:ml-0 mt-5 lg:mt-0 border border-[#D5D6E2] shadow-sm">
            <h3 className="px-4 py-3 text-sm font-semibold text-[#22222F] border-b border-[#D5D6E2]">
              Trigger
            </h3>
            <div className="text-center text-[#217AFC] text-sm font-semibold p-4 flex justify-center items-center cursor-pointer">
              <Image src="/dashboardIcons/plus.svg" width={20} height={20} alt="plus icon" />
              <button onClick={() => setShowTrigger(true)} className=" cursor-pointer">
                Add trigger
              </button>
            </div>
          </div>


          {showTrigger && (
            <div className="md:w-1/2 mx-auto border border-[#D5D6E2] shadow-sm rounded-lg mb-6 mr-4 ml-4 md:mr-0 md:ml-0 mt-5 md:mt-0">
              {/* add trigger section  */}
              {sectionShow === "add-trigger" ? (
                <section>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* <GoArrowLeft /> */}
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Add a Trigger
                      </h3>
                    </div>
                    <button
                      className="cursor-pointer"
                      onClick={() => setShowTrigger(false)}
                    >
                      <RxCross2 className="w-4 h-4 text-[#8588AB]" />
                    </button>
                  </div>
                  <Separator className="bg-[#D5D6E2]" />
                  <div className="relative w-full">
                    <Image src="/dashboardIcons/search.svg" width={20} height={20} alt="search icon" className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search Triggers"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      className="w-full pl-10 pr-4 py-3 focus:outline-none text-sm text-[#8588AB]"
                    />
                  </div>
                  <Separator className="bg-[#D5D6E2]" />
                  <div className="rounded-br-lg rounded-bl-lg shadow w-full p-0">
                    {hasAnyMatch ? (
                      <>
                        <div className="space-y-2">
                          {/* Integrations */}
                          {matchSearch("integrations") && (
                            <div
                              onClick={() => setSectionShow("integrations")}
                              className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200"
                            >
                              <div className="flex items-center gap-4">
                                <div>
                                  <Image
                                    src="/dashboardIcons/integrations3.svg"
                                    width={24}
                                    height={24}
                                    alt="Manual image"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold text-[#22222F]">
                                    Integrations
                                  </h3>
                                  <p className="text-xs text-[#8588AB]">
                                    Start runs based on actions in other integrations
                                  </p>
                                </div>
                              </div>
                              <MdKeyboardArrowRight
                                className="text-gray-400 hover:text-gray-600 transition duration-200"
                                size={20}
                              />
                            </div>
                          )}

                          {/* Manual */}
                          {matchSearch("manual") && (
                            <div
                              onClick={() => setSectionShow("manual")}
                              className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200"
                            >
                              <div className="flex items-center gap-4">
                                <div>
                                  <Image
                                    src="/dashboardIcons/manual.svg"
                                    width={24}
                                    height={24}
                                    alt="Manual image"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold text-[#22222F]">
                                    Manual
                                  </h3>
                                  <p className="text-xs text-[#8588AB]">
                                    Start runs on demand
                                  </p>
                                </div>
                              </div>
                              <MdKeyboardArrowRight
                                className="text-gray-400 hover:text-gray-600 transition duration-200"
                                size={20}
                              />
                            </div>
                          )}

                          {/* Scheduled */}
                          {matchSearch("scheduled") && (
                            <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                              <div
                                onClick={() => setSectionShow("scheduled")}
                                className="flex items-center gap-4"
                              >
                                <div className="border rounded p-1 border-[#D5D6E2]">
                                  <Image
                                    src="/dashboardIcons/scheduled.svg"
                                    width={14}
                                    height={14}
                                    alt="Scheduled image"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold text-[#22222F]">
                                    Scheduled
                                  </h3>
                                  <p className="text-xs text-[#8588AB]">
                                    Start runs on schedule
                                  </p>
                                </div>
                              </div>
                              <MdKeyboardArrowRight
                                className="text-gray-400 hover:text-gray-600 transition duration-200"
                                size={20}
                              />
                            </div>
                          )}
                        </div>

                        <Separator className="bg-[#D5D6E2]" />
                        <h4 className="text-xs font-semibold text-[#8588AB] bg-[#FCFCFD] mb-2 pt-3 pb-2  pl-4">
                          Connected Integrations
                        </h4>
                        <Separator className="bg-[#D5D6E2]" />

                        <div>
                          {/* Gmail */}
                          {matchSearch("gmail") && (
                            <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                              <div className="flex items-center gap-3 my-3">
                                <div className="border p-1 rounded border-[#D5D6E2]">
                                  <Image
                                    src="/dashboardIcons/google.svg"
                                    width={16}
                                    height={12}
                                    alt="Gmail image"
                                  />
                                </div>
                                <h3 className="text-sm font-semibold text-[#22222F]">
                                  Gmail
                                </h3>
                              </div>
                              <MdKeyboardArrowRight
                                className="text-gray-400 hover:text-gray-600 transition duration-200"
                                size={20}
                              />
                            </div>
                          )}

                          {/* Google Calendar */}
                          {matchSearch("google calendar") && (
                            <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                              <div className="flex items-center gap-3 my-3">
                                <div className="border p-1 rounded border-[#D5D6E2]">
                                  <Image
                                    src="/dashboardIcons/googleCalendar.svg"
                                    width={16}
                                    height={12}
                                    alt="Google Calendar image"
                                  />
                                </div>
                                <h3 className="text-sm font-semibold text-[#22222F]">
                                  Google Calendar
                                </h3>
                              </div>
                              <MdKeyboardArrowRight
                                className="text-gray-400 hover:text-gray-600 transition duration-200"
                                size={20}
                              />
                            </div>
                          )}

                          {/* Slack */}
                          {matchSearch("slack") && (
                            <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                              <div className="flex items-center gap-3 my-3">
                                <div className="border p-1 rounded border-[#D5D6E2]">
                                  <Image
                                    src="/dashboardIcons/slack.svg"
                                    width={16}
                                    height={12}
                                    alt="Slack image"
                                  />
                                </div>
                                <h3 className="text-sm font-semibold text-[#22222F]">
                                  Slack
                                </h3>
                              </div>
                              <MdKeyboardArrowRight
                                className="text-gray-400 hover:text-gray-600 transition duration-200"
                                size={20}
                              />
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8 text-sm text-gray-500">
                        No trigger or integration found.
                      </div>
                    )}
                  </div>
                </section>
              ) : sectionShow === "integrations" ? (
                <section className="rounded-lg shadow w-full max-w-md">
                  <div
                    onClick={() => setSectionShow("add-trigger")}
                    className="p-3 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <GoArrowLeft />
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Integrations
                      </h3>
                    </div>
                    <button
                      className="cursor-pointer"
                      onClick={() => setShowTrigger(false)}
                    >
                      <RxCross2 className="w-4 h-4 text-[#8588AB]" />
                    </button>
                  </div>

                  <Separator className="bg-[#D5D6E2]" />
                  <div className="relative w-full">
                    <Image src="/dashboardIcons/search.svg" width={20} height={20} alt="search icon" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search itegrations"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      className="w-full pl-10 pr-4 py-3 focus:outline-none text-sm text-[#8588AB]"
                    />
                  </div>
                  <Separator className="bg-[#D5D6E2]" />

                  {/* Integrations Section */}

                  {/* Communication */}
                  {matchSearch("slack") && (
                    <div className="bg-[#FCFCFD]">
                      <h4 className="text-xs font-semibold text-[#8588AB] mb-3 pt-3 pl-4">
                        Communication
                      </h4>
                      <Separator className="bg-[#D5D6E2]" />
                      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                        <div className="flex items-center gap-3 my-3">
                          <div className="border p-1 rounded">
                            <Image
                              src="/dashboardIcons/slack.svg"
                              width={14}
                              height={12}
                              alt="Slack image"
                            />
                          </div>
                          <h3 className="text-sm font-semibold text-[#22222F]">
                            Slack
                          </h3>
                        </div>
                        <MdKeyboardArrowRight
                          className="text-gray-400 hover:text-gray-600 transition duration-200"
                          size={20}
                        />
                      </div>
                    </div>
                  )}

                  {/* E-mail */}
                  {matchSearch("gmail") && (
                    <>
                      <Separator className="bg-[#D5D6E2]" />
                      <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
                        E-mail
                      </h4>
                      <Separator className="bg-[#D5D6E2]" />
                      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                        <div className="flex items-center gap-3 my-3">
                          <div className="border p-1 rounded">
                            <Image
                              src="/dashboardIcons/google.svg"
                              width={16}
                              height={12}
                              alt="Gmail image"
                            />
                          </div>
                          <h3 className="text-sm font-semibold text-[#22222F]">
                            Gmail
                          </h3>
                        </div>
                        <MdKeyboardArrowRight
                          className="text-gray-400 hover:text-gray-600 transition duration-200"
                          size={20}
                        />
                      </div>
                    </>
                  )}

                  {/* Project Management */}
                  {(matchSearch("notion") ||
                    matchSearch("linear") ||
                    matchSearch("asana")) && (
                      <>
                        <Separator className="bg-[#D5D6E2]" />
                        <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
                          Project Management
                        </h4>
                        <Separator className="bg-[#D5D6E2]" />

                        {matchSearch("notion") && (
                          <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                            <div className="flex items-center gap-3 my-3">
                              <div className="border p-1 rounded">
                                <Image
                                  src="/dashboardIcons/notion.svg"
                                  width={16}
                                  height={12}
                                  alt="Notion image"
                                />
                              </div>
                              <h3 className="text-sm font-semibold text-[#22222F]">
                                Notion
                              </h3>
                            </div>
                            <MdKeyboardArrowRight
                              className="text-gray-400 hover:text-gray-600 transition duration-200"
                              size={20}
                            />
                          </div>
                        )}

                        {matchSearch("linear") && (
                          <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                            <div className="flex items-center gap-3 my-3">
                              <div className="border p-1 rounded">
                                <Image
                                  src="/dashboardIcons/linear.svg"
                                  width={16}
                                  height={12}
                                  alt="Linear image"
                                />
                              </div>
                              <h3 className="text-sm font-semibold text-[#22222F]">
                                Linear
                              </h3>
                            </div>
                            <MdKeyboardArrowRight
                              className="text-gray-400 hover:text-gray-600 transition duration-200"
                              size={20}
                            />
                          </div>
                        )}

                        {matchSearch("asana") && (
                          <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                            <div className="flex items-center gap-3 my-3">
                              <div className="border p-1 rounded">
                                <Image
                                  src="/dashboardIcons/asana.svg"
                                  width={16}
                                  height={12}
                                  alt="Asana image"
                                />
                              </div>
                              <h3 className="text-sm font-semibold text-[#22222F]">
                                Asana
                              </h3>
                            </div>
                            <MdKeyboardArrowRight
                              className="text-gray-400 hover:text-gray-600 transition duration-200"
                              size={20}
                            />
                          </div>
                        )}
                      </>
                    )}

                  {/* File Storage */}
                  {matchSearch("google drive") && (
                    <>
                      <Separator className="bg-[#D5D6E2]" />
                      <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
                        File Storage
                      </h4>
                      <Separator className="bg-[#D5D6E2]" />
                      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                        <div className="flex items-center gap-3 my-3">
                          <div className="border p-1 rounded">
                            <Image
                              src="/dashboardIcons/googleDrive.svg"
                              width={16}
                              height={12}
                              alt="Google Drive image"
                            />
                          </div>
                          <h3 className="text-sm font-semibold text-[#22222F]">
                            Google Drive
                          </h3>
                        </div>
                        <MdKeyboardArrowRight
                          className="text-gray-400 hover:text-gray-600 transition duration-200"
                          size={20}
                        />
                      </div>
                    </>
                  )}

                  {/* Calendar */}
                  {matchSearch("google calendar") && (
                    <>
                      <Separator className="bg-[#D5D6E2]" />
                      <h4 className="text-xs font-semibold text-[#8588AB] py-3 pl-4">
                        Calendar
                      </h4>
                      <Separator className="bg-[#D5D6E2]" />
                      <div className="flex justify-between items-center hover:bg-gray-100 hover:cursor-pointer transition duration-200 px-3 rounded">
                        <div className="flex items-center gap-3 my-3">
                          <div className="border p-1 rounded">
                            <Image
                              src="/dashboardIcons/googleCalendar.svg"
                              width={16}
                              height={12}
                              alt="Google Calendar image"
                            />
                          </div>
                          <h3 className="text-sm font-semibold text-[#22222F]">
                            Google Calendar
                          </h3>
                        </div>
                        <MdKeyboardArrowRight
                          className="text-gray-400 hover:text-gray-600 transition duration-200"
                          size={20}
                        />
                      </div>
                    </>
                  )}
                </section>
              ) : sectionShow === "manual" ? (
                <section className="rounded-br-lg rounded-bl-lg shadow w-full p-0">
                  <div
                    onClick={() => setSectionShow("add-trigger")}
                    className="p-3 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <GoArrowLeft />
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Manual
                      </h3>
                    </div>
                    <button
                      className="cursor-pointer"
                      onClick={() => setShowTrigger(false)}
                    >
                      <RxCross2 className="text-[#8588AB] w-4 h-4" />
                    </button>
                  </div>

                  <Separator className="bg-[#D5D6E2]" />
                  <div className="relative w-full">
                    <Image src="/dashboardIcons/search.svg" width={20} height={20} alt="search icon" className="w-5 h-5 text-[#8588AB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search Manual"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      className="w-full pl-10 pr-4 py-3 focus:outline-none text-sm text-[#8588AB]"
                    />
                  </div>
                  <Separator className="bg-[#D5D6E2]" />
                  <div className="space-y-2">
                    {/* manual */}
                    <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                      <div className="flex items-center gap-4">
                        <div>
                          <Image
                            src="/dashboardIcons/manual.svg"
                            width={24}
                            height={24}
                            alt="Integrations image"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[#22222F]">
                            Start a single run
                          </h3>
                        </div>
                      </div>
                      <MdKeyboardArrowRight
                        className="text-gray-400 hover:text-gray-600 transition duration-200"
                        size={20}
                      />
                    </div>

                    {/* batch */}
                    <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                      <div className="flex items-center gap-4">
                        <div className="border rounded p-1">
                          <Image
                            src="/dashboardIcons/batch.svg"
                            width={14}
                            height={14}
                            alt="Integrations image"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[#22222F]">
                            Start a batch of runs
                          </h3>
                        </div>
                      </div>
                      <MdKeyboardArrowRight
                        className="text-gray-400 hover:text-gray-600 transition duration-200"
                        size={20}
                      />
                    </div>
                  </div>
                </section>
              ) : sectionShow === "scheduled" ? (
                <section className="rounded-br-lg rounded-bl-lg shadow w-full p-0">
                  {/* Header */}
                  <div
                    onClick={() => setSectionShow("add-trigger")}
                    className="p-3 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <GoArrowLeft />
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Scheduled
                      </h3>
                    </div>
                    <button
                      className="cursor-pointer"
                      onClick={() => setShowTrigger(false)}
                    >
                      <RxCross2 className="w-4 h-4 text-[#8588AB]" />
                    </button>
                  </div>

                  <Separator className="bg-[#D5D6E2]" />

                  {/* Search */}
                  <div className="relative w-full">
                    <Image src="/dashboardIcons/search.svg" width={20} height={20} alt="search icon" className="w-5 h-5 text-[#8588AB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search Scheduled"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      className="w-full pl-10 pr-4 py-3 focus:outline-none text-sm text-[#8588AB]"
                    />
                  </div>
                  <Separator className="bg-[#D5D6E2]" />
                  {/* Scheduled */}
                  <Link href="/dashboard/singlesiduled">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                        <div className="flex items-center gap-4">
                          <div className="border rounded p-1">
                            <Image
                              src="/dashboardIcons/scheduled.svg"
                              width={14}
                              height={14}
                              alt="Scheduled image"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-[#22222F]">
                              Start a scheduled run
                            </h3>
                          </div>
                        </div>
                        <MdKeyboardArrowRight
                          className="text-gray-400 hover:text-gray-600 transition duration-200"
                          size={20}
                        />
                      </div>
                    </div>
                  </Link>

                  {/* Batch */}
                  <Link href="/dashboard/batchrunscheduled">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:cursor-pointer transition duration-200">
                        <div className="flex items-center gap-4">
                          <div className="border rounded p-1">
                            <Image
                              src="/dashboardIcons/batch.svg"
                              width={14}
                              height={14}
                              alt="Batch image"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-[#22222F]">
                              Start a batch of runs
                            </h3>
                          </div>
                        </div>
                        <MdKeyboardArrowRight
                          className="text-gray-400 hover:text-gray-600 transition duration-200"
                          size={20}
                        />
                      </div>
                    </div>
                  </Link>
                </section>
              ) : null}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center mt-[330px]">
          <h1 className="text-xl font-semibold">Work in progress</h1>
        </div>
      )
      }
    </div >
  );
};

export default WorkflowPage;
