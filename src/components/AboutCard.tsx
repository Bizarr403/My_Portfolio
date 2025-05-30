import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as motion from "motion/react-client";
export default function About() {
  return (
    <div className="flex-col justify-center items-center gap-3 md:grid grid-cols-3 ">
      <Card className="bg-zinc-500/30 backdrop-blur-md border-transparent w-full h-fit grid grid-rows-1 p-8 place-content-center mt-3">
        <CardHeader>
          <CardTitle className="text-white text-center text-[10pt] flex justify-center sm:text-2xl ">
            <p>My Journey</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel className="flex justify-center items-center">
            <CarouselPrevious className="hidden md:flex" />
            <CarouselContent>
              <CarouselItem className="flex justify-center">
                <motion.img
                  src="/3d rocket.png"
                  alt="rocket"
                  className=" w-24 h-24  md:h-48 md:w-48"
                  whileInView={{
                    translateY: [0, 4, 0],
                    transition: {
                      delay: 0.2,
                      duration: 2.5,
                      repeat: Infinity,
                    },
                  }}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-start">
                <ul className="text-white  p-0 m-0 list-disc w-fit text-wrap text-[8pt] sm:text-[10pt]">
                  <li>Started in 2020 with python</li>
                  <li></li>
                </ul>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <CardFooter className="flex justify-center text-nowrap text-white text-[8pt] text-center md:hidden">
            Swipe for more
          </CardFooter>
        </CardContent>
      </Card>
      <Card className="bg-zinc-500/30 backdrop-blur-md  border-transparent w-full h-fit grid grid-rows-1 p-8  place-content-center mt-3">
        <CardHeader>
          <CardTitle className="flex justify-center text-white text-center text-[10pt] sm:text-2xl ">
            <p>My Hobbies</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel className="flex justify-center items-center">
            <CarouselPrevious className="hidden md:flex" />
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <motion.img
                  src="/3d_ball.png"
                  alt="ball"
                  className="w-24 h-24  md:h-48 md:w-48"
                  whileInView={{
                    rotateZ: 360,
                    transition: {
                      delay: 0.2,
                      duration: 4,
                      repeat: Infinity,
                    },
                  }}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-start">
                <ul className="text-white  list-disc w-fit text-wrap text-[8pt] sm:text-[10pt]">
                  <li>Football</li>
                  <li>
                    Music.{" "}
                    <span className=" text-nowrap">
                      <sub className="text-[5pt]">
                        Playlist coming soon!
                        {/*<LucideMusic className="stroke-lime-400 h- w-4 hover:stroke-lime-700" />*/}
                      </sub>
                    </span>
                  </li>
                  <li>Anime</li>
                </ul>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <CardFooter className="flex justify-center text-nowrap text-white text-[8pt] text-center md:hidden">
            Swipe for more
          </CardFooter>
        </CardContent>
      </Card>
      <Card className="bg-zinc-500/30 backdrop-blur-md border-transparent w-full h-fit grid grid-rows-1 p-8 place-content-center mt-3">
        <CardHeader>
          <CardTitle className="flex justify-center text-white text-center text-[10pt] sm:text-2xl ">
            <p>Tech Stack</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel className="flex justify-center items-center">
            <CarouselPrevious className="hidden md:flex" />
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <motion.img
                  src="/tech-stack.png"
                  alt="rocket"
                  className=" w-24 h-24  md:h-48 md:w-48"
                  whileInView={{
                    translateY: [0, 4, 0],
                    transition: {
                      delay: 0.2,
                      duration: 2.5,
                      repeat: Infinity,
                    },
                  }}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-start">
                <ul className="text-white  p-0 m-0 list-disc w-fit text-wrap text-[8pt] sm:text-[10pt]">
                  <li>Football</li>
                  <li>Ups and downs while learning</li>
                </ul>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <CardFooter className="flex  justify-center text-nowrap text-white text-[8pt] text-center md:hidden">
            Swipe for more
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}
{
  /*<Carousel className="w-fit mt-4 flex justify-center items-center ">
        <CarouselPrevious className="hidden md:flex" />

        <CarouselContent>
          <CarouselItem className="text-white text-center">
            <Card className="bg-zinc-500/30 backdrop-blur-md border-transparent w-fit">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">
                  <p>My Journey</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <motion.img
                  src="/3d rocket.png"
                  alt="rocket"
                  className="h-48 w-48"
                  whileInView={{
                    translateY: [0, 4, 0],
                    transition: {
                      delay: 0.2,
                      duration: 2.5,
                      repeat: Infinity,
                    },
                  }}
                />
              </CardContent>
              <CardDescription className="flex justify-center text-white">
                <p>CardDescription</p>
              </CardDescription>
              <CardFooter className="sm:hidden">Swipe for more</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="text-white text-center">
            <Card className="bg-white/30 backdrop-blur-md border-transparent">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">
                  <p>My Hobbies</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <motion.img
                  src="/3d_ball.png"
                  alt="ball"
                  className="h-48 w-48"
                  whileInView={{
                    rotateZ: 360,
                    transition: {
                      delay: 0.2,
                      duration: 4,
                      repeat: Infinity,
                    },
                  }}
                />
              </CardContent>
              <CardDescription className="flex justify-center text-white">
                <p>CardDescription</p>
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem className="text-white text-center">
            <Card className="bg-white/30 backdrop-blur-md border-transparent">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">
                  <p>Tech Stack</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <motion.img
                  src="/tech-stack.png"
                  alt="stack"
                  className="h-48 w-48"
                  whileInView={{
                    translateY: [0, 4, 0],
                    transition: {
                      delay: 0.2,
                      duration: 2.5,
                      repeat: Infinity,
                    },
                  }}
                />
              </CardContent>
              <CardDescription className="flex justify-center text-white"></CardDescription>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <CarouselNext className="hidden md:flex" />
                </Carousel>*/
}
