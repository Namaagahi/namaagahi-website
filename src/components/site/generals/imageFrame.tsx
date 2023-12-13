'use client'

import { useState } from "react"
import { useMediaQuery } from "@react-hook/media-query"

type Props = {
    colSpan: number
    height: number
    image: string
    title: string
}

export default function ImageFrame(props: Props) {
    const { colSpan, height, image, title } = props
    const [isHovered, setIsHovered] = useState(false)
    const isMobile = useMediaQuery("(max-width: 748px)")
    const isTablet = useMediaQuery("(max-width: 1560px)")
    const adjustedColSpan = isMobile ? 12 : isTablet ? 6 : colSpan

    return (
        <div 
            className={`flex items-end border border-black justify-center aspect-auto py-4 bg-none w-full bg-gray-900/75 h-full rounded-xl bg-center cursor-pointer hover:bg-blend-darken hover:bg-opacity-70 hover:shadow-2xl shadow-black hover:scale-[1.02] transition-all duration-500 z-10 overflow-hidden bg-no-repeat bg-cover !m-0 !p-0`}
            style={{ 
                gridColumn: `span ${adjustedColSpan} / span ${adjustedColSpan}`,
                height: `${height}px`, 
                backgroundImage: `url("${image}")`, 
                aspectRatio: 'auto'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && 
                <p className="text-white text-2xl pb-10">
                    {title}
                </p>
            }
        </div>
    )
}
