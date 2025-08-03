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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const navLinks = [
  { name: "Learn", href: "/learn" },
  { name: "Resources", href: "/resources" },
  { name: "Ask", href: "/ask/roadha" },
  { name: "Road Safety Course", href: "/road-safety/beginner" },
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href
      ? "text-green-600 dark:text-green-400 font-bold"
      : "text-muted-foreground hover:text-primary font-semibold";

  return (
    <header className="w-full max-w-[1440px] mx-auto px-8">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {SITE_METADATA.title}
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex items-center">
          <ModeToggle />
          <NavigationMenuItem className="list-none ml-2">
            <NavigationMenuTrigger className="text-muted-foreground font-semibold">
              Issues
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[300px] lg:w-[400px] grid-cols-1 lg:grid-cols-2">
                <ListItem
                  href="/issues/driving/wrong-side"
                  title="Wrong side driving"
                >
                  Stop wrong side driving. Why? Let me show you
                </ListItem>
                <ListItem href="/issues/driving/drunk" title="Drunk driving">
                  Coming soon...
                </ListItem>
                <ListItem
                  href="/issues/driving/reckless"
                  title="Reckless driving"
                >
                  Coming soon...
                </ListItem>
                <ListItem
                  href="/issues/ethanol-blended-petrol"
                  title="Ethanol Blended Petrol"
                >
                  Why ethanol blended petrol is misleading?
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuList>
            {navLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link href={link.href} className={isActive(link.href)}>
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="px-8">
            <SheetHeader>
              <SheetTitle>Roadha</SheetTitle>
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
