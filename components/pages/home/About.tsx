import React from 'react'

function About() {
  return (
    <section className="relative bg-background mt-20 w-full overflow-x-clip" id="about">
      <div>
        <div className="absolute bottom-[20%] left-[55%] w-[500px] aspect-video bg-colorfull-blue blur-[250px]" />
        <div className="absolute bottom-0 left-0 w-[500px] aspect-video bg-colorfull-red blur-[300px]" />
      </div>
      <div className="px-4 sm:container min-h-screen py-20">
        <h1 className="text-3xl sm:text-5xl md:text-7xl uppercase flex flex-col lg:max-h-[150px] lg:gap-2">
          <span className="bg-colorfull-purple">Introducing</span>
          <span className="pl-20">About</span>
          <span className="pl-10 text-colorfull-green">Me</span>
        </h1>
        <div className="max-w-[800px] mx-auto p-6 sm:px-8 sm:py-12 rounded-xl bg-gray-200 bg-opacity-10 backdrop-blur-sm border border-gray-600 mt-4">
          <h1 className="text-3xl sm:text-4xl tracking-widest uppercase font-bold">We are not just an agency.</h1>
          <p className="sm:text-2xl max-w-3xl mt-4">
            We are the <span className="text-colorfull-blue">masterminds</span> behind unforgettable digital <span className="text-colorfull-red">experiences</span> that ignite curiosity, captivate hearts, and convert casual visitors into devoted fans.
          </p>
          <ul className="pl-10 sm:text-2xl mt-4 list-disc max-w-xl">
            <li>We are your one.</li>
            <li>Stop destination for all things creative.</li>
            <li>The powerhouse where your boldest ideas come to life!</li>
          </ul>
          <button className="py-4 px-6 rounded-full btn-gradient-2 mt-6 ml-4">
            Download CV
          </button>
        </div>
        <div className="w-full min-h-screen py-20 max-w-[800px] mx-auto flex flex-col justify-center gap-y-4 md:gap-y-0 sm:grid grid-cols-2 gap-x-10 mt-20">
          <div className="text-right">
            <h4 className="text-6xl md:text-8xl font-semibold text-colorfull-red">
              13
            </h4>
            <span className="text-2xl">Years of Experience</span>
          </div>
          <div />
          <div />
          <div>
            <h4 className="text-6xl md:text-8xl font-semibold text-colorfull-green">
              15<span className="text-white">k+</span>
            </h4>
            <span className="text-2xl">Projects Completed</span>
          </div>
          <div />
          <div />
          <div className="text-right">
            <h4 className="text-6xl md:text-8xl font-semibold text-colorfull-yellow">
              12<span className="text-white">k+</span>
            </h4>
            <span className="text-2xl">Satisfied Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About