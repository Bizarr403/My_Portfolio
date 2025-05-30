import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
export default function Navbar() {
  return (
    <div className="flex justify-center w-full">
      <nav className=" bg-zinc-300  flex justify-between items-center p-4 ml-4 mr-4 mt-1  border-transparent rounded-4xl  h-9  sticky ">
        <Link href="/">
          <Image
            src="/LogoIllustration.png"
            alt="Intro"
            height={32}
            width={32}
            className="rounded-full mr-12 ml-1 "
          />
        </Link>
        <div className="flex justify-center  w-full">
          <Link
            href="/"
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
              class: "text-gray-600 hover:text-blue-950",
            })}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
              class: "text-gray-600 hover:text-blue-950",
            })}
          >
            About Me
          </Link>
          <Link
            href="#projects"
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
              class: "text-gray-600 hover:text-blue-950",
            })}
          >
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
}
