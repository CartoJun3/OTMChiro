import MedicareImage from '@/images/medicare.webp'
import DVAImage from '@/images/dva.webp'
import Image from "next/image";

export default function DVA_EPC() {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
        
        {/* EPC */}
        <div className="flex flex-col justify-between h-full text-center items-center border border-gray-300 rounded-2xl p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Enhanced Primary Care Plan (EPC)</h2>
            <div className="relative w-full h-32 md:h-40">
              <Image
                src={MedicareImage}
                alt="Medicare"
                fill
                className="object-cover rounded-2xl shadow-md"
              />
            </div>
            <p className="text-gray-600">
              The EPC plan is a Medicare program that supports a multi-disciplinary
              approach to managing complex chronic conditions lasting six months or
              more, providing up to five allied health appointments per calendar year.
            </p>
          </div>
          <a
  href="https://www.servicesaustralia.gov.au/care-plans?context=20"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition mt-6 text-center"
>
  Learn More
</a>
        </div>
  
        {/* DVA */}
        <div className="flex flex-col justify-between h-full text-center items-center border border-gray-300 rounded-2xl p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Department of Veterans Affairs (DVA)</h2>
            <div className="relative w-full h-32 md:h-40">
              <Image
                src={DVAImage}
                alt="Department of Veterans' Affairs"
                fill
                className="object-cover rounded-2xl shadow-md"
              />
            </div>
            <p className="text-gray-600">
              Chiropractic services manage spine and musculoskeletal conditions by
              restoring mobility, alleviating pain, and reducing muscle tightness, and
              may be available to those with an assessed clinical need who hold a
              Veteran Gold Card or a Veteran White Card for an accepted service-related
              condition.
            </p>
          </div>
          <a
  href="https://www.dva.gov.au/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition mt-6 text-center"
>
  Learn More
</a>
        </div>
  
      </section>
    );
  }
  
  
