'use client'

import React, { useEffect, useState } from 'react'
import { sliderImages } from '@/lib/images'
import { CiCircleChevLeft, CiCircleChevRight  } from "react-icons/ci"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import { FaRegCircle } from "react-icons/fa"
import { motion, useAnimation, useMotionValue, useTransform, animate } from 'framer-motion'
import { Locale } from '@/config/i18n.config'
import { FaPhone } from "react-icons/fa6"
import { prevSlide, nextSlide, goToSlide } from '@/utils/sliderUtils'

export default function Hero({ lang }: { lang: Locale }) {
  const [currentSlide, setCurrentSlide] = useState<number>(2)
  const [direction, setDirection] = useState<number>(1); // 1 for right, -1 for left
  const [scrolling, setScrolling] = useState(false)
  const controls = useAnimation()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const baseText = "02196610" as string
  const displayText = useTransform(rounded, (latest) => baseText.slice(0, latest))
  const phoneIconControls = useAnimation()

  const scrollToBottom = () => {
    const parentDiv = document.getElementById('parentDiv')
    if (parentDiv) {
      const yOffset = parentDiv.getBoundingClientRect().bottom + window.scrollY - 60
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const threshold = 10
    setScrolling(scrollTop > threshold)
  }

  useEffect(() => {
    setTimeout(() => {
      nextSlide(currentSlide, setCurrentSlide, sliderImages.length)
    }, 7000)
  }, [currentSlide])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({ x: (scrolling && lang === 'fa') ? '-100%' : (scrolling && lang === 'en') ? '+100%' : '0%', y: scrolling ? '60px' : '0', transition: { duration: 0.2, delay: 1 }, opacity: 1 })
    phoneIconControls.start({ opacity: scrolling ? 0 : 1, transition: { duration: 2, delay: 1 } })
  }, [scrolling, controls, phoneIconControls])

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
      delay: 1
    })
    return controls.stop
  }, [])

  return (
    <div
      className="relative w-full h-screen bg-center bg-cover duration-1000"
      style={{ backgroundImage: `url(${sliderImages[currentSlide].url})`}}
    >
      <div
        className='absolute top-0 right-0 max-w-[300%] h-full w-full m-auto  overflow-hidden'
        dir='rtl'
        id='parentDiv'
      >
        <div className='absolute top-0 right-0 w-full h-full bg-black/30 transition ease-in-out delay-1000' />
        <div className='absolute w-full bottom-36 -translate-x-0 translate-y-[-50%] left-7 flex justify-end items-center gap-x-1 py-2 border-b-purple-500 border-b-[3px]'>
          {sliderImages.map((slide, slideIndex) => (
            <div key={slide.id}>
              <FaRegCircle
                size={17}
                className={`cursor-pointer text-white ${currentSlide === slideIndex && 'text-purple-500 font-bold'}`}
                onClick={() => goToSlide(slideIndex, setCurrentSlide)}
              />
            </div>
          ))}
        </div>
        <motion.div
          className={`absolute top-28 ${lang === 'fa' ? 'left-0  rounded-r-3xl' : 'right-0  rounded-l-3xl'} min-h-[50px] text-xl w-[170px] bg-black/50 py-2 px-2 flex justify-center items-center gap-2`}
          initial={{ x: 0, opacity: 0 }}
          animate={controls}
        >
          <motion.span className='text-white font-bold text-2xl'>{displayText}</motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={phoneIconControls}
          >
            <FaPhone className='text-white text-xl' />
          </motion.div>
        </motion.div>
        <div className='hidden md:block absolute bottom-7 -translate-x-0 translate-y-[-50%] left-3 rounded-full p-2 text-white cursor-pointer'>
          <CiCircleChevLeft
            size={70}
            onClick={() => prevSlide(currentSlide, setCurrentSlide, sliderImages.length)}
          />
        </div>
        <div className='hidden md:block absolute bottom-7 -translate-x-0 translate-y-[-50%] left-20 rounded-full p-2 text-white cursor-pointer'>
          <CiCircleChevRight
            size={70}
            onClick={() => nextSlide(currentSlide, setCurrentSlide, sliderImages.length)}
          />
        </div>
        <div className='absolute bottom-16 -translate-x-0 translate-y-[-100%] left-[42%] md:right-3 rounded-full p-2 text-white cursor-pointer animate-bounce'>
          <MdOutlineKeyboardDoubleArrowDown
            size={70}
            onClick={scrollToBottom}
          />
        </div>
      </div>
    </div>
  )
}
