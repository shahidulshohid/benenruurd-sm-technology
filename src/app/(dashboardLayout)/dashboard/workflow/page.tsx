
"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { PiSlackLogoLight } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { SiNationalrail } from "react-icons/si";
import { SiLinear } from "react-icons/si";
import { SiAsana } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";
import { LuCalendarFold } from "react-icons/lu";
import { IoHandRightOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrIntegration } from "react-icons/gr";
import { FaRegHandPaper } from "react-icons/fa";

type Tab = 'editor' | 'runs';

const WorkflowPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('editor');
  const [showTrigger, setShowTrigger] = useState<boolean>(false);
  const [showEditRuns, setShowEditRuns] = useState<boolean>(true);

  return (
    <div>
      <div className="relative flex items-center justify-between px-8 h-[60px]">
        {/* Middle image (centered absolutely) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/dashboardIcons/middle.png"
            width={464}
            height={40}
            alt="Middle image"
          />
        </div>

        {/* Left group */}
        <div className="flex items-center gap-3">
          <Image src="/messageImg.png" width={20} height={20} alt="Message image" />
          <Image src="/dashboardIcons/vector.png" width={20} height={20} alt="Vector image" />
        </div>

        {/* Right group */}
        <div>
          <Image
            src="/dashboardIcons/right.png"
            width={464}
            height={40}
            alt="Right image"
          />
        </div>
      </div>

      <div>
        <div className="text-center">
          <Separator className="mb-2 bg-gray-200" />

          {/* Buttons */}
          <div className="flex justify-center gap-5 border w-[200px] mx-auto py-1 rounded-lg">
            <Button
              variant={activeTab === 'editor' ? 'default' : 'ghost'}
              onClick={() => {
                setActiveTab('editor');
                setShowEditRuns(true);
              }}
              className="px-6"
            >
              Editor
            </Button>
            <Button
              variant={activeTab === 'runs' ? 'default' : 'ghost'}
              onClick={() => {
                setActiveTab('runs');
                setShowEditRuns(false);
              }}
              className="px-6"
            >
              Runs
            </Button>
          </div>

          <Separator className="mt-2 bg-gray-200" />
        </div>
      </div>

      {showEditRuns ? (
        // Trigger Section
        <div className='max-w-[896px] mx-auto flex justify-center gap-6 mt-6'>
          <div className='w-1/2 border rounded-lg h-[100px]'>
            <h3 className='p-3'>Trigger</h3>
            <Separator />
            <div className='text-center text-blue-500 font-semibold p-4'>
              <button onClick={() => setShowTrigger(true)}>+ Add Trigger</button>
            </div>
          </div>

          {showTrigger && (
            <div className='w-1/2 border rounded-lg mb-6'>
              {/* Cross and title */}
              <div className='p-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <GoArrowLeft className='-mb-1' />
                  <h3>Integrations</h3>
                </div>
                <button onClick={() => setShowTrigger(false)}>
                  <RxCross2 />
                </button>
              </div>
              <Separator />

              {/* Search */}
              <div className="relative w-full">
                <CiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Integrations"
                  className="w-full pl-10 pr-4 py-2 focus:outline-none"
                />
              </div>
              <Separator />
                <div className='my-3'>
                  <div className='pl-2 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <GrIntegration size={25} className='text-black border rounded p-1' />
                    <div>
                      <h4 className='text-sm font-semibold'>Integrations</h4>
                      <p className='text-sm text-[#8588AB]'>Start runs based on actions in other integrations</p>
                    </div>
                  </div>
                  <div>
                    <MdKeyboardArrowRight size={30} className='pr-3' />
                  </div>
              </div>
                  <div className='pl-2 flex items-center justify-between my-3'>
                  <div className='flex items-center gap-3'>
                    <FaRegHandPaper size={25} className='text-black border rounded p-1' />
                    <div>
                      <h4 className='text-sm font-semibold'>Manual</h4>
                      <p className='text-sm text-[#8588AB]'>Start runs on demand</p>
                    </div>
                  </div>
                  <div>
                    <MdKeyboardArrowRight size={30} className='pr-3' />
                  </div>
              </div>
                  <div className='pl-2 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <MdOutlineWatchLater size={25} className='text-black border rounded p-1' />
                    <div>
                      <h4 className='text-sm font-semibold'>Scheduled</h4>
                      <p className='text-sm text-[#8588AB]'>Start runs on schedule</p>
                    </div>
                  </div>
                  <div>
                    <MdKeyboardArrowRight size={30} className='pr-3' />
                  </div>
              </div>
                </div>
              <Separator />
              {/* communication */}
              <h1 className='text-[#8588AB] my-2 px-2 font-semibold'>Communication</h1>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <PiSlackLogoLight size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Slack</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <Separator />
              {/* Email */}
              <h1 className='text-[#8588AB] my-2 px-2 font-semibold'>E-mail</h1>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <SiGmail size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Gmail</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <Separator />
              {/* project management */}
              <h1 className='text-[#8588AB] my-2 px-2 font-semibold'>Project manangement</h1>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <SiNationalrail size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Nation</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <SiLinear size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Linear</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <SiAsana size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Asana</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <Separator />
              {/* file store */}
              <h1 className='text-[#8588AB] my-2 px-2 font-semibold'>File Store</h1>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <FaGoogleDrive size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Google Drive</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <Separator />
              {/* calendar */}
              <h1 className='text-[#8588AB] my-2 px-2 font-semibold'>Calendar</h1>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <LuCalendarFold size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Google Calender</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <Separator />
              {/* manual */}
              <h1 className='text-[#8588AB] my-2 px-2 font-semibold'>Manual</h1>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <IoHandRightOutline size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Start a signle run</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
              <Separator />
              {/* secheduled */}
              <h1 className='text-[#8588AB] my-2 px-2 font-semibold'>secheduled</h1>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 py-3 px-2'>
                  <MdOutlineWatchLater size={25} className='text-black border rounded p-1' />
                  <h3 className='font-semibold'>Start a signle run</h3>
                </div>
                <div>
                  <MdKeyboardArrowRight size={30} className='pr-3' />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // runs part
        <div className='text-center mt-[330px]'>
          <h1 className='text-xl font-semibold'>Work in progress</h1>
        </div>
      )}
    </div>
  );
};

export default WorkflowPage;
