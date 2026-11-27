"use client";

import React, { useEffect } from "react";
import { X, Sparkles, ExternalLink, Clock } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./SocialIcons";

export type UpcomingPlatform = "instagram" | "tiktok";

interface ComingSoonModalProps {
  platform: UpcomingPlatform | null;
  onClose: () => void;
}

const PLATFORM_INFO: Record<
  UpcomingPlatform,
  {
    name: string;
    headline: string;
    message: string;
    accentBg: string;
    accentText: string;
    icon: React.ReactNode;
  }
> = {
  instagram: {
    name: "Instagram",
    headline: "Instagram Page — Upcoming Soon!",
    message:
      "Get ready for daily sparkles, adorable Reels, and behind-the-scenes snapshots of Pinky! Our official Instagram page is launching soon.",
    accentBg: "bg-[#E1306C]/12 border-[#E1306C]/25",
    accentText: "text-[#C8235D]",
    icon: <InstagramIcon className="w-6 h-6" />,
  },
  tiktok: {
    name: "TikTok",
    headline: "TikTok Page — Upcoming Soon!",
    message:
      "Funny facial expressions, playful jumps, and catchy dances are on the way! Pinky's official TikTok page is currently getting ready to launch.",
    accentBg: "bg-[#3D112A]/10 border-[#3D112A]/20",
    accentText: "text-[#3D112A]",
    icon: <TikTokIcon className="w-6 h-6" />,
  },
};

export function ComingSoonModal({ platform, onClose }: ComingSoonModalProps) {
  useEffect(() => {
    if (!platform) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [platform, onClose]);

  if (!platform) return null;

  const info = PLATFORM_INFO[platform];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3D112A]/55 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={onClose}
    >
      <div
        className="animate-pop-in relative w-full max-w-md rounded-[2rem] bg-white p-7 sm:p-8 text-center border-2 border-[#FF5CA8]/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F7] text-[#E62884] hover:bg-[#FFD6E9] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Avatar with golden ring */}
        <div className="mx-auto mb-4 relative w-24 h-24">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#FF5CA8] via-[#F5B73B] to-[#FF8DC2] shadow-lg">
            <img
              src="/media/profile.jpg"
              alt="Inky Pinky"
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F5B73B] text-white shadow-md">
            <Clock className="w-4 h-4" />
          </span>
        </div>

        {/* Platform pill */}
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-bold mb-3 ${info.accentBg} ${info.accentText}`}
        >
          {info.icon}
          <span>{info.name} • Upcoming Soon</span>
        </div>

        <h3
          id="coming-soon-title"
          className="font-display text-2xl sm:text-3xl font-bold text-[#3D112A] mb-3"
        >
          {info.headline}
        </h3>

        <p className="text-[#6E3B56] text-base leading-relaxed mb-6">
          {info.message}
        </p>

        <div className="rounded-2xl bg-[#FFF4F9] border border-[#FF5CA8]/20 p-4 mb-6 text-sm text-[#5C2342]">
          <span className="inline-flex items-center gap-1.5 font-bold text-[#E62884]">
            <Sparkles className="w-4 h-4" />
            Can&apos;t wait to see Pinky?
          </span>{" "}
          Watch Pinky&apos;s latest reels right now on our live Facebook &amp;
          YouTube pages!
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href="https://fb.com/inkypinkycat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF5CA8] to-[#E62884] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#FF5CA8]/30 hover:brightness-105 transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>
            <a
              href="https://www.youtube.com/@InkyPinkyCat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF0033] to-[#D9002B] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#FF0033]/25 hover:brightness-105 transition-all"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center rounded-full border-2 border-[#FFD6E9] bg-white px-5 py-3 text-sm font-bold text-[#6E3B56] hover:bg-[#FFF4F9] transition-colors cursor-pointer"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
