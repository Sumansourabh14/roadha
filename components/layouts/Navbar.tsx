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
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Learn", href: "/learn" },
  // { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href
      ? "text-blue-600 dark:text-blue-400 font-semibold"
      : "text-muted-foreground hover:text-primary";

  return (
    <header className="w-full max-w-[1300px] mx-auto fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-lg border-2 shadow-xl border-gray-100 bg-white dark:bg-black px-4 sm:px-6">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {SITE_METADATA.title}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-2 w-full">Login</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
