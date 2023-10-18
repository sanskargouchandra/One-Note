"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/spinner";
import React from "react";
import { NavLogo } from "./NavLogo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
     <NavLogo />

     <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">

     {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm" className="font-mono text-xl">
                Log-In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get One-Note Free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter One-Note
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        )}

     <ModeToggle />
     </div>
    </div>
  );
};
