import { GridList, GridListItem } from "@/components/GridList"
import { Container } from '@/components/Container'
import { SectionIntro } from "@/components/SectionIntro"
export default async function Services() {
    return (
        <>
        <Container className="mt-24">
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
          <li>Joint Pain</li>
          <li>Sciatica or Nerve Compression</li>
          <li>Muscle Tension and Spasms</li>
          <li>Posture Issues</li>
          <li>Sports Injuries</li>
          <li>Arthritis</li>
        </ul>
        </div>
      </SectionIntro>
      <br></br><br></br>
      <SectionIntro
        eyebrow=''
        title='Techniques we Use'>
      </SectionIntro>
      
        <GridList className="mt-24">
          <GridListItem title="Chiropractic Adjustments">
            Manual and Low Force
          </GridListItem>
          <GridListItem title="Individualized Treatment Plans">
          Helping you see the way forwards
          </GridListItem>
          <GridListItem title="Movement Coaching">
          Assisting you to reach your specific goals
          </GridListItem>
          <GridListItem title="Sacro-occipital Technique">
          Whole body approach
          </GridListItem>
          <GridListItem title="Advanced-biostructural technique">
          Postural Correction
          </GridListItem>
          <GridListItem title="Syntropy Technique">
          World Class Adjustments
          </GridListItem>
        </GridList>
      </Container>
        </>
        )
}