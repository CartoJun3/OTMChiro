import AboutImage from '@/images/4972.jpg'
import Image from 'next/image'

export default function AboutIntro() {
    return (
      <div className="relative bg-white pt-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 mt-8 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Lead Chiropractor: <br></br>Ben Lowe
              </h1>
              <p className="mt-6 text-md leading-8 text-gray-600">
              Ben, with over a decade of gymnastics coaching experience and a Masters in Chiropractic Science, holds a deep appreciation for the nuances of movement. Through his personal experience in gymnastics, parkour, mountain biking, and rock climbing, Ben has developed a strong understanding of all forms of movement. Beyond his professional roles, Ben dedicates his chiropractic expertise to community impact, notably contributing to Homeless Connect in Brisbane CBD.
<br></br><br></br>
Having personally grappled with chronic rib and low back pain, Ben's empathy fuels his passion for chiropractic care. Ben recognizes the uniqueness of each person's journey, having successfully aided a variety of individuals, including personal trainers, gymnasts, mountain bikers, dancers, skiers and many more. Dedicated to the healing process, he takes pride in helping people move better and attain their well-being goals.
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className="pt-16 max-h-50 object-top bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-[8/7] lg:pr-16 lg:max-h-50"
              src={AboutImage}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }