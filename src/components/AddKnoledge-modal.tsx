"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { FaRegFileAlt } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

import { useState } from "react";
import { DialogDemo } from "./AddText-modal";

export function DialogCloseContent() {
  const router = useRouter();

  const handleTextClick = () => {
    router.push("/your-target-route"); // replace with actual route
  };


  
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-5 font-semibold">
          Add new knowledge
        </DialogTitle>
        <DialogDescription className="text-sm text-[#8588AB]">
          Sync files and text, and grant the AI access to these sources as
          knowledge during interactions.
        </DialogDescription>
      </DialogHeader>

      <Separator />

      {/* Upload Files Option */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer p-2 rounded">
          <div className="border border-gray-300 p-1.5 rounded text-gray-600">
            <FaRegFileAlt className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-semibold text-[#22222F]">
            Upload File(s)
          </h4>
        </div>
        <MdKeyboardArrowRight size={20} className="text-gray-500" />
      </div>

      {/* Text Redirect Option */}
      <div
        onClick={handleTextClick}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3 cursor-pointer p-2 rounded">
          <div className="border border-gray-300 p-1.5 rounded text-gray-600">
            <IoText className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-semibold text-[#22222F]">Text</h4>
        </div>
        <MdKeyboardArrowRight size={20} className="text-gray-500" />
      </div>
      

       <div>
      <DialogDemo open={open} setOpen={setOpen} />
    </div>


    </DialogContent>
  );
}
