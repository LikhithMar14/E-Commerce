
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "@/components/shared/header/menu";


const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex-between ">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt="logo Image"
              height={48}
              width={48}
            />
            <span className="hidden md:block lg:block ml-3 font-bold text-2xl">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu/>
      </div>
    </header>
  );
};

export default Header;
