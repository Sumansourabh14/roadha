"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SITE_METADATA } from "@/data/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../theme/ModeToggle";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Learn", href: "/learn" },
  { name: "Ask", href: "/ask/roadha" },
  { name: "Road Safety Course", href: "/road-safety/beginner" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href
      ? "text-green-600 dark:text-green-400 font-bold"
      : "text-muted-foreground hover:text-primary hover:underline font-semibold";

  return (
    <header className="w-full max-w-[1440px] mx-auto px-8">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {SITE_METADATA.title}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <ModeToggle />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href)}
            >
              {link.name}
            </Link>
          ))}
          {/* <Button>Login</Button> */}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="px-8">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4">
              <ModeToggle />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(link.href)}
                >
                  {link.name}
                </Link>
              ))}
              {/* <Button className="mt-2 w-full">Login</Button> */}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
