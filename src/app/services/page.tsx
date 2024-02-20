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
          At OTM Chiropractic, we provides a wide array of services, through which our clients are enabled to Move Well, Optimize Health and transition from Pain to Performance.
        </p>
      </SectionIntro>
        <GridList className="mt-24">
          <GridListItem title="Specific Adjustments">
            Information goes here
          </GridListItem>
          <GridListItem title="Individualized Plans">
          Information goes here
          </GridListItem>
          <GridListItem title="Advanced Bio-Structural Correction">
          Information goes here
          </GridListItem>
          <GridListItem title="Syntropy">
          Information goes here
          </GridListItem>
          <GridListItem title="Rehabilitation">
          Information goes here
          </GridListItem>
          <GridListItem title="One on One Movement Coaching">
          Information goes here
          </GridListItem>
        </GridList>
      </Container>
        </>
        )
}