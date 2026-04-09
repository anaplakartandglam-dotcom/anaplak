"use client"

import { useState, useEffect } from "react"
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"

export default function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl = "https://youtube.com/shorts/k5HfkZ-OuS4",
}: {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // Extract YouTube ID from normal or shorts URL
  const extractYouTubeId = (url: string) => {
    try {
      if (url.includes("shorts/")) {
        return url.split("shorts/")[1].split("?")[0]
      }
      if (url.includes("watch?v=")) {
        return url.split("watch?v=")[1].split("&")[0]
      }
      return url
    } catch {
      return url
    }
  }

  const videoId = extractYouTubeId(videoUrl)

  // Autoplay when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true)
      setIsMuted(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleClose = () => {
    setIsPlaying(false)
    onClose()
  }

  return (
    <div
      id="video-player-modal"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center px-4 animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player modal"
    >
      <div
        className="bg-black w-full max-w-[420px] h-[calc(100dvh-30px)] rounded-2xl overflow-hidden shadow-2xl animate-scale-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 transition z-50 bg-black/40 rounded-full p-2"
          aria-label="Close video"
          aria-controls="video-player-modal"
        >
          <X size={24} />
        </button>

        {/* VIDEO AREA — VERTICAL 9:16 FOR SHORTS */}
        <div className="relative bg-black aspect-[9/16]">

          {/* IFRAME AUTOPLAY */}
          {isPlaying && (
            <iframe
              id="video-iframe"
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&playsinline=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video player"
            />
          )}

          {/* FALLBACK IMAGE IF YOUTUBE BLOCKS AUTOPLAY */}
          {!isPlaying && (
            <>
              <img
                src="/video_parralax.jpg"
                className="w-full h-full object-cover opacity-80"
                alt="Video thumbnail"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition border-2 border-white mb-6"
                  aria-label="Play studio tour"
                  aria-controls="video-iframe"
                >
                  <Play size={32} className="text-white ml-1" />
                </button>
                <p className="text-white text-sm tracking-widest">VIDEO TOUR</p>
              </div>
            </>
          )}

          {/* CONTROLS */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 px-4 py-3">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsPlaying(false)} 
                    className="text-white"
                    aria-label="Pause video"
                    aria-controls="video-iframe"
                  >
                    <Pause size={18} />
                  </button>

                  <button 
                    onClick={() => setIsMuted(!isMuted)} 
                    className="text-white"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    aria-controls="video-iframe"
                  >
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
      </div>
    </div>
  )
}
