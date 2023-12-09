import { Locale } from '@/config/i18n.config'
import heroImage from '../../../../public/images/media/1.jpg'

export default function Hero({ lang }: { lang: Locale }) {
  return (
    <div
      className="relative max-w-full md:w-full overflow-hidden h-[670px] bg-center bg-cover duration-1000 scale-105"
      style={{ backgroundImage: `url(${heroImage.src})`}}
    ></div>
  )
}
