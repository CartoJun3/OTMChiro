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
  description:
    'Own The Movement Chiropractic is dedicated to providing Brisbane a premier chiropractic and rehabilitation service',
}

export default async function Home() {

  return (
    <>
    <Hero></Hero>
      <HomePageIcons />
      <Benefits />
      <br></br>
      <ContactSection2 />
      <Gallery1/>
    </>
  )
}
