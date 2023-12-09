'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/config/i18n.config'
import Image from 'next/image'
import fa from '../../public/images/icons/fa.png'
import en from '../../public/images/icons/en.png'

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
                    src={fa}
                    width={size}
                    height={size}
                    alt='fa'
                  />
                :
                  <Image
                    src={en}
                    width={size}
                    height={size}
                    alt='en'
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
