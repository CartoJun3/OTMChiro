import Image from 'next/image'
import clsx from 'clsx'

import backgroundImage from '@/images/background.jpg'
import backgroundMobile from '@/images/background_mobile.jpg'

export function BackgroundImage({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'absolute inset-0 overflow-hidden bg-indigo-50 opacity-60',
        className,
      )}
    >
      <Image
        fill={true}
        src={backgroundMobile}
        alt=""
        priority
        unoptimized
        className="md:hidden"
      />
      <Image
        fill={true}
        src={backgroundImage}
        alt=""
        priority
        unoptimized
        className="hidden md:block"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
    </div>
  )
}