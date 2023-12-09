'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsFillSunFill } from 'react-icons/bs'
import { GiMoon } from 'react-icons/gi'

export default function ThemeToggler(props: MenuIconSize) {
  const { size } = props
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <BsFillSunFill className='text-orange-300' size={size} />
      ) : (
        <GiMoon className='text-blue-900' size={size} />
      )}
    </button>
  )
}
