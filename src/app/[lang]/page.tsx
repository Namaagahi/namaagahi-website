import metaJson from '@/dictionaries/meta.json'
import Hero from '@/components/site/home/hero'
import CallToAction from '@/components/site/generals/callToAction'
import Notice from '@/components/site/home/notice'
import Timeline from '@/components/site/home/timeline'
import dynamic from 'next/dynamic'
import { getDictionary } from '@/lib/dictionary'
const Map = dynamic(() => import( '@/components/site/generals/map'), {
  ssr: false
})

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['home']
}

export default async function Home(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <div className='absolute top-0 right-0 w-full h-screen'>
      <Hero lang={lang} />
      <div className="relative">
        <CallToAction lang={lang} callActionsCards={page.home.callActions.callActionCards} />
        <Notice lang={lang}/>
        <Timeline lang={lang}/>
        <div className="p-12 md:p-24 mt-10">
          <Map lang={lang}/>
        </div>
      </div>
    </div>
  )
}
