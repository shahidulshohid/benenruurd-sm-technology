"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { FaRegFileAlt } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import Image from "next/image";

export function DialogCloseContent() {

  const [changeModal, setChangeModal] = useState<boolean>(true);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fileName = formData.get("fileName");
    const text = formData.get("text");

    console.log("File Name:", fileName);
    console.log("Text:", text);
  };

  return changeModal ? (
    <DialogContent className="max-w-[512px]">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">
          Add new knowledge
        </DialogTitle>
        <DialogDescription className="text-sm text-[#8588AB]">
          Sync files and text, and grant the AI access to these sources as
          knowledge during interactions.
        </DialogDescription>
      </DialogHeader>

      <Separator className="bg-[#D5D6E2]"/>

      {/* Upload Files Option */}
      <div className="flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3 p-2 rounded">
          <div className="border border-[#D5D6E2] p-1 rounded-[3px]">
            <Image src="/dashboardIcons/knoledgeIcon1.svg" width={20} height={20} alt=""/>
          </div>
          <h4 className="text-sm font-semibold text-[#22222F]">Upload File(s)</h4>
        </div>
        <MdKeyboardArrowRight size={20} className="text-[#8588AB]" />
      </div>

      {/* Text Redirect Option */}
      <div onClick={() => setChangeModal(!changeModal)} className="flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3 p-2 rounded">
          <div className="border border-[#D5D6E2] p-1 rounded-[3px]">
            <Image src="/dashboardIcons/knoledgeIcon2.svg" width={20} height={20} alt=""/>
          </div>
          <h4 className="text-sm font-semibold text-[#22222F]">Text</h4>
        </div>
        <MdKeyboardArrowRight size={20} className="text-[#8588AB]" />
      </div>
    </DialogContent>
  ) : (
    <DialogContent className="max-w-[560px]">
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
        </DialogTrigger>
        <DialogHeader>
          <DialogTitle className="mb-6 text-xl font-semibold text-[#22222F]">Add Text</DialogTitle>
        </DialogHeader>
        <Separator className="bg-[#D5D6E2] mb-6" />
        <label className="text-sm font-medium text-[#22222F]">File Name</label>
        <div className="mt-2">
          <input
            type="text"
            name="fileName"
            placeholder="Untitled text"
            className="placeholder:text-[#22222F] placeholder:text-sm placeholder:font-medium border border-[#D5D6E2] px-3 py-1 rounded-lg mb-4 w-full"
          />
        </div>

        <label className="text-sm font-medium text-[#22222F]">Text</label>
        <div className="mt-2">
          <textarea
            name="text"
            placeholder="Enter text"
            className="w-full placeholder:text-[#8588AB] placeholder:text-sm placeholder:font-semibld border border-[#D5D6E2] px-3 py-2 rounded-lg mb-6 h-24 text-sm font-medium text-[#22222F]"
          ></textarea>
        </div>
        <Separator className="bg-[#D5D6E2]" />
        {/* <DialogFooter> */}
        <DialogClose asChild>
          <div className="text-right mt-3">
            <Button
              onClick={() => setChangeModal(true)}
              type="submit"
              className="bg-[#217AFC] hover:bg-[#217AFC] border border-[#0D5AE8] cursor-pointer text-sm font-semibold text-[#FFFFFF]"
              style={{
                boxShadow: "0px 1px 1px 0px rgba(100, 102, 241, 0.12), 0px 2px 2px 0px rgba(100, 102, 241, 0.12)"
              }}
            >
              Add text
            </Button>
          </div>
        </DialogClose >
      </form>
    </DialogContent>
  );
}
