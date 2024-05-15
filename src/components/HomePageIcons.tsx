import spine from '@/images/spine.png'
const people = [


    {
      name: 'Back Pain',
      role: 'Low back, Neck Pain, Posture',
      imageUrl:
      'https://cdn-icons-png.flaticon.com/256/2416/2416877.png',
    },
    {
        name: 'Headaches',
        role: 'Migraine, Tension, Stress',
        imageUrl:
        'https://cdn-icons-png.flaticon.com/256/4843/4843981.png',
      },
      {
        name: 'Whole Body',
        role: 'Shoulder, Elbow, Wrist, Knee, Ankle, Feet',
        imageUrl:
        'https://cdn-icons-png.flaticon.com/256/7757/7757744.png',
      },
      {
        name: 'Chronic Pain',
        role: 'Low term Complaints',
        imageUrl:
        'https://cdn-icons-png.flaticon.com/256/3239/3239945.png',
      },
      {
        name: 'All Ages',
        role: 'Kids, Teenagers, Adults, Seniors',
        imageUrl:
        'https://cdn-icons-png.flaticon.com/256/4994/4994482.png',
      },
      {
        name: 'Wellness Care',
        role: 'Overall Quality of Life',
        imageUrl:
        'https://cdn-icons-png.flaticon.com/256/678/678100.png',
      }
    // More people...
  ]
  
  export function HomePageIcons() {
    return (
      <div className="bg-gray-200 py-16 mt-10">
        <div className="mx-auto max-w-7xl px-24 text-center lg:px-24">
          <ul
            role="list"
            className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className="mx-auto h-24 w-24 rounded-md hover:scale-110" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 font-semibold text-red-500">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }