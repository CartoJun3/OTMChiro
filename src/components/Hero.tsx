import backgroundImage from '@/images/hero_image.jpg'

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-24 lg:pt-24 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-20 text-4xl font-bold tracking-tight text-red-500 sm:mt-10 sm:text-6xl">
              OTM CHIROPRACTIC
            </h1>
            <h2 className="lg:text-5xl text-3xl font-bold tracking-tight text-neutral-800">
              CHIROPRACTOR BRISBANE
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Own the Movement. Achieve your goals.
            </p>

            {/* Existing buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-x-6">
              <a
                href="/book"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Make a Booking
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* New Patient Offer button */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href="/book"
                className="rounded-md bg-red-500 px-6 py-3 text-lg font-bold text-white shadow-lg hover:bg-red-600 transition"
              >
                $69 New Patient Offer
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
