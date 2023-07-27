import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Typewriter from "typewriter-effect"

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="hero-bg"
        fill={true}
        className="object-cover blur-xl -z-10"
      />
      <div className="bg-black bg-opacity-50">
        <div className="container gap-10">
          <div className="min-h-screen flex flex-col justify-center py-28">
            <h1 className="text-4xl sm:text-7xl font-extrabold">
              Futurustic
              <br />
              Designers
            </h1>
            <h4 className="md:flex items-center gap-4 text-xl sm:text-4xl font-extrabold uppercase mt-2">
              We Can
              <span className="text-colorfull-red">
              <Typewriter
                options={{ loop: true }}
                onInit={typewriter => {
                  typewriter
                    .pauseFor(2000)
                    .typeString('WEB DESIGN')
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(2000)
                    .typeString('APP DEVELOPMENT')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('VIDEO EDITING')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('SOC-MED MANAGEMENT')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('DIGITAL MARKETING')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('SEO MANAGEMENT')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('GRAPHIC DESIGN')
                    .pauseFor(1000)
                    .start()
                }} />
              </span>
            </h4>
            <p className="text-sm sm:text-base mt-4 pl-1 max-w-sm sm:max-w-2xl ">
              Let&apos;s bring your vision to life and make your brand shine in the digital realm!
            </p>
            <div className="mt-12">
              <Link
                href=""
                className="px-10 py-4 rounded-full btn-gradient-1"
              >
                Contact Me
              </Link>
              <Link
                href=""
                className="mt-1 max-w-sm flex items-center gap-2 px-6 py-3 uppercase font-bold border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <HiOutlineExternalLink fontSize={24} /> See My Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero