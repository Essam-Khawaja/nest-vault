import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#EADFD6]">
      <div className="container max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} NestVault. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex items-center gap-4">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
