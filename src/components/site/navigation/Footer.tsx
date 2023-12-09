import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import React from 'react'
import examplePic from '../../../../public/images/footer/1.jpg'
import logo from '../../../../public/images/logo/logo.svg'
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import Link from 'next/link'

const footerContactLinks = [
  { id: 1, icon: <BsFillTelephoneFill />, title: '021-96610' },
  { id: 2, icon: <IoMailOutline />, title: 'info@namaagahi.com' },
]

const footerSocialLinks = [
  { id: 1, icon: <BsInstagram />, src: 'https://www.instagram.com/namaagahi/' },
  { id: 2, icon: <BsLinkedin />, src: 'https://www.linkedin.com/company/namagahi' },
  { id: 3, icon: <BsFacebook />, src: 'https://www.facebook.com/namaagahi.ir' }
]

export default async function Footer({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <footer
      dir='rtl'
      className='relative text-white dark:text-[#0A142F] overflow-x-clip flex justify-center items-center w-full z-10 p-10 md:p-24 md:pb-6 mt-[1500px] xs:mt-[1000px] sm:mt-[500px] md:mt-[700px]'
    >
      <div className='absolute bottom-0 min-h-[370px] md:h-[500px] w-[150%] rounded-t-[80%] bg-[#0A142F] dark:bg-neutral-100 px-[40%]'>
        <div className="relative">
          <Image
            className="absolute rounded-full w-[170px] md:w-[400px] h-[170px] md:h-[400px] top-1/4 'right-1/3' transform translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 z-20"
            src={examplePic}
            alt="footer-image"
            priority
          />
          <div className="absolute rounded-full border-[30px] border-gray-500 border-opacity-30 w-[190px] md:w-[430px] h-[190px] md:h-[430px] top-1/4 'right-2/3' transform translate-x-1/2 -translate-y-1/2 z-10"></div>
          <div className="absolute rounded-full border-[30px] border-gray-500 border-opacity-10 w-[230px] md:w-[470px] h-[230px] md:h-[470px] top-1/4 'right-2/3' transform translate-x-1/2 -translate-y-1/2 z-10"></div>
        </div>
      </div>

      <div className='flex flex-col justify-end gap-3 items-end w-full h-[100%] break-words mt-44 md:mt-0 z-20'>
        <ul className="flex flex-row gap-3 sm:gap-5 md:gap-10 justify-center font-bold ">
          {
            component.footer.footerNavLinks.map((footerLink) => (
              <Link href={`/${lang}${footerLink.src}`} key={footerLink.id}>
                <li className='cursor-pointer hover:text-[#9b51e0] text-xs sm:text-sm md:text-lg hover:scale-110 transition-colors'>
                  {footerLink.title}
                </li>
              </Link>
            ))
          }
        </ul>
        <hr className="h-px w-full bg-gray-400 border-0  md:mt-5" />
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-5 mt-5'>
          <div className='flex flex-row gap-6 md:gap-8 items-center'>
            {
              footerContactLinks.map((footerContactLink) => (
                <div
                  key={footerContactLink.id}
                  className='flex items-center gap-2 hover:text-[#9b51e0] text-sm md:text-lg transition-all'
                >
                  <Link href={`${footerContactLink.id === 1 ?`tel:${footerContactLink.title}` : `mailto:${footerContactLink.title}` }`}>
                    <p>
                      {footerContactLink.title}
                    </p>
                  </Link>
                  <p>
                    {footerContactLink.icon}
                  </p>
                </div>
              ))
            }
          </div>
          <Image
            alt='footer-logo'
            src={logo}
            width={48}
            height={48}
            className='animate-bounce'
          />
          <div className='flex gap-5 md:gap-8 items-center'>
            {
              footerSocialLinks.map((footerSocialLink) => (
              <Link
                href={footerSocialLink.src}
                key={footerSocialLink.id}
                className='flex gap-4 items-center cursor-pointer hover:text-[#9b51e0] text-sm md:text-lg transition-all'
              >
                <p className='text-lg md:text-3xl'>
                  {footerSocialLink.icon}
                </p>
              </Link>
              ))
            }
          </div>
        </div>
        <p className='text-xs mx-auto text-center mt-2 md:mt-10 lg:mt-14 md:text-base'>
          {component.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
