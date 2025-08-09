import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Coins,
  LineChart,
  Link2,
  PiggyBank,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";
import Hero from "@/components/hero";
import Explainer from "@/components/explainer";
import Testimonials from "@/components/testimonials";
import Founder from "@/components/founder";
import CtaWaitlist from "@/components/cta-waitlist";
import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#FFF8F0] text-[#181818]">
      <SiteNavbar />
      <main id="main" className="flex-1">
        <Hero />
        <Explainer />
        <section aria-labelledby="impact" className="py-12 md:py-20 md:pt-7">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <Badge className="bg-[#F5EAE0] text-[#7A2A31] hover:bg-[#F5EAE0]">
              Why Us?
            </Badge>
            <h2
              id="how"
              className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Round up purchases. Invest the difference. Grow, automatically.
            </h2>
            <p className="mt-2 mb-8 text-muted-foreground max-w-prose">
              Link your everyday card and let NestVault do the rest—no
              spreadsheets, no manual transfers.
            </p>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <Card className="border-[#EADFD6] bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp
                      className="h-5 w-5 text-[#D72638]"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-base">
                      Invested automatically
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Spare change from everyday purchases is invested into curated
                  ETFs that match your goals.
                </CardContent>
              </Card>
              <Card className="border-[#EADFD6] bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      className="h-5 w-5 text-[#D72638]"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-base">
                      Transparent by default
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Clear fees, clear impact. Track where every round-up goes and
                  how it’s performing.
                </CardContent>
              </Card>
              <Card className="border-[#EADFD6] bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Star
                      className="h-5 w-5 text-[#D72638]"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-base">
                      Made for momentum
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Celebrate micro-wins. See real-time progress toward your
                  savings goals.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Testimonials />
        <Founder />
        <CtaWaitlist />
      </main>
      <SiteFooter />
    </div>
  );
}
