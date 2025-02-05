import image1 from "../../../images/background.jpg"

export default function SBH() {
    return (
      <div className="bg-white pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">OTM Chiropractic</p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              The #1 Chiropractor in Sunnybank
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                At OTM Chiropractic, we take pride in being the #1 chiropractor in Sunnybank, providing expert care to help you move better, feel better, and live better. Whether you're dealing with chronic pain, recovering from an injury, or looking to improve your posture and overall well-being, our team is dedicated to delivering high-quality chiropractic care in Sunnybank to support your health journey.
                </p>
                <p className="mt-8">
                We specialize in helping people with <strong><ul className="pl-6"><li>posture correction</li><li>headaches</li><li>neck and back pain</li><li>sciatica</li></ul></strong> which are common issues that can stem from poor habits, prolonged sitting, or physical strain. In a busy suburb like Sunnybank, where students and professionals spend long hours studying and working, spinal health plays a crucial role in brain function, concentration, and overall academic performance.
                </p>
                <div className="mt-4 flex items-center justify-center md:hidden">
              <a
                href="/book"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Now to start your journey to better health
              </a>
            </div>
              </div>
              
              <div>
                <p>
                As a chiro supporting Sunnybank residents, we work with people of all ages: children, teenagers, adults, and grandparents. Our hands-on treatment and movement-based solutions aim to not only reduce pain but also improve nervous system function, helping you stay focused, energized, and at your best. Whether it’s helping students optimize their brain health and posture for better learning, supporting active teens in sports, assisting professionals in managing work-related strain, or keeping seniors mobile and independent, our personalized approach ensures the right care at every stage of life.
                </p>
                <p className="mt-8">
                We love being part of the Sunnybank community and supporting locals in achieving better health. If you're looking for a trusted professional to help you achieve lasting relief and improved well-being, OTM Chiropractic is here to help. Our goal is to empower you with education and effective treatment strategies, so you can move, think, and feel your best.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="/book"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Now to start your journey to better health
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <img
              alt="Image2"
              src={image1.src}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    )
  }
  