import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logoImage from '@/images/OTMlogo.png'

export function Logo({
  className,
  invert = false,
  ...props
}: {
  className:string,
  invert?: boolean
}) {
  return (
    <Image
    className={invert ? 'backdrop-invert' : '' }
    width={200}
    src={logoImage}
    alt=""
    priority
    unoptimized
  />
  )
}
