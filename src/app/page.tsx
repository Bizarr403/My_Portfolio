import * as motion from "motion/react-client";
import {
  Instagram,
  Mail,
  Linkedin,
  Phone,
  Code2,
  Gamepad2,
  Download,
  File,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import About from "@/components/AboutCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="  grid grid-cols-2 gap-9 place-items-center mt-4 p-5 bg-zinc-100 h-[75vh]">
        <article className="flex flex-wrap items-center justify-center pl-1  ">
          <h1 className=" text-left text-4xl text-black  ">
            Hi, I'm #Name!
            <span className="text-blue-400 text-shadow-black block ">
              Software <span className="text-black">Engineer</span>
            </span>
          </h1>
          {/**/}
        </article>
        <article className="flex items-center justify-center ">
          <motion.img
            src="/hand-shake.svg"
            alt="hand"
            className="h-40 w-40 md:h-48 md:w-48   "
            whileInView={{
              rotate: [0, 45, 0],
              transition: {
                delay: 0.2,
                duration: 1,
                repeat: 3,
              },
            }}
          />
        </article>
      </section>
      {/*About Section*/}
      <section
        className="grid grid-rows-1 place-content-center bg-zinc-800 p-5   "
        id="about"
      >
        <article className="grid grid-rows-2 place-content-center ">
          <h1 className="text-white text-center text-4xl ">Basic Facts</h1>
          <img
            src="/profile.png"
            alt="profile"
            className="rounded-full w-60 h-60 mt-0"
          />
          <div className="flex-col items-center justify-center">
            <div className="flex-col ">
              <ul className="flex gap-3 justify-evenly mt-2 mb-2">
                <li>
                  <Instagram className="stroke-purple-700 hover:stroke-purple-400 delay-75 ease-in-out duration-100" />
                </li>
                <li>
                  <Mail className="stroke-red-700 hover:stroke-red-400 delay-75 ease-in-out duration-100" />
                </li>
                <li>
                  <Linkedin className="stroke-blue-700 hover:stroke-blue-400 delay-75 ease-in-out duration-100" />
                </li>
                <li>
                  <Phone className="stroke-green-700 hover:stroke-green-400 delay-75 ease-in-out duration-100 " />
                </li>
                <li>
                  <Download
                    className="stroke-gray-600 hover:stroke-gray-400 delay-75 ease-in-out duration-100 "
                    //onClick={downloadFiles}
                  />
                </li>
              </ul>
              <p className="text-white text-center text-[16pt]">
                Let's Connect
              </p>
            </div>
          </div>
        </article>
        {/*<article className="flex  flex-wrap items center justify-center">
            <p className="text-zinc-900 text-left h-fit overflow-clip">
              I've been in this line of work since 2020 and so far it's been an
              amazing journey with a lot of ups and downs and this right here is
              to share that journey with you.I've dabbled in a lot of
              technologies within that short time and I'm really proud of my
              journey so far, the ups and downs and everything I've learnt.
            </p>
            
          </article>*/}
        <About />
      </section>
      <section className="grid grid-rows-2 ">
        <article className="flex items-center justify-center"></article>
      </section>

      {/*Projects Section*/}

      <section
        className="bg-zinc-200 p-2 grid grid-rows-1 gap-4 place-items-center"
        id="projects"
      >
        <h1 className="text-gray-900 text-center text-4xl ">My Works</h1>
        <motion.article className=" grid grid-rows-4 gap-4 md:grid-cols-6 place-items-center p-4">
          <Card className="bg-purple-300/30   backdrop-blur-md shadow-lg border-transparent w-full h-full grid grid-rows-2 p-8  md:col-span-3 md:row-span-2 place-content-center mt-3">
            <CardHeader className="flex justify-center items-start w-full">
              <div className="mt-2 flex justify-between w-full">
                <CardTitle className="text-center text-gray-100 text-2xl">
                  Recipedia
                </CardTitle>
                <div className="flex gap-2">
                  <Badge className="font-semibold bg-blue-500 text-white rounded-[8px] text-[8pt] px-2">
                    2024
                  </Badge>
                  <Badge className="font-semibold bg-purple-800 text-white rounded-[6px] text-[8pt] px-2">
                    React
                  </Badge>
                  <Link href="/" className="flex justify-center items-center">
                    <Badge className="font-light bg-green-500 text-white rounded-[8px] text-[8pt] px-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Code2 className="h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent>View code</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Badge>
                  </Link>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-col justify-center items-center  w-full h-full">
              <ul className="list-disc">
                <li>Purely design with react</li>
                <li>One of my first fully designed landing page designs</li>
                <li>Fully functioning app coming soon</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-300/30   backdrop-blur-md shadow-lg border-transparent w-full h-full grid grid-rows-2 p-8  md:col-span-3 md:row-span-2 place-content-center mt-3">
            <CardHeader className="flex justify-center items-start w-full">
              <div className="mt-2 flex justify-between w-full">
                <CardTitle className="text-center text-gray-100 text-2xl">
                  Space Invaders
                </CardTitle>

                <div className="flex gap-2">
                  <Badge className="font-semibold bg-blue-500 text-white rounded-[8px] text-[8pt] px-2">
                    2023
                  </Badge>
                  <Badge className="font-light bg-red-500 text-white rounded-[8px] text-[8pt] px-2">
                    <Gamepad2 className="h-4 w-4" />
                  </Badge>
                  <Badge className="font-semibold bg-purple-800 text-white rounded-[6px] text-[8pt] px-2">
                    Python
                  </Badge>
                  <Link
                    href="https://github.com/Bizarr403/SpaceInvaders/tree/main"
                    className="flex justify-center items-center"
                  >
                    <Badge className="font-light bg-green-500 text-white rounded-[8px] text-[8pt] px-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Code2 className="h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent>View code</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Badge>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-col justify-center items-center  w-full h-full">
              <ul className="list-disc">
                <li>A recreation of the popular 80's video game</li>
                <li>
                  Created using python and the powerful 2d-library "pygame"
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-300/30   backdrop-blur-md shadow-lg border-transparent w-full h-full grid grid-rows-2 p-8  md:col-span-3 md:row-span-2 place-content-center mt-3">
            <CardHeader className="flex justify-between items-start w-full">
              <div className="mt-2 flex justify-between w-full">
                <CardTitle className="text-center text-2xl text-gray-100">
                  2048
                </CardTitle>
                <div className="flex gap-2">
                  <Badge className="font-semibold bg-blue-500 text-white rounded-[8px] text-[8pt] px-2">
                    2024
                  </Badge>
                  <Badge className="font-light bg-red-500 text-white rounded-[8px] text-[8pt] px-2">
                    <Gamepad2 className="h-4 w-4" />
                  </Badge>
                  <Badge className="font-semibold bg-purple-800 text-white rounded-[6px] text-[8pt] px-2">
                    Python
                  </Badge>
                  <Link href="/" className="flex justify-center items-center">
                    <Badge className="font-light bg-green-500 text-white rounded-[8px] text-[8pt] px-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Code2 className="h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent>View code</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Badge>
                  </Link>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-col justify-center items-center  w-full h-full">
              <ul className="list-disc">
                <li>A recreation of the popular game "2048"</li>
                <li>Implemented using python and the popular pygame library</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-300/30 backdrop-blur-md shadow-lg border-transparent w-full h-full grid grid-rows-2 p-8  place-content-center mt-3 md:col-span-3 md:row-span-2">
            <CardHeader className="flex justify-center items-start w-full">
              <div className="mt-2 flex justify-between w-full gap-4">
                <CardTitle className="text-center text-gray-100 text-2xl">
                  BookRev
                </CardTitle>
                <div className="flex gap-2">
                  <Badge className="font-semibold bg-blue-500 text-white rounded-[8px] text-[8pt] px-2">
                    2024
                  </Badge>
                  <Badge className="font-semibold bg-purple-800 text-white rounded-[6px] text-[8pt] px-2">
                    Node.Js
                  </Badge>
                  <Link
                    href="https://github.com/Bizarr403/Book-review"
                    className="flex justify-center items-center"
                  >
                    <Badge className="font-light bg-green-500 text-white rounded-[8px] text-[8pt] px-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Code2 className="h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent>View code</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Badge>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-col justify-center items-center  w-full h-full">
              <ul className="list-disc">
                <li>
                  Allows users leave reviews about books they've read while
                  getting the book cover from an API
                </li>
                <li>Focused on functionality over form</li>
                <li>Earlier project</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-300/30 backdrop-blur-md shadow-lg border-transparent w-full h-full grid grid-rows-2 p-8  place-content-center mt-3 md:col-span-3 place-self-center md:row-span-2">
            <CardHeader className="flex justify-center items-start w-full">
              <div className="mt-2 flex justify-between items-center w-full gap-4">
                <CardTitle className="text-center text-gray-100 text-2xl">
                  BattleShips
                </CardTitle>
                <div className="flex gap-2">
                  <Badge className="font-semibold bg-blue-500 text-white rounded-[8px] text-[8pt] px-2">
                    2021
                  </Badge>
                  <Badge className="font-light bg-red-500 text-white rounded-[8px] text-[8pt] px-2">
                    <Gamepad2 className="h-4 w-4" />
                  </Badge>
                  <Badge className="font-semibold bg-purple-800 text-white rounded-[6px] text-[8pt] px-2">
                    Python
                  </Badge>
                  <Link
                    href="https://github.com/Bizarr403/Battleships"
                    className="flex justify-center items-center"
                  >
                    <Badge className="font-light bg-green-500 text-white rounded-[8px] text-[8pt] px-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Code2 className="h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent>View code</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Badge>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-col justify-center items-center  w-full h-full">
              <ul className="list-disc">
                <li>Also built using pygame</li>
                <li>A 2 person game that involves shooting</li>
                <li>
                  Earlier project in my career born out of my fascination with
                  how they worked
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white-500/30 backdrop-blur-md shadow-lg border-transparent w-full h-full grid grid-rows-2 p-8  place-content-center mt-3 md:col-span-3 place-self-center md:row-span-2">
            <CardHeader className="flex justify-center items-start w-full">
              <div className="mt-2 flex justify-between w-full gap-4">
                <CardTitle className="text-center text-gray-500 text-2xl">
                  My Portfolio
                </CardTitle>
                <div className="flex gap-2">
                  <Badge className="font-semibold bg-blue-500 text-white rounded-[8px] text-[8pt] px-2">
                    2025
                  </Badge>
                  <Badge className="font-light bg-red-500 text-white rounded-[8px] text-[8pt] px-2">
                    <File className="h-4 w-4" />
                  </Badge>
                  <Badge className="font-semibold bg-purple-800 text-white rounded-[6px] text-[8pt] px-2">
                    NextJS
                  </Badge>
                  <Link
                    href="https://github.com/Bizarr403/Battleships"
                    className="flex justify-center items-center"
                  >
                    <Badge className="font-light bg-green-500 text-white rounded-[8px] text-[8pt] px-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Code2 className="h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent>View code</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Badge>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-col justify-center items-center  w-full h-full">
              <ul className="list-disc">
                <li>My journey so far in this space</li>
                <li>Well you're looking at it</li>
                <li>
                  Actually the second iteration of a personal portfolio website.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.article>
      </section>
    </div>
  );
}
{
  /*<div className="grid grid-rows-2 gap-5 place-items-center bg-zinc-50/70 backdrop-blur-2xl p-16 w-fit h-full rounded-3xl">
            <div className="flex justify-start items-start h-full">
              <div className="flex justify-around items-center gap-4 px-4 ">
                <p className="font-light bg-green-500 text-white rounded-[8px] text-[8pt] px-2">
                  2024
                </p>
                <p className="font-light bg-purple-800 text-white rounded-[6px] text-[8pt] px-2">
                  Node.Js
                </p>
                <p className="font-light bg-blue-500 text-white rounded-[8px] text-[8pt] px-2">
                  <Code2 className="h-4 w-4" />
                </p>
              </div>
            </div>
            <h1 className="text-center">FixMate</h1>
</div>*/
}
