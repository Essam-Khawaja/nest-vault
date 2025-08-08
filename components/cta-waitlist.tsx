"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy, Share2 } from "lucide-react";

export default function CtaWaitlist() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const referralLink = useMemo(() => {
    if (!code) return "";
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://nestvault.app";
    return `${origin}/?ref=${encodeURIComponent(code)}`;
  }, [code]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast("Enter a valid email");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setCode(data.code);
      toast("You're on the list!", {
        description: "Share your referral link to move up the queue.",
      });
    } catch (err: any) {
      toast("Oops", { description: err.message || "Could not join waitlist." });
    } finally {
      setLoading(false);
    }
  }

  async function copyLink() {
    if (!referralLink) return;
    await navigator.clipboard.writeText(referralLink);
    toast("Copied referral link");
  }

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="py-12 md:py-20 bg-white"
    >
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="text-center space-y-3">
          <h2
            id="waitlist-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight"
          >
            Be first to join the beta
          </h2>
          <p className="text-muted-foreground">
            Get early access and help shape the future of effortless saving.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3"
        >
          <Input
            aria-label="Email address"
            type="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#FFF8F0] border-[#EADFD6]"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-[#D72638] hover:bg-[#B51F2F] text-white"
          >
            {loading ? "Submitting..." : "Join waitlist"}
          </Button>
        </form>

        {code && (
          <div className="mt-6 grid gap-3 rounded-lg border border-[#EADFD6] bg-[#FFF8F0] p-4">
            <div className="text-sm">
              Your referral code:{" "}
              <span className="font-mono font-semibold">{code}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                readOnly
                value={referralLink}
                className="bg-white border-[#EADFD6] text-sm"
              />
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-[#EADFD6]"
                  onClick={copyLink}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy link
                </Button>
                <Button asChild variant="outline" className="border-[#EADFD6]">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      "I just joined the NestVault beta. Turn spare change into long-term wealth."
                    )}&url=${encodeURIComponent(referralLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </a>
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Share your link to move up the queue.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground text-center">
          By joining, you agree to receive beta updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
