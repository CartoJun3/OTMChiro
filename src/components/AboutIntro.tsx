import AboutImage from '@/images/Headshot.jpg'
import Image from 'next/image'

export default function AboutIntro() {
  return (
    <div className="relative bg-white pt-16">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        
        {/* Text Content */}
        <div className="px-6 mt-8 xl:col-span-6 lg:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              Meet Dr Ben
            </h1>
            <h2 className="mt-2 block text-xl font-display font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
              Leading Chiropractor in Brisbane for Posture & Movement
            </h2>

            {/* Mobile Image */}
            <div className="md:hidden relative pt-8">
              <Image
                className="max-h-[250px] h-64 object-top object-cover"
                src={AboutImage}
                alt="Dr Ben"
                fill={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <p className="mt-6 text-md leading-8 text-gray-600">
              If you’re looking for the best chiropractor in Brisbane to help with posture correction, chronic pain, and movement issues, Dr. Ben at OTM Chiropractic in Sunnybank Hills is your go to expert.
              <br /><br />
              With over 20 years of gymnastics experience at a national level and a decade as a head gymnastics coach, Dr. Ben has an in-depth understanding of body mechanics, movement efficiency, and long-term pain relief. Holding a Master’s in Clinical Chiropractic, he specializes in helping people improve posture, reduce pain, and regain confidence in their movement.
            </p>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="relative hidden lg:block lg:col-span-6 xl:col-span-6">
        <Image
  className="pt-24 max-h-[500px] h-[50rem] object-top object-cover"
  src={AboutImage}
  alt="Dr Ben"
  fill={false}
  sizes="(min-width: 1024px) 50vw"
  priority
/>
        </div>
      </div>
    </div>
  );
}