import { type Metadata } from 'next'
//import MailchimpForm from '@/components/MailchimpSignup'
import ContactSection2 from '@/components/ContactSection2'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imagepuzzle from '@/images/4987.jpg'
import { Hero } from '@/components/Hero'
import Gallery1 from '@/components/Gallery1'
import { HomePageIcons } from '@/components/HomePageIcons'
import DVA_EPC from '@/components/DVA_EPC'
import { Star, MapPin, Stethoscope } from "lucide-react"
import Link from "next/link"

function FeaturesSection() {
  return (
    <section className="bg-black py-16 mt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 text-center divide-y divide-neutral-700 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center px-6 py-6">
            <div className="flex space-x-1">
              <Star className="h-12 w-12 text-yellow-400" />
              <Star className="h-12 w-12 text-yellow-400" />
              <Star className="h-12 w-12 text-yellow-400" />
              <Star className="h-12 w-12 text-yellow-400" />
              <Star className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white text-center">
              Over 60+ <br />5 Star Google Reviews
            </h3>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center px-6 py-6">
            <MapPin className="h-12 w-12 text-red-400" />
            <h3 className="mt-4 text-lg font-semibold text-white text-center">
              Prime Brisbane South Location
            </h3>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center px-6 py-6">
            <Stethoscope className="h-12 w-12 text-blue-400" />
            <h3 className="mt-4 text-lg font-semibold text-white text-center">
              Expert Chiropractic Care
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}


function Benefits() {
  return (
    <>
      <Container className="mt-4">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imagepuzzle}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-4 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Meet you where you are">
            We assist with headaches, low back pain, neck pain, postural issues, tennis and golfers elbow, hip pain, frozen shoulders, chronic pain and ongoing longterm issues.
            </ListItem>
            <ListItem title="Pain to performance">
            Using Chiropractic and rehabilitation, we’ll help you get out of the frustrating cycle of pain and help you own the movement.
            </ListItem>
            <ListItem title="Achieve your goals">
            Health is a process. We will walk with you on this journey.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title:
    'OTM Chiropractic | Own the Movement',
  description:
    'Own The Movement Chiropractic is dedicated to providing Brisbane a premier chiropractic and rehabilitation service',
}

export default async function Home() {

  return (
    <>
    <Hero></Hero>
    <FeaturesSection />
      <HomePageIcons />
      <Benefits />
      <br></br>
      <DVA_EPC />
      <br></br>
      <div className="mx-auto max-w-7xl px-6 mb-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Testimonial client={{ name: 'Tom G. - TiteLine Drilling' }}>
          I've been seeing Ben for ongoing chronic back pain issues for the past few months. Ben genuinly cares about his clients and spends the time to find the cause, not just the bandaid approach. Highly recommend!
          </Testimonial>

          <Testimonial client={{ name: 'Julie C.' }}>
          Dr Ben is magic! The best chiropractor I have ever seen. I would not recommend anyone else.
          </Testimonial>
        </div>
        {/* Button below testimonials */}
        <div className="mt-12 flex justify-center">
          <Link
            href="https://www.google.com/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyVPZ0adrYPmVSqcVP4-wfpLJ-ArYsZgKCTfaLLh-IIsnUp6F54tvFfdvrqjHBOKw2zTo29S7fljGk_dG6Ia6HrSAakrjbKK3BnAJZoDAHywbkKshA%3D%3D&q=OTM+Chiropractic+Reviews&sa=X&ved=2ahUKEwjZ2-jS15qPAxUCSGcHHQs4DfwQ0bkNegQIPRAE"
            target="_blank"
            className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white shadow hover:bg-neutral-800 transition"
          >
            View All Google Reviews
          </Link>
        </div>
      </div>
      <ContactSection2 />
      <Gallery1/>
    </>
  )
}
