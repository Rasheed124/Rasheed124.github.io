import Image from "next/image";
import Link from "next/link";

import aboutImage from '../assets/Rasheed-Tolulope-me.png'

export default function Home() {
  return (
    <div className="text-light-clr">
      {/* INTRO SECTION */}
      <section
        className="  flex justify-center items-center md:justify-start py-12"
        id="intro"
      >
        <div className=" md:max-w-xl py-2 px-4">
          <h4 className="  text-green-clr font-bold font-rubik">
            Hi, my name is
          </h4>

          <div className="space-y-2 my-5   ">
            <h2 className="font-bold text-white/70 font-calibre-Bold text-3xl">
              Rasheed Tolulope.
            </h2>
            <h3 className="font-bold text-white/50 text-3xl">
              I build things for the web.
            </h3>
          </div>

          <p className=" ">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{" "}
            <a
              href="#"
              className=" text-green-clr relative after:content-[''] after:absolute after:-bottom-1 after:left-0  after:w-0 after:h-0 hover:transition-all hover:duration-700 after:bg-accent-color hover:after:w-full hover:after:h-0.5"
            >
              Ascent
            </a>
          </p>
          <div className="mt-10 flex justify-start">
            <a
              href="#_"
              className="relative block px-8 py-3 font-medium group  "
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-accent-color group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-transparent border-2 rounded-md border-green-clr group-hover:bg-transparent"></span>
              <span className="relative text-green-clr group-hover:text-white text-base">
                Check my course!{" "}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className=" py-12 flex justify-center items-center" id="about">
        <div className="py-2 px-4">
          {/* intro */}
          <div className="pb-10 flex gap-3 text-base font-bold justify-start items-center">
            <span className="text-green-clr leading-10">O1.</span>
            <h2 className="text-3xl   relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-[1.7px] after:transition-all after:duration-700 after:bg-white/60 hover:after:w-full ">
              About Me
            </h2>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Content */}
            <div className="space-y-4">
              <p>
                Hello! My name is Rasheed and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at{" "}
                <Link className="text-green-clr font-bold" href={"/"}>
                  an advertising agency
                </Link>{" "}
                ,{" "}
                <Link className="text-green-clr font-bold" href={"/"}>
                  a start-up
                </Link>
                ,{" "}
                <Link className="text-green-clr font-bold" href={"/"}>
                  {" "}
                  a huge corporationp
                </Link>
                , and{" "}
                <Link className="text-green-clr font-bold" href={"/"}>
                  {" "}
                  student-led design studio
                </Link>{" "}
                a . My div focus these days is building accessible, inclusive
                products and digital experiences at Upstatement for a variety of
                clients.
              </p>

              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>

              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>

            {/* image */}
            <div>
              <div className="mb-5 relative w-full h-[400px]">
                <Image
                  src={aboutImage}
                  alt={"rasheed-tolulope"}
                  fill
                  className="w-full absolute top-0 left-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 