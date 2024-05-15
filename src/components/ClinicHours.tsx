import clsx from 'clsx'

function ClinicHour({
  name,
  children,
  invert = false,
  email=false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
  email?:boolean
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
      {email?<a href='mailto:help@otmchiropractic.com'>help@otmchiropractic.com</a>:children}
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
        <ClinicHour name="Clinic Location" invert={invert}>
          Level 1, 200 Bradman Street, Sunnybank Hills
        </ClinicHour>
      </li>
      <li>
        <ClinicHour name="Monday & Thursday" invert={invert}>
          8am - 6pm
        </ClinicHour>
      </li>
      <li>
        <ClinicHour name="Email" invert={invert} email={true}>
          help@otmchiropractic.com"
        </ClinicHour>
      </li>
      <li>
        <ClinicHour name="Phone" invert={invert}>
          0457 256 628
        </ClinicHour>
      </li>
    </ul>
  )
}
