"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BannerProps {
  onExploreClick?: () => void;
}

export function Banner({ onExploreClick }: BannerProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      {/* Banner Image */}
      <div className="relative w-full h-auto min-h-[300px] md:min-h-[400px]">
        <Image
          src="/banner.png"
          alt="Unlock Your Potential - LearnForEarn"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        
        {/* CTA Button Overlay - positioned on the banner */}
        <div className="absolute bottom-6 right-6 z-10">
          <Button
            onClick={onExploreClick}
            className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
          >
            EXPLORE COURSES
          </Button>
        </div>
      </div>
    </div>
  );
}

