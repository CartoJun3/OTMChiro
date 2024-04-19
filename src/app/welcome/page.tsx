import { Container } from '@/components/Container'
import { LandingPageForm } from "@/components/LandingPageForm"
import { SectionIntro } from "@/components/SectionIntro"
import image1 from '@/images/IMG_1678.jpg'
import image2 from '@/images/IMG_1691.jpg'
export default async function Welcome() {
    return (
        <>
        <Container>
        <LandingPageForm></LandingPageForm>
        <div className="mt-8 mb-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={image1.src}
                    alt="Image1"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={image2.src}
                    alt="Image2"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
        <SectionIntro
        eyebrow=""
        title="Our Services"
      >
        <p>
          At OTM Chiropractic, we provides a wide array of services, through which our clients are enabled to Move Well, Optimize Health and transition from Pain to Performance. In particular, we can help you with:
        </p>
        <br></br>
        <div className="pl-12 md:pl-24">
        <ul className="list-disc">
          <li>Back & Neck Pain</li>
          <li>Headaches & Migranes</li>
          <li>Joint Pain - Knees, Hips, Ankles, Shoulders, Wrists and Elbows</li>
          <li>Sciatica or Nerve Compression</li>
          <li>Muscle Tension and Spasms</li>
          <li>Posture Issues</li>
          <li>Sports Injuries</li>
          <li>Arthritis</li>
          <li>Chronic Pain and Ongoing Longterm Issues</li>
          <li>Tennis and Golfer's Elbow</li>
          <li>Frozen Shoulders</li>
        </ul>
        </div>
      </SectionIntro>
        </Container>
        </>
        )
}