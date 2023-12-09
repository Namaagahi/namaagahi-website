'use client'

import Image from 'next/image'
import Link from 'next/link'
import logoTextBlack from '../../../../../public/images/logo/logo-text-black.png'
import logoTextBlackEn from '../../../../../public/images/logo/logo-text-black-en.png'
import logo from '../../../../../public/images/logo/logo.svg'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Locale } from '@/config/i18n.config'
import ThemeToggler from '@/components/ThemeToggler'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa6'

type Props = {
  component: Header
  lang: Locale
}

export default function Navbar(props: Props) {
  const { component, lang } = props
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [heading, setHeading] = useState("");
  const [scrolling, setScrolling] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const threshold = 50
      setScrolling(scrollTop > threshold);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleIsMobile = () => setIsMobile(!isMobile)

  const framerSidebarPanel = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: { duration: 1 },
  }

  const framerText = (delay: number) => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    }
  }

  const logoAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div
        className={`hidden sm:block absolute top-0 bg-white px-4 ${scrolling ? 'py-2' : 'py-5'} shadow-xl transition-all duration-500 z-[999]`}
        style={lang === 'en' ? { left: '-10px', borderBottomRightRadius: '30px' } : { right: '-10px', borderBottomLeftRadius: '30px' }}

      >
        <div className="flex items-center gap-2">
          <motion.div
              className="hidden sm:flex items-center gap-2 w-44 py-4"
              variants={logoAnimation}
              initial="hidden"
              animate="visible"
          >
            <motion.div variants={item}>
              <Image
                alt='header-logo'
                src={logo}
                width={52}
                height={52}
              />
            </motion.div>
            <motion.div variants={item}>
              {
                lang === 'fa'
                ?
                <Image
                  alt='header-logo-black'
                  src={logoTextBlack}
                  width={120}
                  height={120}
                />
                :
                <Image
                  alt='header-logo-black-en'
                  src={logoTextBlackEn}
                  width={120}
                  height={120}
                />
              }
            </motion.div>
          </motion.div>
        </div>
      </div>

      <nav  className={`px-2 ${lang === 'en' ? 'sm:pl-[200px]' : 'sm:pr-[200px]'} relative z-[99] w-full m-auto flex justify-between items-center p-2 text-white sm:text-black bg-gray-100 bg-opacity-50`}>
        <motion.ul {...framerSidebarPanel} className='hidden sm:flex '>
          {
            component?.header.headerNavLinks.map((headerLink, index, ref) => (
              !headerLink.sublinks
              ?
              <li className={`py-4 px-2 xl:px-4 text-sm xl:text-base font-bold hover:bg-white transition-colors duration-500 ${`/${lang}${headerLink.src}` === pathname && 'bg-white'}`} key={headerLink.id}>
                <Link href={`/${lang}${headerLink.src}`}>
                  <motion.span {...framerText(index)}>
                    {headerLink.title}
                  </motion.span>
                </Link>
              </li>
              :
              <li
                className='py-4 px-2 xl:px-4 text-sm xl:text-base font-bold'
                onClick={() => {
                  heading !== headerLink.title ? setHeading(headerLink.title) : setHeading("");
                }}
              >
                <motion.span {...framerText(index)} className='flex items-center gap-1'>
                  {headerLink.title}
                  <span className="text-sm cursor-pointer">
                    { heading === headerLink.title ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                  </span>
                  <ul className='absolute top-16 text-sm bg-gray-100 bg-opacity-70 rounded-md '>
                  {headerLink.sublinks.map((sublink) => (
                    heading !== headerLink.title &&
                  <li className='px-2 xl:px-4 font-bold p-2 hover:bg-white transition-colors duration-500' key={sublink.id}>
                    <Link href={`/${lang}${sublink.src}`}>
                      {sublink.title}
                    </Link>
                  </li>
                  ))}
                  </ul>
                </motion.span>
            </li>
            ))
          }
          <div className='flex justify-center gap-2'>
            <LocaleSwitcher size={20} />
            <ThemeToggler size={20}/>
          </div>
        </motion.ul>

        <button
          onClick={handleIsMobile}
          className='block sm:hidden z-10 '
          data-collapse-toggle="navbar-language"
          type="button"
          aria-controls="navbar-language"
          aria-expanded="false"
        >
          {isMobile ? <AiOutlineClose size={25} className='text-white' /> : <AiOutlineMenu size={25} className='text-black'/>}
        </button>

        <motion.div
          {...framerSidebarPanel}
            className={
              isMobile
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : `sm:hidden absolute top-0 ${lang == 'en' ? 'left-[-100%] right-0 ' : 'left-0 right-[-100%]'} bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`
        }>
          <ul>
            {
              component?.header.headerNavLinks.map((headerLink, index) => (
                headerLink.sublinks
                ?
                <li className='p-4 text-4xl hover:text-gray-500' onClick={handleIsMobile} key={headerLink.id}>
                <motion.span {...framerText(index)} className='flex flex-col items-center gap-1'>
                  {headerLink.title}

                  <ul className=' py-4 text-xl hover:text-gray-500 '>
                  {headerLink.sublinks.map((sublink) => (
                    heading !== headerLink.title &&
                  <li className='px-2 xl:px-4 font-bold p-2' key={sublink.id}>
                    <Link href={`/${lang}${sublink.src}`}>
                      {sublink.title}
                    </Link>
                  </li>
                  ))}
                  </ul>
                </motion.span>
                </li>
                :
                <li className='p-4 text-4xl hover:text-gray-500' onClick={handleIsMobile}>
                  <Link href={`/${lang}${headerLink.src}`}>
                      <motion.span {...framerText(index)}>
                        {headerLink.title}
                      </motion.span>
                  </Link>
                </li>
              ))
            }
            <div className='flex justify-center gap-2 mt-4'>
              <LocaleSwitcher size={40} />
              <ThemeToggler size={40}/>
            </div>
          </ul>
        </motion.div>
      </nav>
    </div>
  )
}
