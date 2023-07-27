import { services } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <section id="services" className="container py-20">
      <div className="flex justify-center mb-10">
        <h1 className="w-max text-3xl sm:text-5xl md:text-7xl uppercase flex flex-col gap-y-2">
          <span className="sm:pl-20 whitespace-nowrap">Our Services</span>
          <span className="self-center sm:self-start bg-colorfull-yellow w-max">Is All You</span>
          <span className="self-end text-colorfull-red">Need</span>
        </h1>
      </div>
      <div className="relative max-w-[1000px] mx-auto">
        <div className="absolute right-[50%] top-[30%] w-[600px] aspect-square bg-colorfull-blue -z-10 blur-[500px]" />
        <div className="absolute left-[50%] top-[30%] w-[300px] aspect-square bg-colorfull-red -z-10 blur-[250px]" />
        {services.map((item) => (
          <div className="grid grid-cols-12 gap-3 md:gap-10 mb-10" key={item.id}>
            <div className="col-span-12 md:col-span-4">
              <h2 className={cn('md:sticky md:top-20 uppercase text-2xl text-right', item.titleColor)}>
                {item.title}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h4 className={cn('text-xl font-bold', item.captionColor)}>
                {item.caption}
              </h4>
              <p className="text-sm sm:text-base text-gray-300 py-2 sm:py-4">
                {item.content}
              </p>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mt-4">
                <Image
                  src={item.imageUrl}
                  alt="web developer"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services