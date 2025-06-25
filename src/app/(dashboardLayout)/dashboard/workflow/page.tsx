"use client"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";
import { CiSearch } from "react-icons/ci";


const WorkflowPage = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'runs'>('editor');
  const [showTrigger, setshowTrigger] = useState<boolean>(false)
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
          {/* Top Separator */}
          <Separator className="mb-2 bg-gray-200" />

          {/* Buttons */}
          <div className="flex justify-center gap-5 border w-[200px] mx-auto py-1 rounded-lg">
            <Button
              variant={activeTab === 'editor' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('editor')}
              className='px-6'
            >
              Editor
            </Button>
            <Button
              variant={activeTab === 'runs' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('runs')}
              className='px-6'
            >
              Runs
            </Button>
          </div>

          {/* Bottom Separator */}
          <Separator className="mt-2 bg-gray-200" />
        </div>
      </div>

      {/* add trigger  */}
      <div className='max-w-[896px] mx-auto flex justify-center gap-6 mt-6'>
        <div className='w-1/2 border rounded-lg'>
          <h3 className='p-3'>Trigger</h3>
          <Separator />
          <div className='text-center text-blue-500 font-semibold p-4'>
            <button onClick={() => setshowTrigger(true)}>+ Add Trigger</button>

          </div>
        </div>
        {
          showTrigger && (
            <div className='w-1/2 border rounded-lg'>
              {/* cross and title */}
              <div className='p-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <GoArrowLeft className='-mb-1' />
                  <h3>Integrations</h3>
                </div>
                <button onClick={() => setshowTrigger(false)}>
                  <RxCross2 />
                </button>
              </div>
              <Separator />
              {/* search */}
              <div className="relative w-full">
                <CiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Integrations"
                  className="w-full pl-10 pr-4 py-2 focus:outline-none"
                />
              </div>
              <Separator/>
            </div>
          )
        }
      </div>
    </div >
  );
};

export default WorkflowPage;