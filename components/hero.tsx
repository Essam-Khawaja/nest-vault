import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhoneMock from "./phone-mock";

export default function Hero() {
  return (
    <section aria-labelledby="hero" className="pt-10 md:pt-16">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        {/* Copy */}
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
              className="border-[#EADFD6] text-[#181818] bg-transparent"
              asChild
            >
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {"No spam. Leave anytime. We’ll notify you when beta is live."}
          </p>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[620px]">
          {/* Soft background glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-6 -top-8 bottom-0 blur-2xl opacity-70"
            style={{
              background:
                "radial-gradient(60% 50% at 70% 20%, rgba(249,216,216,0.8), rgba(255,248,240,0) 70%), radial-gradient(40% 40% at 30% 80%, rgba(215,38,56,0.18), rgba(255,248,240,0) 60%)",
            }}
          />
          <div className="relative flex items-center justify-center h-full">
            {/* Back phone (decorative) */}
            <PhoneMock
              tilt="left"
              className="translate-x-10 translate-y-6 scale-[0.95] opacity-90"
            />
            {/* Front phone */}
            <PhoneMock tilt="right" className="-translate-x-6 -translate-y-4" />
          </div>
          <span className="sr-only">
            Two smartphone mockups showing NestVault balance, chart, and
            round-ups list
          </span>
        </div>
      </div>
    </section>
  );
}
