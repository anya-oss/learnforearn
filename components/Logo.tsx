import * as React from "react";
import Image from "next/image";

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className || ""} group`}>
      {/* Logo Image in White Circle */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md ring-2 ring-blue-200/50 group-hover:ring-orange-300/50 transition-all duration-300 p-1.5">
          <Image
            src="/logo.png"
            alt="LearnForEarn Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain rounded-full"
            priority
          />
        </div>
      </div>
      
      {/* Text in White Circle */}
      {showText && (
        <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          <div className="relative rounded-full bg-white shadow-md ring-2 ring-blue-200/50 group-hover:ring-orange-300/50 transition-all duration-300 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
            <span className="text-xs sm:text-sm md:text-base font-bold text-blue-900 uppercase tracking-tight whitespace-nowrap">
              LEARN FOR EARN
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

