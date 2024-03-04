import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
export function Hero() {
  return (
    <div className="relative pt-36 h-[calc(100vh-72px)]">
      <BackgroundImage/>
      <Container className="relative h-[calc(100vh-72px)]">
      <FadeIn>
        <div className="mx-auto w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-neutral-800 sm:text-7xl">
            <span className="sr-only">Balanced chiropractic care to help you move well.</span>Balanced chiropractic care to help you move well.
          </h1>
          <div className='mt-24'><Button className='text-3xl sm:text-5xl' href="/book">
                Make a Booking
              </Button></div>
        </div>
        </FadeIn>
      </Container>
    </div>
  )
}