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
import { Hero } from '@/components/Hero'
import image1 from '@/images/4964.jpg'
import image2 from '@/images/4967.jpg'
import image3 from '@/images/image1.jpg'
import image4 from '@/images/4972.jpg'

const PhotoGallery = () => {
  return (
    <div className="flex mt-12">
      {/* Left Column */}
      <div className="w-1/2 pr-2">
        <div className="mb-4">
          <Image src={image1} alt="Photo 1" className="w-full h-auto max-h-[50vh] rounded" />
        </div>
        <div>
          <Image src={image3} alt="Photo 2" className="w-full h-auto max-h-[60vh] object-top  rounded" />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 pl-2 flex items-center">
        <Image src={image2} alt="Photo 3" className="w-full h-auto max-h-[100vh] rounded" />
      </div>
    </div>
  );
};

function Benefits() {
  return (
    <>
      <SectionIntro
        title="OTM - Own The Movement"
        className="mt-8 sm:mt-12 lg:mt-16"
      >
        <p>
          We believe chiropractic is a powerful, natural way to create change in how you body moves and how you feel. Improving the connection between mind and body helps you perform at your best.
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
            We assist with headaches, low back pain, neck pain, postural issues and chronic pain.
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
      <PhotoGallery />
    </>
  )
}
