import CallActionCard from './callActionCard'
import { Locale } from '@/config/i18n.config'
import Link from 'next/link'

export default async function CallToAction({ lang, callActionsCards }: { lang: Locale, callActionsCards: CallActionCard[] }) {

  return (
    <div className='w-full px-32 py-10 flex items-center justify-around gap-x-2 border-b'>
      {callActionsCards.map((card) => (
        <Link href={`/${lang}${card.src}`} key={card.id}>
          <CallActionCard card={card} />
        </Link>
      ))}
    </div>
  )
}
