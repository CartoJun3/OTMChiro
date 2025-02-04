import image1 from '@/images/4964.jpg'
import image2 from '@/images/4967.jpg'
import home1 from '@/images/home1.jpg'
import home2 from '@/images/home2.jpg'
import home3 from '@/images/home3.jpg'
import home4 from '@/images/home4.jpg'
import home5 from '@/images/home5.jpg'
import home6 from '@/images/home6.jpg'
export default function Gallery1() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">  
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={home1.src}
                    alt="Image1"
                    className="w-full object-cover object-center max-h-[30rem]"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={home2.src}
                    alt="Image2"
                    className="w-full object-cover object-center max-h-[30rem]"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={home4.src}
                    alt="Image2"
                    className="w-full object-cover object-center max-h-[30rem]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={home6.src}
                    alt="Image1"
                    className="w-full object-cover object-center max-h-[30rem]"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={home5.src}
                    alt="Image2"
                    className="w-full object-cover object-center max-h-[30rem]"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src={home3.src}
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