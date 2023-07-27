import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Typewriter from "typewriter-effect"
import { motion } from 'framer-motion'
import { containerShow, itemShow } from '@/lib/animate'

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="hero-bg"
        fill={true}
        className="object-cover blur-xl -z-10"
      />
      <motion.div
        variants={containerShow}
        initial="initial"
        animate="animate"
        className="bg-black bg-opacity-50"
      >
        <div className="container gap-10">
          <div className="min-h-screen flex flex-col justify-center py-28">
            <motion.h1 variants={itemShow(.5, false)} className="text-4xl sm:text-7xl font-extrabold">
              Futurustic
              <br />
              Designers
            </motion.h1>
            <motion.h4 variants={itemShow(.5, false)} className="md:flex items-center gap-4 text-xl sm:text-4xl font-extrabold uppercase mt-2">
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
            </motion.h4>
            <motion.p variants={itemShow(.5, false)} className="text-sm sm:text-base mt-4 pl-1 max-w-sm sm:max-w-2xl ">
              Let&apos;s bring your vision to life and make your brand shine in the digital realm!
            </motion.p>
            <motion.div variants={itemShow(.5)} className="mt-12">
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero