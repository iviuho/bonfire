import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Button size="lg" variant="ghost" asChild>
      <Link href="/">
        <Image alt="bonfire logo" src="/bonfire_logo.svg" width={30} height={30} />
        bonfire
      </Link>
    </Button>
  );
}

export default function Header() {
  return (
    <div className="flex items-center min-h-15 p-4 gap-4">
      <Logo />
    </div>
  );
}
