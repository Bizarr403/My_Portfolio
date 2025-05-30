import { Instagram, Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 flex-col justify-center items-center md:flex-row  md:justify-evenly h-full p-4 ">
      <p className="text-gray-50 text-center pt-8">©BizarroCodes</p>
      <ul className="flex gap-0.5 justify-evenly mt-2  w-full">
        <li>
          <Instagram className="stroke-gray-50 hover:stroke-purple-400 delay-75 ease-in-out duration-100" />
        </li>
        <li>
          <Mail className="stroke-gray-50 hover:stroke-red-400 delay-75 ease-in-out duration-100" />
        </li>
        <li>
          <Linkedin className="stroke-gray-50 hover:stroke-blue-400 delay-75 ease-in-out duration-100" />
        </li>
        <li>
          <Phone className="stroke-gray-50 hover:stroke-green-400 delay-75 ease-in-out duration-100 " />
        </li>
      </ul>
    </footer>
  );
}
