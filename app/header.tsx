"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [{ link: "/message", text: "메시지" }];

function Logo() {
  return (
    <Button size="lg" variant="ghost" asChild>
      <Link href="/">
        <Image alt="bonfire logo" src="/bonfire_logo.svg" width={30} height={30} loading="eager" />
        bonfire
      </Link>
    </Button>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex items-center min-h-15 p-4 gap-4">
      <Logo />

      <NavigationMenu>
        {menus.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} data-active={pathname === menu.link}>
              <Link href={menu.link}>{menu.text}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenu>
    </div>
  );
}
