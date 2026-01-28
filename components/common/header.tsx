import Link from "next/link";
import { SparkleIcon, HomeIcon, CompassIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Suspense } from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="size-6 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">Projectory</span>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-12">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            {/* Navigation */}
            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium
                text-muted-foreground hover:text-foreground
                transition-colors hover:bg-muted/50 rounded-md"
              >
                <HomeIcon className="size-4" />
                <span>Home</span>
              </Link>

              <Link
                href="/explore"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium
                text-muted-foreground hover:text-foreground
                transition-colors hover:bg-muted/50 rounded-md"
              >
                <CompassIcon className="size-4" />
                <span>Explore</span>
              </Link>
            </nav>

            {/* Auth Section */}
            {/* Auth Section */}
            <div className="flex items-center gap-3">
              <Suspense fallback={<div>Loading auth...</div>}>
                <SignedOut>
                  <SignUpButton>
                    <Button>Sign Up</Button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <Button asChild>
                    <Link href="/submit" className="flex items-center gap-2">
                      <SparklesIcon className="size-4" />
                      Submit Project
                    </Link>
                  </Button>

                  <UserButton />
                </SignedIn>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
