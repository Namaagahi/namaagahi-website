'use client'

import { useEffect, useState } from "react";
import CallActionIcon from "../../../../public/icons/callActionIcon"
import { useTheme } from 'next-themes'

export default function CallActionCard(props: CallActionCardProps) {
  const { card } = props
  const [hover, setHover] = useState(false)
  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null

  return (
    <div
      className={`flex flex-col items-center gap-y-5 cursor-pointer transition-all duration-500 `}
      style={{ color: (!hover && resolvedTheme === 'dark') ? "white" : (!hover && resolvedTheme === 'light') ? "black" : card.color  }}
    >
      <div
        className={`w-20 h-20 md:w-40 md:h-40 p-0 rounded-[2rem] xl:rounded-[4rem] overflow-hidden flex justify-center items-center hover:bg-white dark:hover:bg-black transition-all hover:border-[5px] hover:-rotate-12 hover:scale-[1.1] duration-500`}
        style={{ backgroundColor: (hover && resolvedTheme === 'dark') ? 'transparent' : (hover && resolvedTheme === 'light') ? 'transparent' : card.color, borderColor: card.color }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CallActionIcon
          iconName={card.iconName}
          color={card.color}
          size={card.size}
          hover={hover}
        />
      </div>
      <p className="text-xl xl:text-3xl font-bold">{card.title}</p>
    </div>
  )
}
