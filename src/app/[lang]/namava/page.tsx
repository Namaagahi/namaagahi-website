import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Video from '@/components/site/generals/video'
import Hero from '@/components/site/media/hero'
import CallToAction from '@/components/site/generals/callToAction'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['namava']
}

export default async function Namava(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <div className='absolute top-0 right-0 w-full h-screen'>
      <Hero />
      <div className='px-16'>
        <CallToAction lang={lang} callActionsCards={page.namava.callActions.callActionCards} />
      </div>
    </div>
  ) 
}
