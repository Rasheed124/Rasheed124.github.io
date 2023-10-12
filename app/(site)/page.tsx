import Image from "next/image";
import Link from "next/link";

import aboutImage from '../assets/Rasheed-Tolulope-me.png'

export default function Home() {
  return (
    <main className="">
      {/* INTRO SECTION */}
      <section className="  min-h-[80vh] flex justify-center items-center md:justify-start">
        <div className=" md:max-w-xl py-2 px-5">
          <div className="">
            <h4 className="font-calibre-Bold text-xl text-accent-clr font-bold">
              Hi, my name is
            </h4>

            <div className="space-y-2 my-5   ">
              <h2 className="font-bold font-calibre-Bold  text-4xl">
                Rasheed Tolulope.
              </h2>
              <h3 className="font-bold opacity-70  text-4xl">
                I build things for the web.
              </h3>
            </div>

            <p className="text-lg opacity-70 ">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at{" "}
              <a
                href="#"
                className="text-accent-color relative after:content-[''] after:absolute after:-bottom-1 after:left-0  after:w-0 after:h-0 hover:transition-all hover:duration-700 after:bg-accent-color hover:after:w-full hover:after:h-0.5"
              >
                Ascent
              </a>
            </p>
            <div className="mt-10">
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-accent-color group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-accent-clr group-hover:bg-accent-clr"></span>
                <span className="relative text-black group-hover:text-white">
                  Check my course!{" "}
                </span>
              </a>

              {/* <a href="#" 
              className='duration-700 border-2 transition-colors hover:bg-transparent hover:border-2 border-accent-color py-4 px-10 text-center bg-accent-color'>
                Check out my course!
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className=" min-h-[80vh] flex justify-center items-center">
        <div>
          {/* intro */}
          <div>
            <span className="text-accent-clr  text-xl">O1.</span>
            <h2 className="text-3xl">About Me</h2>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Content */}
            <div>
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at{" "}
                <Link href={"/"}>an advertising agency</Link> ,{" "}
                <Link href={"/"}>a start-up</Link>,{" "}
                <Link href={"/"}> a huge corporationp</Link>, and{" "}
                <Link href={"/"}> student-led design studio</Link> a . My main
                focus these days is building accessible, inclusive products and
                digital experiences at Upstatement for a variety of clients.
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
    </main>
  );
}
 