import type React from "react";
import {
  Coffee,
  ShoppingBag,
  Bus,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

type PhoneMockProps = {
  screenshotSrc?: string | null;
  className?: string;
  tilt?: "none" | "left" | "right";
  label?: string;
};

export default function PhoneMock({
  screenshotSrc = null,
  className = "",
  tilt = "none",
  label = "NestVault app preview",
}: PhoneMockProps) {
  const rotate =
    tilt === "left" ? "-rotate-6" : tilt === "right" ? "rotate-6" : "";

  return (
    <figure
      aria-label={label}
      className={[
        "relative w-[260px] sm:w-[300px] md:w-[360px] aspect-[9/19]",
        "rounded-[34px] border-2 border-[#EADFD6] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
        "overflow-hidden",
        rotate,
        className,
      ].join(" ")}
    >
      {/* Notch */}
      <div
        aria-hidden="true"
        className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full bg-[#EADFD6]"
      />

      {/* Accent background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_60%_at_30%_0%,#FFECEC,transparent_60%)]"
      />

      {screenshotSrc ? (
        // Drop-in screenshot area
        <img
          src={screenshotSrc || "/placeholder.svg"}
          alt="In-app screenshot"
          className="absolute inset-2 rounded-[28px] object-cover border border-[#EADFD6]"
        />
      ) : (
        // Composed UI (no external image)
        <div className="absolute inset-2 rounded-[28px] border border-[#EADFD6] bg-white p-4 flex flex-col gap-3">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-[#D72638]" />
              <span className="text-xs font-semibold tracking-tight">
                NestVault
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[#6B6B6B]">
              <ShieldCheck
                className="h-3.5 w-3.5 text-[#22A06B]"
                aria-hidden="true"
              />
              <span>{"Secure"}</span>
            </div>
          </div>

          {/* Balance card */}
          <div className="rounded-xl border border-[#EADFD6] bg-[#FFF8F0] p-3">
            <div className="text-[11px] text-[#6B6B6B]">Total invested</div>
            <div className="mt-1 text-xl font-bold tracking-tight">
              $2,374.22
            </div>
            <div className="mt-1 inline-flex items-center text-[11px] text-[#22A06B]">
              <ArrowUpRight className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
              +7.3% this month
            </div>
            {/* Mini chart placeholder */}
            <div
              aria-hidden="true"
              className="mt-3 h-10 w-full rounded-md bg-[linear-gradient(180deg,rgba(215,38,56,0.18),transparent)] relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-60">
                <svg viewBox="0 0 120 40" className="h-full w-full">
                  <path
                    d="M0,30 C15,28 20,20 30,24 C40,28 45,18 55,20 C65,22 70,14 80,16 C90,18 95,10 110,12"
                    fill="none"
                    stroke="#D72638"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Round-ups list */}
          <div className="mt-1">
            <div className="text-[11px] text-[#6B6B6B] mb-1">
              Today’s round-ups
            </div>
            <ul className="flex flex-col gap-2">
              <RoundUpItem
                icon={
                  <Coffee
                    className="h-4 w-4 text-[#D72638]"
                    aria-hidden="true"
                  />
                }
                merchant="Latte • Blue Bottle"
                amount="$3.73"
                roundup="+$0.27"
              />
              <RoundUpItem
                icon={
                  <ShoppingBag
                    className="h-4 w-4 text-[#D72638]"
                    aria-hidden="true"
                  />
                }
                merchant="Groceries • Market"
                amount="$48.12"
                roundup="+$0.88"
              />
              <RoundUpItem
                icon={
                  <Bus className="h-4 w-4 text-[#D72638]" aria-hidden="true" />
                }
                merchant="Transit • Muni"
                amount="$2.25"
                roundup="+$0.75"
              />
            </ul>
          </div>
        </div>
      )}
    </figure>
  );
}

function RoundUpItem({
  icon,
  merchant,
  amount,
  roundup,
}: {
  icon: React.ReactNode;
  merchant: string;
  amount: string;
  roundup: string;
}) {
  return (
    <li className="flex items-center justify-between rounded-lg border border-[#EADFD6] bg-white px-2.5 py-2">
      <div className="flex items-center gap-2.5">
        <div className="rounded-md border border-[#EADFD6] bg-[#FFF8F0] p-1.5">
          {icon}
        </div>
        <div>
          <div className="text-[12px] font-medium leading-none">{merchant}</div>
          <div className="text-[11px] text-[#6B6B6B] mt-1">
            Charged {amount}
          </div>
        </div>
      </div>
      <div className="text-[12px] font-semibold text-[#D72638]">{roundup}</div>
    </li>
  );
}
