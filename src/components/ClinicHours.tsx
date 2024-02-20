import clsx from 'clsx'

function ClinicHour({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-black' : 'text-white',
      )}
    >
      <strong className={invert ? 'text-black' : 'text-white'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function ClinicHours({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <ClinicHour name="Monday & Thursday" invert={invert}>
          8am - 6pm
        </ClinicHour>
      </li>
      <li>
        <ClinicHour name="Friday" invert={invert}>
          8am - 11am
        </ClinicHour>
      </li>
    </ul>
  )
}
