import { MdEmail, MdLocationPin } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'

function Contact() {
  return (
    <section id="contact" className="relative">
      <div>
        <div className="absolute left-[50%] top-[30%] w-[300px] aspect-square bg-colorfull-blue -z-10 blur-[250px]" />
      </div>
      <div className="container min-h-screen py-20">
        <div className="flex flex-col lg:flex-row items-center sm:px-10 gap-x-4 gap-y-10">
          <div className="lg:basis-[50%] font-semibold sm:px-4 lg:px-0">
            <h4 className="text-lg text-colorfull-yellow">Get In Touch</h4>
            <h2 className="text-4xl sm:text-5xl">Let&apos;s Work Together!</h2>
            <div className="mt-5 sm:mt-10 grid grid-cols-1 gap-4">
              <span className="flex font-thin gap-4">
                <MdEmail fontSize={24} /> example@gmail.com
              </span>
              <span className="flex font-thin gap-4">
                <HiPhone fontSize={24} /> +61-666-267-898
              </span>
              <span className="flex font-thin gap-4">
                <MdLocationPin fontSize={24} /> West Java, Indonesia
              </span>
            </div>
          </div>
          <div className="lg:basis-[50%]">
            <form action="">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-span-2">
                  <textarea
                    className="w-full h-[200px] sm:h-[250px] bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button className="w-full px-10 py-4 rounded-full btn-gradient-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact