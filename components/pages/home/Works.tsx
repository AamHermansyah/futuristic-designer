import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

function Works() {
  return (
    <section id="works">
      <div className="relative overflow-x-clip">
        <div className="absolute left-[50%] top-[50%] w-[600px] aspect-square bg-colorfull-purple -z-10 blur-[500px]" />
        <div className="absolute right-[50%] top-[50%] w-[300px] aspect-square bg-colorfull-red -z-10 blur-[250px]" />
      </div>
      <div className="container py-10">
        <div className="flex justify-between items-end gap-2">
          <h1 className="text-3xl sm:text-7xl uppercase">Works</h1>
          <Link href="" className="text-xs sm:text-xl underline underline-offset-4 text-right">
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-10">
          {['App Development', 'SEO', 'Web Design', 'Graphic Design', 'Soc-Med Management', 'Digital Marketing'].map((item) => (
            <div key={item} className="relative aspect-square rounded-md bg-gray-200 bg-opacity-10 backdrop-blur-sm overflow-hidden group">
              <div className="h-full relative">
                <Image
                  src="/images/hero.jpg"
                  alt="portoflio"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <button className="absolute top-2 right-2 sm:text-xl bg-gray-200 bg-opacity-10 backdrop-blur-sm p-3 rounded-md z-10 hover:bg-black hover:bg-opacity-20 transition">
                <BiLinkExternal />
              </button>
              <div className="absolute inset-0 flex flex-col justify-end px-6 py-10 group-hover:bg-black group-hover:bg-opacity-70 transition">
                <h4 className="sm:text-2xl font-semibold uppercase text-gradient-2">
                  {item}
                </h4>
                <p className="mt-2 text-xs sm:text-lg">
                  Title
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works