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
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
          <h4 className="text-sm font-semibold text-[#22222F]">Upload File(s)</h4>
        </div>
        <MdKeyboardArrowRight size={20} className="text-gray-500" />
      </div>

      {/* Text Redirect Option */}
      <div onClick={() => setChangeModal(!changeModal)} className="flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer p-2 rounded">
          <div className="border border-gray-300 p-1.5 rounded text-gray-600">
            <IoText className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-semibold text-[#22222F]">Text</h4>
        </div>
        <MdKeyboardArrowRight size={20} className="text-gray-500" />
      </div>
    </DialogContent>
  ) : (
    <DialogContent className="max-w-[560px]">
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
        </DialogTrigger>
        <DialogHeader>
          <DialogTitle className="mb-4">Add Text</DialogTitle>
          <Separator className="bg-gray-500 mb-4" />
        </DialogHeader>
        <label>File Name</label>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Input type="text" name="fileName" placeholder="Untitled text" className="mt-3 mb-2 text-[#22222F] text-xl" />
          </div>
          <label>Text</label>
          <div className="grid gap-3">
            <textarea
              name="text"
              placeholder="Enter text"
              className="text-[#22222F] text-sm border px-3 py-1 rounded-lg mb-6 h-24"
            ></textarea>
          </div>
        </div>
        {/* <DialogFooter> */}
        <DialogClose asChild>
        <div className="text-right border-t">
          <Button onClick={() => setChangeModal(true)} type="submit" className="bg-blue-500 mt-3">Add text</Button>
        </div>
        </DialogClose>
      </form>
    </DialogContent>
  );
}
