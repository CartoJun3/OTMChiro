import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/laptop.png'
import { Hero } from '@/components/Hero'

function Benefits() {
  return (
    <>
      <SectionIntro
        title="Explained: Own the Movement"
        className="mt-8 sm:mt-12 lg:mt-16"
      >
        <p>
          We believe everyone has the right to good health and their optimal quality of life.
        </p>
      </SectionIntro>
      <Container className="mt-4">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-4 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Move Well">
              Through Chiropractic, we'll help you move your body how it was designed.
            </ListItem>
            <ListItem title="Pain to Performance">
              Using Chiropracitc, we'll help you advance from pain, to prevention, to performance.
            </ListItem>
            <ListItem title="Optimize Health">
              Health is a process, made up of multiple components. Chiropractic is a key component of optimizing it.
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

      <ContactSection />
    </>
  )
}
