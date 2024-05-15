import image1 from '@/images/4964.jpg'
import image2 from '@/images/4967.jpg'

export default function Gallery1() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">  
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={image1.src}
                    alt="Image1"
                    className="w-full object-cover object-center max-h-[30rem]"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={image2.src}
                    alt="Image2"
                    className="w-full object-cover object-center max-h-[30rem]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }