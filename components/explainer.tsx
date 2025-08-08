import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, LineChart, Link2 } from "lucide-react";
import Image from "next/image";

export default function Explainer() {
  return (
    <section id="how-it-works" aria-labelledby="how" className="py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <Badge className="bg-[#F5EAE0] text-[#7A2A31] hover:bg-[#F5EAE0]">
              How it works
            </Badge>
            <h2
              id="how"
              className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Round up purchases. Invest the difference. Grow, automatically.
            </h2>
            <p className="mt-2 text-muted-foreground max-w-prose">
              Link your everyday card and let NestVault do the rest—no
              spreadsheets, no manual transfers.
            </p>
          </div>
          <Image
            src="/visa-debit-card-icon-minimal.png"
            alt="Linked card illustration"
            width={160}
            height={120}
            className="rounded-md border border-[#EADFD6] bg-white"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ExplainerItem
            icon={
              <Link2 className="h-5 w-5 text-[#D72638]" aria-hidden="true" />
            }
            title="1) Link"
            text="Securely connect your bank card in seconds."
          />
          <ExplainerItem
            icon={
              <Coins className="h-5 w-5 text-[#D72638]" aria-hidden="true" />
            }
            title="2) Round up"
            text="We round each purchase to the nearest dollar and collect the spare change."
          />
          <ExplainerItem
            icon={
              <LineChart
                className="h-5 w-5 text-[#D72638]"
                aria-hidden="true"
              />
            }
            title="3) Invest"
            text="Your change is invested into curated ETFs aligned to your goals."
          />
        </div>
      </div>
    </section>
  );
}

function ExplainerItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="border-[#EADFD6] bg-white">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-md border border-[#EADFD6] p-2 bg-[#FFF8F0]">
            {icon}
          </div>
          <div>
            <div className="font-semibold">{title}</div>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
