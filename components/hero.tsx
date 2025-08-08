import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section aria-labelledby="hero" className="pt-10 md:pt-16">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-5">
          <h1
            id="hero"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            {"The Future of Saving, One Round-Up at a Time."}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-prose">
            Micro-savings that invest your spare change into curated
            ETFs—automatically. Built for Gen Z and Millennials who want
            passive, transparent wealth-building.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-[#D72638] hover:bg-[#B51F2F] text-white"
              asChild
            >
              <Link href="#waitlist">Join the pre-launch waitlist</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#EADFD6] text-[#181818]"
              asChild
            >
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {"No spam. Leave anytime. We’ll notify you when beta is live."}
          </p>
        </div>

        <div className="relative">
          {/* Lightweight device frame mock */}
          <div className="relative mx-auto w-full max-w-[420px] aspect-[9/19] rounded-[36px] border-2 border-[#EADFD6] bg-white shadow-sm overflow-hidden">
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full bg-[#EADFD6]"
              aria-hidden="true"
            />
            <Image
              src="/nestvault-app-dashboard.png"
              alt="NestVault app dashboard preview"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
