"use client"

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function DialogCloseContent() {
  const router = useRouter()

  const handleTextClick = () => {
    router.push("/your-target-route") // ✅ replace with actual route
  }

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-5 font-semibold">Add new knowledge</DialogTitle>
        <DialogDescription className="text-sm text-[#8588AB]">
          Sync files and text, and grant the AI access to these sources as knowledge during interactions.
        </DialogDescription>
      </DialogHeader>

      <Separator />

      {/* Upload Files Option */}
      <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
        <Image src="/google.png" width={20} height={20} alt="Files icon" className="border p-1 rounded" />
        <h4 className="text-sm font-semibold text-[#22222F]">Upload File(s)</h4>
      </div>

      {/* Text Redirect Option */}
      <div
        className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={handleTextClick}
      >
        <Image src="/google.png" width={20} height={20} alt="Text icon" className="border p-1 rounded" />
        <h4 className="text-sm font-semibold text-[#22222F]">Text</h4>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}
