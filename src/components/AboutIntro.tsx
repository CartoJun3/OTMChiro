import AboutImage from '@/images/Headshot.jpg'
import Image from 'next/image'

export default function AboutIntro() {
    return (
      <div className="relative bg-white pt-16">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 mt-8 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Meet Dr Ben
              </h1>
              <h2 className="mt-2 block text-xl font-display font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
              Leading Chiropractor in Brisbane for Posture & Movement
              </h2>
              <div className="md:hidden relative">
            <Image
              className="pt-8 max-h-50 object-top object-cover lg:absolute lg:inset-0 lg:aspect-[8/7] lg:pr-16 lg:max-h-50"
              src={AboutImage}
              alt=""
            />
          </div>
              <p className="mt-6 text-md leading-8 text-gray-600">
              If you’re looking for the best chiropractor in Brisbane to help with posture correction, chronic pain, and movement issues, Dr. Ben at OTM Chiropractic in Sunnybank Hills is your go to expert.
<br></br><br></br>
With over 20 years of gymnastics experience at a national level and a decade as a head gymnastics coach, Dr. Ben has an in-depth understanding of body mechanics, movement efficiency, and long-term pain relief. Holding a Master’s in Clinical Chiropractic, he specializes in helping people improve posture, reduce pain, and regain confidence in their movement.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className="pt-24 max-h-50 object-top object-cover lg:absolute lg:inset-0 lg:aspect-[8/7] lg:pr-16 lg:max-h-50"
              src={AboutImage}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }