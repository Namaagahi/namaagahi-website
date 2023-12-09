'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
interface Props {
  children: JSX.Element
  width?: string
}

export default function Reveal({ children, width = "100%" }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible')
    }
    if(!isInView) {
      mainControls.start('hidden')
    }

  }, [isInView])

  return (
    <div
      style={{  width, overflow: 'hidden' }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: width },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.7,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
