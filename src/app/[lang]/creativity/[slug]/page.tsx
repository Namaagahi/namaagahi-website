'use client'

import { useParams } from "next/navigation"

export default function SingleCreativity() {
    const param = useParams().slug

    return (
    <div className="w-full p-10 bg-blue-500 h-full flex justify-center items-center">
        {param}
    </div>
  )
}
