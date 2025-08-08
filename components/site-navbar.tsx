"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PiggyBank } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EADFD6] bg-[#FFF8F0]/80 backdrop-blur">
      <div className="container max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <PiggyBank className="h-5 w-5 text-[#D72638]" aria-hidden="true" />
          <span className="font-semibold tracking-tight">NestVault</span>
          <span className="sr-only">NestVault home</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm hover:underline underline-offset-4"
          >
            How it works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm hover:underline underline-offset-4"
          >
            Testimonials
          </Link>
          <Link
            href="#founder"
            className="text-sm hover:underline underline-offset-4"
          >
            Founder
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button
            className="bg-[#D72638] hover:bg-[#B51F2F] text-white"
            asChild
          >
            <Link href="#waitlist">Join the waitlist</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[#EADFD6] p-2"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="i-bars h-[14px] w-[18px] relative">
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-[2px] bg-[#181818] transition",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <div
              className={cn(
                "absolute inset-x-0 top-[6px] h-[2px] bg-[#181818] transition",
                open && "opacity-0"
              )}
            />
            <div
              className={cn(
                "absolute inset-x-0 top-[12px] h-[2px] bg-[#181818] transition",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#EADFD6] bg-[#FFF8F0]">
          <nav className="container max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <Link
              href="#features"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              How it works
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Testimonials
            </Link>
            <Link
              href="#founder"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Founder
            </Link>
            <Button
              className="mt-2 bg-[#D72638] hover:bg-[#B51F2F] text-white"
              asChild
            >
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
