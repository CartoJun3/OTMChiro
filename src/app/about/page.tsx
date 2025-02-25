import { type Metadata } from 'next'

import ContactSection2 from '@/components/ContactSection2'
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
      <PageIntro eyebrow="" title="Why Choose Dr. Ben as Your Sunnybank Hills Chiropractor?">
        <p>
        Dr. Ben’s expertise goes beyond traditional chiropractic adjustments. His movement-based approach is rooted in firsthand experience with gymnastics, parkour, mountain biking, rock climbing and running — activities that demand strength, control, and flexibility. He understands how postural imbalances, mobility restrictions, and poor movement patterns contribute to pain and dysfunction.
        </p><br></br>
          <p>
          If you struggle with:
<br></br>
✅ Poor posture from long hours at a desk
<br></br>
✅ Chronic back, neck, or rib pain
<br></br>
✅ Restricted mobility affecting your sport or daily life
<br></br>
✅ Injuries from training, gym workouts, or extreme sports
          </p>
          <p className='pt-6'>Dr. Ben helps people of all ages—from kids to adults—improve posture, relieve pain, and move better. Whether it’s correcting posture in children, easing back pain for parents, or helping athletes perform at their best, he provides expert chiropractic care for the whole family in Sunnybank Hills.</p>
      </PageIntro>
      <br></br>
      <ContactSection2 />
    </>
  )
}
