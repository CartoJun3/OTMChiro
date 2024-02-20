export default function AboutIntro() {
    return (
      <div className="relative bg-white pt-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 mt-8 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Lead Chiropractor: <br></br>Ben Lowe
              </h1>
              <p className="mt-6 text-md leading-8 text-gray-600">
              Ben has an admiration for the simplicity and complexity of movement. He also understands how
mentally fatiguing and physically frustrating it is to deal with new and long term pain. Ben has a
passion for helping people which led him to Chiropractic. <br></br><br></br>He has been a lead gymnastics coach

for over 10 years and has helped many individual clients with their movement goals. Ben
understands there is no one help you move better and is committed to the process of healing.
He prides himself in delivering personalized care that goes beyond a cookie cutter approach.
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }