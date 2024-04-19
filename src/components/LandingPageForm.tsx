
import LPForm from './LPForm'
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
    <LPForm></LPForm>
    </div>
    
  )
}