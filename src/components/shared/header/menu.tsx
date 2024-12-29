import { EllipsisVerticalIcon, ShoppingCart, ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import ThemeToogler from "@/components/shared/header/theme-toggler";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs">
        <ThemeToogler />
        <Button asChild variant={"ghost"}>
          <Link href={"/cart"}>
            <ShoppingCart />
            Cart
          </Link>
        </Button>
        <Button asChild variant={"default"}>
          <Link href={"/signin"}>
            <UserIcon />
            Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden lg:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <EllipsisVerticalIcon/>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
                <SheetTitle>
                    Menu
                </SheetTitle>

                <SheetDescription/>
                <ThemeToogler/>
                <Button asChild variant={'ghost'}><Link href={'/cart'}><ShoppingCartIcon/>Cart</Link></Button>
                <Button asChild variant={'ghost'}><Link href={'/sign-in'}><UserIcon/>Sign In</Link></Button>

            </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
