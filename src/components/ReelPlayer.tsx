"use client";

import React, { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX, Sparkles } from "lucide-react";

export function ReelPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px]">
      {/* Decorative soft glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-[#FF5CA8]/40 via-[#F5B73B]/25 to-[#FF94C7]/40 blur-2xl"
      />

      {/* Phone frame */}
      <div className="relative rounded-[2.6rem] bg-[#3D112A] p-3 shadow-2xl border-4 border-[#FFD6E9]">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] bg-[#240918]">
          <video
            ref={videoRef}
            src="/media/pinky-reel.mp4"
            poster="/media/profile.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />

          {/* Top pill */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3D112A]/65 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B73B]" />
              Pinky Reel
            </span>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3D112A]/65 backdrop-blur-md text-white hover:bg-[#FF5CA8] transition-colors cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Bottom overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3D112A]/90 via-[#3D112A]/40 to-transparent p-4 pt-10">
            <div className="flex items-end justify-between gap-2">
              <div className="text-left">
                <p className="font-display text-sm font-bold text-white">
                  @inkypinkycat
                </p>
                <p className="text-xs text-pink-100/90">
                  Playing &amp; dancing! 🩷✨
                </p>
              </div>
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF5CA8] to-[#E62884] text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
