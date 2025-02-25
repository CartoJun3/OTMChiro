import { type Metadata } from 'next'

import ContactSection2 from '@/components/ContactSection2'
import { SectionIntro } from '@/components/SectionIntro'
import { GridListItem, GridList } from '@/components/GridList'


export const metadata: Metadata = {
  title: 'Treament',
  description:
    'OTM Treatment Methods to help you Move Well, Optimize Health and transition from Pain to Performance.',
}

export default async function About() {

  return (
    <>
      <SectionIntro
        eyebrow=''
        title='Techniques we Use'
        className="mt-32">
      </SectionIntro>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-4 text-gray-700 leading-relaxed md:text-lg">At OTM Chiropractic in Sunnybank Hills, we take a comprehensive approach to chiropractic care. Our process begins with a thorough initial assessment and a detailed report of findings to identify the root cause of your issue. From there, we focus on postural correction and long-term pain relief using specialized chiropractic techniques tailored to your needs.</p>
        
        <GridList className="mt-12">
          <GridListItem title="Sacro Occipital Technique (SOT)">
          SOT is a gentle, whole-body chiropractic method that focuses on restoring spinal and cranial alignment. This technique helps improve posture, nervous system function, and overall body balance, making it ideal for those with chronic pain, headaches, or postural imbalances. This is safe for the whole family especially children and elderly patients. 
          </GridListItem>
          <GridListItem title="Advanced Biostructural Correction (ABC)">
          ABC is a posture-focused chiropractic technique designed to correct structural misalignments that cause chronic pain and dysfunction. By addressing hidden compensations in the spine, ABC helps restore natural posture, reduce tension, and improve movement long-term.
          </GridListItem>
          <GridListItem title="Syntropy Chiropractic">
          
Syntropy is a precise, movement-based chiropractic method that enhances spinal mobility and nervous system function. By utilizing specific adjustments, we help unlock restricted areas of the spine, promoting better alignment, posture, and overall well-being.
          </GridListItem>
          <GridListItem title="Instrument-Assisted Adjustments">
          For those who prefer a gentler approach, we use instrument-assisted chiropractic techniques like the Activator Method to deliver targeted, low-force adjustments. This method is great for sensitive patients, children, and individuals with conditions requiring a softer touch.
          </GridListItem>
          <GridListItem title="Soft Tissue Therapy">
          Chiropractic isn’t just about the joints—we also address muscle tension, fascia restrictions, and soft tissue dysfunction. Our soft tissue therapy techniques help reduce pain, improve flexibility, and speed up recovery by targeting tight or overworked muscles.
          </GridListItem>
          <GridListItem title="Rehabilitation & Postural Exercises">
          To ensure long-term results, we incorporate rehabilitation exercises and postural retraining into your care plan. These exercises are designed to strengthen weak muscles, improve spinal stability, and reinforce proper posture, helping you stay pain-free and move better in eve
          </GridListItem>
        </GridList>
        </div>
      <br></br>
      <ContactSection2 />
    </>
  )
}
