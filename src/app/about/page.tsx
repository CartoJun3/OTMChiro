import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import AboutIntro from '@/components/AboutIntro'



export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {

  return (
    <>
    <br></br>
     <AboutIntro></AboutIntro>
      <PageIntro eyebrow="" title="Our Ideal Patient">
        <p>
        We provide chiropractic care to people of Brisbane. We care for people of all ages ranging from
young athletes, entrepreneurs, mums, dads and retirees. We strive to help you own the
movement. To help you understand a way forwards and empower you on your health journey.
        </p><br></br>
          <p>
          Servicing: Sunnybank, Acacia Ridge, Runcorn, Eight Mile Plains, Mount Gravatt, Underwood,
Stretton, Calamvale, Kuraby, Algester, Rocklea, Salisbury, Marooka and surrounds.
          </p>
      </PageIntro>
      <ContactSection />
    </>
  )
}
