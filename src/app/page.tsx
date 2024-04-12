import { type Metadata } from 'next'
import Image from 'next/image'
import ContactSection2 from '@/components/ContactSection2'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imagepuzzle from '@/images/4987.jpg'
import image1 from '@/images/4964.jpg'
import image2 from '@/images/4967.jpg'
import image3 from '@/images/image1.jpg'
import { Hero } from '@/components/Hero'

function Benefits() {
  return (
    <>
      <SectionIntro
        title="OTM - Own The Movement"
        className="mt-8 sm:mt-12 lg:mt-16"
      >
        <p>
        Welcome to Own The Movement. We're more than just chiropractic care; we're your partners in movement. Our vision is to:</p>
        <ol className="list-decimal list-inside pt-6 pl-6">
          <li>Identify your specific pain point and why it's important to you. </li>
          <li>Guide you to move better, addressing the root causes of discomfort. </li>
          <li>Create the freedom to perform at your best, both in and out of the clinic. </li>
        </ol> 
<p className='pt-6'>Whether you're an athlete, a parent, or simply seeking someone who sees a way forwards to your goals, Own The Movement is here to support you every step of the way. Let's <b>own your movement</b> together.

        </p>
      </SectionIntro>
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
            <ListItem title="Pain to Performance">
            Using Chiropractic and rehabilitation, we’ll help you get out of the frustrating cycle of pain and help you own the movement.
            </ListItem>
            <ListItem title="Achieve your Goals">
            Health is a process. We will walk with you on this journey.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Own The Movement Chiropractic is dedicated to providing Brisbane a premier chiropractic and rehabilitation service',
}

export default async function Home() {

  return (
    <>
    <Hero></Hero>
      <Testimonial
        className=""
        client={{ name: 'Dr Andrew Huberman - Neuroscientist'}}
      >
        The mind and body are intimately connected. Taking care of one is essential for taking care of the other.
      </Testimonial>

      <Benefits />
      <br></br>
      <ContactSection2 />
    </>
  )
}
