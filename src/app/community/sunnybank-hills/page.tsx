import image1 from "../../../images/background.jpg"

export default function SBH() {
    return (
      <div className="bg-white pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">OTM Chiropractic</p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              The #1 Chiropractor in Sunnybank Hills
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                At OTM Chiropractic, we take pride in being the #1 chiropractor in Sunnybank Hills,
providing expert care to help you move better, feel better, and live better. Whether you're
dealing with chronic pain, recovering from an injury, or simply looking to improve your posture,
our team is dedicated to delivering high-quality chiropractic care in Sunnybank Hills to
support your health journey.
                </p>
                <p className="mt-8">
                We specialize in helping people with posture correction, headaches, neck pain, and back
pain. Many of these issues arise from poor habits, prolonged sitting, or physical strain, but with
the right care they can be managed effectively. At OTM Chiropractic, we focus on finding
the root cause of your discomfort, using hands-on treatment and movement-based solutions to
help restore function and reduce pain.
                </p>
              </div>
              <div>
                <p>
                As a chiro supporting our Sunnybank Hills residents, we work with people of all ages: kids, teenagers, adults,
and grandparents. Whether it’s improving posture for growing children, supporting active teens
in sports, helping adults manage work-related strain, or keeping grandparents mobile and
independent, our tailored approach ensures personalized care for every stage of life.
                </p>
                <p className="mt-8">
                We love being part of the Sunnybank Hills community and supporting locals in achieving better
health. If you&#39;re looking for a trusted professional to guide you toward lasting relief, OTM is here to help. Our goal is to empower you with
education and effective treatment strategies so you can move and feel your best.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="#"
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
  