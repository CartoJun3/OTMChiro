import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-100 py-8 md:py-12',
        className,
      )}
    >
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative hover:text-red-500 font-display font-medium tracking-tight text-neutral-950 sm:text-2xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <p>{client.name}</p>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
