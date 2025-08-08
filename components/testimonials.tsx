import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="social-proof"
      className="py-12 md:py-20 bg-white"
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2
              id="social-proof"
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Social proof
            </h2>
            <p className="mt-2 text-muted-foreground max-w-prose">
              Join early users turning everyday purchases into long-term wealth.
            </p>
          </div>
          <div className="flex items-center gap-1 text-[#D72638]">
            <Star
              className="h-4 w-4 fill-[#D72638] text-[#D72638]"
              aria-hidden="true"
            />
            <Star
              className="h-4 w-4 fill-[#D72638] text-[#D72638]"
              aria-hidden="true"
            />
            <Star
              className="h-4 w-4 fill-[#D72638] text-[#D72638]"
              aria-hidden="true"
            />
            <Star
              className="h-4 w-4 fill-[#D72638] text-[#D72638]"
              aria-hidden="true"
            />
            <Star
              className="h-4 w-4 fill-[#D72638] text-[#D72638]"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm text-muted-foreground">
              5.0 average from beta cohort
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            name="Amara"
            handle="@amara"
            text="I saved without thinking about it. Seeing the invested change grow is addictive."
          />
          <TestimonialCard
            name="Leo"
            handle="@leo"
            text="The round-ups add up fast. Love the transparency and simple charts."
          />
          <TestimonialCard
            name="Priya"
            handle="@priya"
            text="Perfect for busy weeks—set and forget, but still feel in control."
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  handle,
  text,
}: {
  name: string;
  handle: string;
  text: string;
}) {
  return (
    <Card className="border-[#EADFD6] bg-[#FFF8F0]">
      <CardContent className="pt-6">
        <p className="text-sm">{`"${text}"`}</p>
        <div className="mt-4 flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <div className="font-medium">{name}</div>
            <div className="text-muted-foreground">{handle}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
