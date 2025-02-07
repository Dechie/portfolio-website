"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"
import { Modal } from "@/components/ui/modal_dialog" // Updated import path
import Image from "next/image"

interface VideoCardProps {
  video: string
  image: string
  title: string
}

export function VideoCard({ video, image, title }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full h-40">
      <Image src={image || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          variant="secondary"
          className="bg-white/80 hover:bg-white/90 text-black"
          onClick={() => setIsOpen(true)}
        >
          <PlayIcon className="w-4 h-4 mr-2" />
          Play Video
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <video src={video} controls className="w-full" />
      </Modal>
    </div>
  )
}

