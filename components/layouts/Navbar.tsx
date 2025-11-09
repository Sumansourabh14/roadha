"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "../selectors/LanguageSelector";
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
import { IssueItem, NavItem } from "@/types";

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
  const t = useTranslations("Navbar");

  const isActive = (href: string) =>
    pathname === href
      ? "text-green-600 dark:text-green-400 font-bold"
      : "text-muted-foreground hover:text-primary font-semibold";

  return (
    <header className="w-full max-w-[1440px] mx-auto px-8">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {t("brand")}
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex items-center gap-2">
          <ModeToggle />
          <LanguageSelector />
          <NavigationMenuItem className="list-none ml-2">
            <NavigationMenuTrigger className="text-muted-foreground font-semibold">
              {t.raw("issues").title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[300px] lg:w-[400px] grid-cols-1 lg:grid-cols-2">
                {t.raw("issues").items.map((item: IssueItem, index: number) => (
                  <ListItem key={index} href={item.link} title={item.title}>
                    {item.label}
                  </ListItem>
                ))}

                {/* <ListItem href="/issues/driving/drunk" title="Drunk driving">
                  Coming soon...
                </ListItem> */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuList>
            {t.raw("navItems").map((item: NavItem, index: number) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link href={item.link} className={isActive(item.link)}>
                    {item.name}
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
              <SheetTitle>{t("brand")}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4">
              <ModeToggle />
              <LanguageSelector />
              {t.raw("navItems").map((item: NavItem) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={isActive(item.link)}
                >
                  {item.name}
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
