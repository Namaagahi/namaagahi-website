'use client'

import { motion } from 'framer-motion'

export default function TimeLineElement(props: TimeLineElementProps) {
  const { title, time, color, direction } = props
  const containerVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },

  }

  return (
    <div className='relative'>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.7,
          delay: 3
        }}
        className={`relative w-[250px] sm:w-[100px] md:w-[120px] lg:w-[170spx] xl:w-[200px] 2xl:w-[250px] p-4 flex justify-center items-center text-lg animate-waving-hand text-white`}
        style={{ backgroundColor: color }}
      >
        <p>{time}</p>
        <div className='flex flex-col items-center '>
          <div className={`absolute ${direction === 'top' ? 'top-0 -translate-y-16':'bottom-0 translate-y-16'}  left-1/2 transform -translate-x-1/2 w-[2px] h-14 z-10 bg-gray-400`} />
          <ol className={`absolute top-0 ${direction === 'top' ? '-translate-y-32':'translate-y-32'} gap-y-2 flex flex-col items-center  mt-3 font-bold list-disc text-sm  w-full`}>
            {title.map((item) => (
              <li key={item} className='text-center text-purple-500'>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </div>
  )
}
