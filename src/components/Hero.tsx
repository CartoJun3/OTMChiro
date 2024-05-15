import backgroundImage from '@/images/background.jpg'
// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'
// import { FadeIn, FadeInStagger } from '@/components/FadeIn'
// export function Hero() {
//   return (
//     <div className="relative pt-36 h-[calc(100vh-72px)]">
//       <BackgroundImage/>
//       <Container className="relative h-[calc(100vh-72px)]">
//       <FadeIn>
//         <div className="mx-auto w-2xl lg:max-w-4xl lg:px-12">
//           <h1 className="font-display text-5xl font-bold tracking-tighter text-neutral-800 sm:text-7xl">
//             <span className="sr-only">Balanced chiropractic care to help you move well.</span>Balanced chiropractic care to help you move well.
//           </h1>
//           <div className='mt-24'><Button className='text-3xl sm:text-5xl' href="/book">
//                 Make a Booking
//               </Button></div>
//         </div>
//         </FadeIn>
//       </Container>
//     </div>
//   )
// }

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-24 lg:pt-24 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-800 sm:mt-10 sm:text-6xl">
              BRISBANE CHIRO
            </h1>
            <h1 className="lg:text-5xl text-3xl font-bold tracking-tight text-red-500">
              OTM CHIROPRACTIC
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Own the Movement. Achieve your goals.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/book"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Initial Consultation
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:pt-12 lg:pr-24"
            src={backgroundImage.src}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}