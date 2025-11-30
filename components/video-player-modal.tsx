"use client"

import { useState, useEffect } from "react"
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"

export default function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl = "Hf6abfL1la4",
}: {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // 🔥 Autoplay video when the modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true)
      setIsMuted(true) // OPTIONAL: prevents browser autoplay block
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleClose = () => {
    setIsPlaying(false)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center px-4 animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="
          bg-black 
          w-full 
          max-w-3xl     /* smaller size */
          rounded-2xl   
          overflow-hidden 
          shadow-2xl 
          animate-scale-up 
          relative
        "
        onClick={(e) => e.stopPropagation()} // ❗ prevents closing when clicking inside
      >
        {/* 🔥 Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 transition z-50 bg-black/40 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* VIDEO AREA */}
        <div className="relative bg-black aspect-video">


          {/* 📌 AUTOPLAY MODE — show iframe immediately */}
          {isPlaying && (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=${isMuted ? 1 : 0}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}

          {/* 📌 If autoplay fails (rare), show thumbnail fallback */}
          {!isPlaying && (
            <>
              <img
                src="/video_parralax.jpg"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition border-2 border-white mb-6"
                >
                  <Play size={32} className="text-white ml-1" />
                </button>
                <p className="text-white text-sm tracking-widest">VIDEO TOUR</p>
              </div>
            </>
          )}

          {/* CONTROLS BAR */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 px-4 py-3">
              <div className="flex justify-between items-center">

                <div className="flex gap-4">
                  <button onClick={() => setIsPlaying(false)} className="text-white">
                    <Pause size={18} />
                  </button>

                  <button onClick={() => setIsMuted(!isMuted)} className="text-white">
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>

                <button className="text-white">
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* INFO BAR */}
        <div className="bg-[#151515] px-5 py-3 border-t border-[#53675C]/30">
          <h2 className="text-white font-semibold text-sm">
            ANAPLAK Art and Glam Salon – Studio Tour
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Explore our premium salon facilities and services in Maduravoyal, Chennai.
          </p>
        </div>
      </div>
    </div>
  )
}
