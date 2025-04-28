import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "~/components/ui/sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <div className="flex flex-col mt-7 gap-4 ">
          <Link href={"/"} className="w-full">
            <SheetClose className="w-full">
              <div className="h-12 border-b w-full">Home</div>
            </SheetClose>
          </Link>
          <Link href={"/products"} className="w-full">
            <SheetClose className="w-full">
              <div className="h-12 border-b w-full">Products</div>
            </SheetClose>
          </Link>
          <Link href={"/about"} className="w-full">
            <SheetClose className="w-full">
              <div className="h-12 border-b w-full">About</div>
            </SheetClose>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
