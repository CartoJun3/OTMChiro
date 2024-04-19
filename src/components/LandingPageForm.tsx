import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { CalendarIcon, MapPinIcon, CurrencyDollarIcon, CheckBadgeIcon} from '@heroicons/react/20/solid'
import image1 from '@/images/welcome.jpg'
const features = [


    {
      name: 'Find Us',
      description:
        'Level 1, 200 Bradman Street, Sunnybank Hills',
      href: '#',
      icon: MapPinIcon,
    },
    {
      name: 'Opening Hours',
      description:
        'Mondays & Thursdays: 8am - 6pm',
      href: '#',
      icon: CalendarIcon,
    },
    {
      name: 'Our Pricing',
      description:
      <p>
       <span style={{ color: 'gray', textDecoration: 'line-through' }}>$90</span>{' '}
        <span style={{ fontWeight: 'bold' }}>$50</span> Initial Appointment (30min) <br />
        $65 Regular Appointment (15min)
    </p>
  ,
      href: '#',
      icon: CurrencyDollarIcon,
    },
    {
        name: 'We Help With',
        description:
          'Headache, Back Pain, Sports Injuries, Knee / Ankle Pain. (See Full List Below)',
        href: '#',
        icon: CheckBadgeIcon,
      }
  ]

export function LandingPageForm() {
  return (
    <div className="bg-white py-12 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
      <div className="flex justify-center">
      <div className="object-center w-full lg:w-1/2 overflow-hidden rounded-lg">
                  <img
                    src={image1.src}
                    alt="Image1"
                    className="h-full w-full object-cover object-center"
                  />
                </div></div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <form data-netlify="true" className='pt-8'>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">About You</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Enter your details and Dr. Ben will be in contact to arrange an appointment</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  autoComplete="mobile"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
        </div>
        
    </form>
    </div>
    
  )
}