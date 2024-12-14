"use client";

import { useRef, useState } from "react";

interface VideoCardProps {
  video: string; // Define the type of the 'video' prop as a string
}

export function VideoCard({ video }: VideoCardProps) {
  const [isPortrait, setIsPortrait] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="video-card">
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          className={`pointer-events-none mx-auto object-cover ${
            isPortrait ? "h-auto w-full" : "h-40 w-full"
          }`}
          onLoadedMetadata={(e) => {
            const videoElement = e.currentTarget;
            const isPortrait = videoElement.videoHeight > videoElement.videoWidth;
            setIsPortrait(isPortrait);
          }}
        />
      )}
      <button
        onClick={handleVideoClick}
        className="absolute top-2 right-2 mt-2 rounded bg-black px-4 py-2 text-white hover:bg-black-700"
      >
        View Full Video
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"

            >
              ✕
            </button>
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto max-h-screen max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
