'use client'

import { nextSlide, prevSlide } from '@/utils/sliderUtils';
import { motion } from 'framer-motion';
import { useState } from "react";
import { CgChevronDoubleRightO, CgChevronDoubleLeftO } from "react-icons/cg";

export default function ImageSlider({ sliderImages }: { sliderImages: SliderImagesProp[] }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1)

  const slideVariants = {
    enter: {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    },
  }

  return (
    sliderImages && (
      <div
        dir="rtl"
        className="max-w-[1400px] h-[300px] md:h-[400px] xl:h-[600px] w-full m-auto px-4 relative flex justify-between items-center"
      >
        <CgChevronDoubleRightO
          className='cursor-pointer text-2xl md:text-5xl xl:text-7xl hover:text-purple-700 transition-colors'
          onClick={() => nextSlide(currentSlide, setCurrentSlide, sliderImages.length , setDirection)}
        />
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.1 } }}
          className="w-full h-full rounded-2xl bg-center bg-cover  overflow-hidden"
          style={{ backgroundImage: `url(${sliderImages[currentSlide].url})`, backgroundSize: '50%', backgroundRepeat: 'no-repeat' }}
        ></motion.div>
        <CgChevronDoubleLeftO
          className='cursor-pointer text-2xl md:text-5xl xl:text-7xl hover:text-purple-700 transition-colors'
          onClick={() => prevSlide(currentSlide, setCurrentSlide, sliderImages.length , setDirection)}
        />
      </div>
    )
  );
}
