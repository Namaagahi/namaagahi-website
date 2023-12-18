import CallActionCard from './callActionCard'
import { Locale } from '@/config/i18n.config'
import Link from 'next/link'

type Props = {
  lang: Locale
  callActionsCards: CallActionCard[]
}

export default async function CallToAction(props: Props) {
  const { lang, callActionsCards } = props

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
