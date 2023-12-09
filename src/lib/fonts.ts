import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'

export const sahel = localFont({
  src: [{
    path: '../../public/fonts/Sahel-Bold-FD.ttf',
    weight: '500',
    style:"bold"
  },
    {
      path: '../../public/fonts/Sahel-FD.ttf',
      weight: '400',
      style:"normal"
    },
  ],
  variable: '--font-sahel'
})

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
})
