import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
export function Hero() {
  return (
    <div className="relative pt-36 h-screen">
      <BackgroundImage/>
      <Container className="relative">
      <FadeIn>
        <div className="mx-auto w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-neutral-800 sm:text-7xl">
            <span className="sr-only">Chiropractic and Rehabilitation</span>Chiropractic and Rehabilitation
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-neutral-950">
            <p>
            Restoring balance to your nervous system through the highest level of chiropractic treatment.
            </p>
          </div>
          <div className='mt-24'><Button className='h-12 text-3xl' href="/book">
                Make a Booking
              </Button></div>
        </div>
        </FadeIn>
      </Container>
    </div>
  )
}