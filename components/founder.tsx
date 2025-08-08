import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Founder() {
  return (
    <section id="founder" aria-labelledby="story" className="py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_480px] items-center">
        <div>
          <h2
            id="story"
            className="text-2xl sm:text-3xl font-bold tracking-tight"
          >
            Founder story
          </h2>
          <p className="mt-2 text-muted-foreground max-w-prose">
            NestVault started with a simple idea:{" "}
            {"saving shouldn’t feel like a chore."} Aliya and the team built a
            mobile-first experience that turns spare change into long-term
            momentum—transparent, ethical, and effortless.
          </p>
          <Separator className="my-6" />
          <p className="text-sm text-muted-foreground">
            {
              "We believe in social-good investing and radical transparency. With NestVault, you always know where your money goes—and why."
            }
          </p>
        </div>
        <div className="justify-self-center">
          <Image
            src="/founder-portrait-minimal.png"
            alt="Founder portrait"
            width={480}
            height={480}
            className="rounded-xl border border-[#EADFD6] bg-white object-cover"
          />
        </div>
      </div>
    </section>
  );
}
