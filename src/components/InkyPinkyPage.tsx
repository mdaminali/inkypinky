"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Heart,
  Star,
  CheckCircle2,
  ExternalLink,
  Film,
  Palette,
  ShieldCheck,
  Smile,
  Compass,
  Clock,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  PawPendantIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./SocialIcons";
import { ComingSoonModal, UpcomingPlatform } from "./ComingSoonModal";
import { ReelPlayer } from "./ReelPlayer";

const PERSONALITY_TRAITS = [
  { label: "Cute", emoji: "💖", desc: "Melts hearts with every blink and smile" },
  { label: "Cheerful", emoji: "✨", desc: "Always radiating bright, happy energy" },
  { label: "Funny", emoji: "😹", desc: "Loves making silly, expressive faces" },
  { label: "Playful", emoji: "🧶", desc: "Jumping, dancing, and chasing toys" },
  { label: "Adventurous", emoji: "🗺️", desc: "Curious explorer of exciting new places" },
  { label: "Innocent", emoji: "🌸", desc: "A little mischievous, always pure-hearted" },
  { label: "Affectionate", emoji: "🤗", desc: "Warm, friendly, and loves making friends" },
];

const SIGNATURE_FEATURES = [
  {
    title: "Fluffy Bright-Pink Fur",
    description:
      "Soft, realistic, vibrant bright-pink fur with a fluffy curled pink tail that bounces as she moves.",
    swatch: "#FF5CA8",
  },
  {
    title: "Sparkling Pink Eyes",
    description:
      "Round cute face with two big, expressive sparkling pink eyes, tiny pink nose, small adorable ears, and a sweet smiling mouth.",
    swatch: "#E62884",
  },
  {
    title: "Soft White Accents",
    description:
      "Her muzzle, chest, and little paws are covered in cloud-soft pure white fur for an unmistakable silhouette.",
    swatch: "#FFFFFF",
  },
  {
    title: "Pink Collar & Golden Paw",
    description:
      "Wears a shiny pink collar finished with her signature small golden paw-shaped pendant.",
    swatch: "#F5B73B",
  },
];

const CONSISTENCY_RULES = [
  "Always maintain the exact same bright-pink fur color across every scene.",
  "Keep the same round face, big sparkling eyes, tiny pink nose, and kitten body proportions.",
  "Always retain her shiny pink collar and golden paw-shaped pendant.",
  "Keep the same fluffy curled pink tail and soft white chest, muzzle, and little paws.",
  "Never change her character design between scenes or episodes.",
  "Maintain a cute, high-quality 3D animated appearance with cinematic lighting.",
];

const COLOR_SWATCHES = [
  { name: "Pinky Fur", hex: "#FF5CA8", border: false },
  { name: "Collar Pink", hex: "#E62884", border: false },
  { name: "Blush Glow", hex: "#FFD6E9", border: false },
  { name: "Golden Paw", hex: "#F5B73B", border: false },
  { name: "Soft White", hex: "#FFFFFF", border: true },
];

export function InkyPinkyPage() {
  const [upcomingPlatform, setUpcomingPlatform] =
    useState<UpcomingPlatform | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Playful organic background blobs inspired by Inky Pinky cover art */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#FF5CA8]/18 blur-3xl" />
        <div className="absolute top-[22%] -right-32 h-[480px] w-[480px] rounded-full bg-[#FF8BC2]/22 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[20%] h-[420px] w-[420px] rounded-full bg-[#F5B73B]/14 blur-3xl" />
      </div>

      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-[#FF5CA8]/15 bg-[#FFF4F9]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-full p-0.5 bg-gradient-to-tr from-[#FF5CA8] via-[#F5B73B] to-[#FF8DC2] shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/media/profile.jpg"
                alt="Inky Pinky logo"
                className="h-full w-full rounded-full object-cover bg-white"
              />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-[#3D112A] block leading-none">
                Inky Pinky
              </span>
              <span className="text-xs font-bold text-[#E62884]">
                Official Character Page 💖
              </span>
            </div>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-bold text-[#5C2342]"
          >
            <a href="#reel" className="hover:text-[#E62884] transition-colors">
              Reel Preview
            </a>
            <a href="#about" className="hover:text-[#E62884] transition-colors">
              Meet Pinky
            </a>
            <a href="#style" className="hover:text-[#E62884] transition-colors">
              Style &amp; Rules
            </a>
            <a
              href="#socials"
              className="hover:text-[#E62884] transition-colors"
            >
              Socials
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/@InkyPinkyCat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe on YouTube"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0033] to-[#D9002B] px-3.5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#FF0033]/25 hover:brightness-105 transition-all"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span className="hidden lg:inline">YouTube</span>
            </a>
            <a
              href="https://fb.com/inkypinkycat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF5CA8] to-[#E62884] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-[#FF5CA8]/30 hover:brightness-105 transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Follow on Facebook</span>
              <span className="sm:hidden">Facebook</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* Left Content */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B73B]/50 bg-white/90 px-4 py-1.5 text-xs sm:text-sm font-extrabold text-[#B87A0B] shadow-sm mb-5">
                  <PawPendantIcon className="w-4 h-4 text-[#F5B73B]" />
                  <span>3D Animated Kitten • Facebook &amp; YouTube Reels</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3D112A] leading-[1.08] mb-5">
                  Say Hello to{" "}
                  <span className="bg-gradient-to-r from-[#FF5CA8] via-[#E62884] to-[#FF4B9F] bg-clip-text text-transparent">
                    Pinky!
                  </span>{" "}
                  <span aria-hidden="true">💖</span>
                </h1>

                <p className="text-base sm:text-lg text-[#5C2342] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                  <strong>Inky Pinky</strong> stars{" "}
                  <strong className="text-[#E62884]">Pinky</strong> — an
                  adorable, playful, and lovable little pink kitten with soft,
                  fluffy bright-pink fur, sparkling pink eyes, and a shiny pink
                  collar with her lucky golden paw pendant.
                </p>

                {/* Primary Social Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                  <a
                    href="https://fb.com/inkypinkycat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5CA8] to-[#E62884] px-6 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-[#FF5CA8]/35 hover:scale-[1.02] hover:brightness-105 transition-all"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    <span>fb.com/inkypinkycat</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] uppercase tracking-wide">
                      Live
                    </span>
                  </a>

                  <a
                    href="https://www.youtube.com/@InkyPinkyCat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF0033] to-[#D9002B] px-6 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-[#FF0033]/25 hover:scale-[1.02] hover:brightness-105 transition-all"
                  >
                    <YouTubeIcon className="w-5 h-5" />
                    <span>@InkyPinkyCat</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] uppercase tracking-wide">
                      Live
                    </span>
                  </a>

                  <a
                    href="#reel"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF5CA8]/35 bg-white/90 px-6 py-3.5 text-sm sm:text-base font-extrabold text-[#E62884] hover:bg-[#FFF0F7] transition-colors"
                  >
                    <Film className="w-5 h-5" />
                    <span>Watch Reel</span>
                  </a>
                </div>

                {/* Quick Platform Links Row */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <button
                    type="button"
                    onClick={() => setUpcomingPlatform("instagram")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#5C2342] border border-[#FF5CA8]/20 shadow-sm hover:border-[#FF5CA8] hover:text-[#C8235D] transition-all cursor-pointer"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                    <span>Instagram</span>
                    <span className="rounded-full bg-[#FFF0F7] px-2 py-0.5 text-[10px] font-extrabold text-[#E62884]">
                      Soon
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUpcomingPlatform("tiktok")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#5C2342] border border-[#FF5CA8]/20 shadow-sm hover:border-[#FF5CA8] hover:text-[#3D112A] transition-all cursor-pointer"
                  >
                    <TikTokIcon className="w-4 h-4 text-[#3D112A]" />
                    <span>TikTok</span>
                    <span className="rounded-full bg-[#FFF0F7] px-2 py-0.5 text-[10px] font-extrabold text-[#E62884]">
                      Soon
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Visual Showcase */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-xl">
                  {/* Cover art card */}
                  <div className="relative overflow-hidden rounded-[2.25rem] border-4 border-white bg-white pinky-shadow">
                    <img
                      src="/media/cover.jpg"
                      alt="Inky Pinky — Pinky the fluffy bright-pink kitten"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Floating circular profile badge */}
                  <div className="animate-float-slow absolute -bottom-6 -left-3 sm:-left-6 flex items-center gap-3 rounded-full bg-white/95 p-2 pr-5 shadow-xl border-2 border-[#FFD6E9]">
                    <img
                      src="/media/profile.jpg"
                      alt="Pinky smiling avatar"
                      className="h-14 w-14 rounded-full object-cover border-2 border-[#FF5CA8]"
                    />
                    <div className="text-left">
                      <p className="font-display text-base font-bold text-[#3D112A] leading-tight">
                        Pinky 💖
                      </p>
                      <p className="text-xs font-bold text-[#E62884]">
                        Sweet, Playful &amp; Curious
                      </p>
                    </div>
                  </div>

                  {/* Floating golden pendant tag */}
                  <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 rounded-full bg-gradient-to-r from-[#F5B73B] to-[#E59E1B] px-4 py-2 text-xs font-extrabold text-white shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>High-Quality 3D Animated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED REEL PREVIEW */}
        <section id="reel" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pinky-card rounded-[2.5rem] p-6 sm:p-10 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <ReelPlayer />
                </div>

                <div className="lg:col-span-7 text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F7] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E62884] mb-4">
                    <Film className="w-4 h-4" />
                    Featured Reel Preview
                  </span>

                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3D112A] mb-4">
                    Watch Pinky Play, Jump &amp; Dance!
                  </h2>

                  <p className="text-[#5C2342] text-base sm:text-lg leading-relaxed mb-6">
                    Pinky is bursting with expressive energy! From dancing and
                    playing with little toys to making funny facial expressions
                    and going on exciting adventures, every short reel is crafted
                    to bring a bright smile to your feed.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                    <div className="rounded-2xl bg-[#FFF4F9] p-4 border border-[#FF5CA8]/15">
                      <Smile className="w-5 h-5 text-[#FF5CA8] mb-2" />
                      <p className="font-display font-bold text-[#3D112A]">
                        Expressive
                      </p>
                      <p className="text-xs text-[#6E3B56]">
                        Big sparkling eyes &amp; funny faces
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#FFF4F9] p-4 border border-[#FF5CA8]/15">
                      <Compass className="w-5 h-5 text-[#E62884] mb-2" />
                      <p className="font-display font-bold text-[#3D112A]">
                        Adventurous
                      </p>
                      <p className="text-xs text-[#6E3B56]">
                        Always exploring fun new places
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#FFF4F9] p-4 border border-[#FF5CA8]/15">
                      <Heart className="w-5 h-5 text-[#F5B73B] mb-2" />
                      <p className="font-display font-bold text-[#3D112A]">
                        Sweet &amp; Innocent
                      </p>
                      <p className="text-xs text-[#6E3B56]">
                        A tiny bit mischievous, always lovable
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <a
                      href="https://fb.com/inkypinkycat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF5CA8] to-[#E62884] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#FF5CA8]/30 hover:brightness-105 transition-all"
                    >
                      <FacebookIcon className="w-4 h-4" />
                      <span>Watch More Reels on Facebook</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@InkyPinkyCat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0033] to-[#D9002B] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#FF0033]/25 hover:brightness-105 transition-all"
                    >
                      <YouTubeIcon className="w-4 h-4" />
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEET PINKY — APPEARANCE & PERSONALITY */}
        <section id="about" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E62884] border border-[#FF5CA8]/20 shadow-sm mb-3">
                <Sparkles className="w-4 h-4" />
                Character Profile
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3D112A] mb-3">
                Everything About Pinky 💖
              </h2>
              <p className="text-[#5C2342] text-base sm:text-lg">
                Designed to be instantly recognizable, full of warmth, and
                bursting with joyful kitten charm.
              </p>
            </div>

            {/* 4 Signature Appearance Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {SIGNATURE_FEATURES.map((item) => (
                <div
                  key={item.title}
                  className="pinky-card rounded-3xl p-6 hover:-translate-y-1 transition-transform"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="h-9 w-9 rounded-2xl shadow-inner border-2 border-[#FF5CA8]/25 shrink-0"
                      style={{ backgroundColor: item.swatch }}
                    />
                    <h3 className="font-display text-lg font-bold text-[#3D112A] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#5C2342] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Personality Traits */}
            <div className="rounded-[2.25rem] bg-gradient-to-br from-[#FF5CA8] via-[#F23F95] to-[#E62884] p-7 sm:p-10 text-white pinky-shadow">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider mb-2">
                    <Star className="w-3.5 h-3.5 text-[#FFE08A]" />
                    Personality
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold">
                    What Makes Pinky So Lovable
                  </h3>
                </div>
                <p className="text-sm text-pink-100 max-w-md">
                  Sometimes she acts a little mischievous, but she is always
                  sweet, curious, friendly, and innocent.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {PERSONALITY_TRAITS.map((trait) => (
                  <div
                    key={trait.label}
                    className="rounded-2xl bg-white/16 backdrop-blur-md border border-white/25 p-4 hover:bg-white/22 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl" aria-hidden="true">
                        {trait.emoji}
                      </span>
                      <span className="font-display text-lg font-bold">
                        {trait.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-pink-50/95 leading-snug">
                      {trait.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL STYLE & CHARACTER CONSISTENCY RULES */}
        <section id="style" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Visual Style + Color Palette */}
              <div className="lg:col-span-5 pinky-card rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E62884] mb-4">
                    <Palette className="w-4 h-4" />
                    Visual Style
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3D112A] mb-4">
                    High-Quality 3D Animated Look
                  </h2>
                  <p className="text-[#5C2342] text-base leading-relaxed mb-6">
                    Crafted as a charming 3D animated cartoon character with
                    soft, realistic fluffy fur, adorable facial expressions,
                    large expressive eyes, cinematic lighting, vibrant colors,
                    and smooth animation.
                  </p>
                </div>

                {/* Official Color Swatches */}
                <div className="rounded-2xl bg-[#FFF4F9] p-5 border border-[#FF5CA8]/15">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#E62884] mb-3">
                    Official Character Palette
                  </p>
                  <div className="grid grid-cols-5 gap-2">
                    {COLOR_SWATCHES.map((color) => (
                      <div key={color.name} className="text-center">
                        <div
                          className={`mx-auto h-10 w-10 rounded-xl shadow-sm mb-1.5 ${
                            color.border ? "border border-[#FFD6E9]" : ""
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={`${color.name} (${color.hex})`}
                        />
                        <p className="text-[11px] font-bold text-[#3D112A] leading-tight">
                          {color.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consistency Rules */}
              <div className="lg:col-span-7 pinky-card rounded-[2rem] p-7 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E6] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#B87A0B] mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#F5B73B]" />
                  Character Consistency Rules
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3D112A] mb-5">
                  Keeping Pinky True to Her Design
                </h2>

                <ul className="space-y-3.5">
                  {CONSISTENCY_RULES.map((rule) => (
                    <li
                      key={rule}
                      className="flex items-start gap-3 rounded-2xl bg-[#FFF4F9]/90 p-3.5 border border-[#FF5CA8]/15"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#FF5CA8] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-semibold text-[#4B1934]">
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL HUB SECTION */}
        <section id="socials" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E62884] border border-[#FF5CA8]/20 shadow-sm mb-3">
                <PawPendantIcon className="w-4 h-4 text-[#F5B73B]" />
                Follow Inky Pinky
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3D112A] mb-3">
                Join Pinky&apos;s Adventures Everywhere
              </h2>
              <p className="text-[#5C2342] text-base sm:text-lg">
                Follow our official Facebook and YouTube pages today! Instagram
                and TikTok pages are launching soon — click any upcoming
                platform to check its status.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Facebook — LIVE */}
              <a
                href="https://fb.com/inkypinkycat"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#FF5CA8] to-[#E62884] p-6 text-white pinky-shadow hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <FacebookIcon className="w-6 h-6" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#E62884]">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Now
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-1">
                    Facebook
                  </h3>
                  <p className="text-sm text-pink-100 mb-5">
                    fb.com/inkypinkycat
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-extrabold">
                  <span>Visit Page</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>

              {/* YouTube — LIVE */}
              <a
                href="https://www.youtube.com/@InkyPinkyCat"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#FF0033] to-[#D9002B] p-6 text-white shadow-xl shadow-[#FF0033]/25 hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <YouTubeIcon className="w-6 h-6" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#D9002B]">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Now
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-1">
                    YouTube
                  </h3>
                  <p className="text-sm text-rose-100 mb-5">
                    youtube.com/@InkyPinkyCat
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-extrabold">
                  <span>Visit Channel</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>

              {/* Instagram — Upcoming Soon */}
              <button
                type="button"
                onClick={() => setUpcomingPlatform("instagram")}
                className="group text-left flex flex-col justify-between rounded-3xl pinky-card p-6 hover:-translate-y-1 hover:border-[#FF5CA8] transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E1306C]/10 text-[#E1306C]">
                      <InstagramIcon className="w-6 h-6" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF0F7] px-3 py-1 text-xs font-extrabold text-[#E62884]">
                      <Clock className="w-3.5 h-3.5" />
                      Upcoming Soon
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#3D112A] mb-1">
                    Instagram
                  </h3>
                  <p className="text-sm text-[#6E3B56] mb-5">
                    Daily Reels, sparkles &amp; cute Pinky moments coming soon.
                  </p>
                </div>
                <span className="text-sm font-extrabold text-[#E62884] group-hover:underline">
                  Check Launch Info →
                </span>
              </button>

              {/* TikTok — Upcoming Soon */}
              <button
                type="button"
                onClick={() => setUpcomingPlatform("tiktok")}
                className="group text-left flex flex-col justify-between rounded-3xl pinky-card p-6 hover:-translate-y-1 hover:border-[#FF5CA8] transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3D112A]/10 text-[#3D112A]">
                      <TikTokIcon className="w-6 h-6" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF0F7] px-3 py-1 text-xs font-extrabold text-[#E62884]">
                      <Clock className="w-3.5 h-3.5" />
                      Upcoming Soon
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#3D112A] mb-1">
                    TikTok
                  </h3>
                  <p className="text-sm text-[#6E3B56] mb-5">
                    Fun dances &amp; hilarious expressions coming soon.
                  </p>
                </div>
                <span className="text-sm font-extrabold text-[#E62884] group-hover:underline">
                  Check Launch Info →
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#FF5CA8]/20 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-4 py-8 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/media/profile.jpg"
              alt="Inky Pinky"
              className="h-10 w-10 rounded-full object-cover border-2 border-[#FF5CA8]"
            />
            <div>
              <p className="font-display text-base font-bold text-[#3D112A]">
                Inky Pinky 💖
              </p>
              <p className="text-xs text-[#6E3B56]">
                © {new Date().getFullYear()} Inky Pinky. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://fb.com/inkypinkycat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inky Pinky on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5CA8] text-white hover:bg-[#E62884] transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@InkyPinkyCat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inky Pinky on YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0033] text-white hover:bg-[#D9002B] transition-colors"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setUpcomingPlatform("instagram")}
              aria-label="Inky Pinky on Instagram (Upcoming Soon)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F7] text-[#E1306C] hover:bg-[#FFD6E9] transition-colors cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setUpcomingPlatform("tiktok")}
              aria-label="Inky Pinky on TikTok (Upcoming Soon)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F7] text-[#3D112A] hover:bg-[#FFD6E9] transition-colors cursor-pointer"
            >
              <TikTokIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Upcoming Soon Modal for Instagram & TikTok */}
      <ComingSoonModal
        platform={upcomingPlatform}
        onClose={() => setUpcomingPlatform(null)}
      />
    </div>
  );
}
