'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/config/i18n.config'
import Image from 'next/image'
import cloudinaryLoader from '../cloudinaryLoader'

export default function LocaleSwitcher(props: MenuIconSize) {
  const { size } = props
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className="font-medium flex items-center gap-2">
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className=' flex items-center bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-70'
            >
              <div className="inline-flex items-center">
                {locale === 'fa' ?
                  <Image
                    src={'/v1702450777/website-assets/images/icons/n0lcy75mzwryecwlfqs1.png'}
                    width={size}
                    height={size}
                    alt='fa'
                    loader={cloudinaryLoader}
                  />
                :
                  <Image
                    src={'/v1702450776/website-assets/images/icons/fd1clu3k96n29hl04tos.png'}
                    width={size}
                    height={size}
                    alt='en'
                    loader={cloudinaryLoader}
                  />
                }
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
