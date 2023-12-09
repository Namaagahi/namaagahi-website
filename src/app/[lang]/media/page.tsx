import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Hero from '@/components/site/media/hero'
import CallToAction from '@/components/site/generals/callToAction'
import ImageSlider from '@/components/site/media/imageSlider'
import { billboardSliderImages, busSliderImages, subwaySliderImages } from '@/lib/images'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['media']
}

export default async function Media(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <div className='absolute top-0 right-0 w-full h-screen overflow-x-hidden'>
      <Hero lang={lang} />
      <div className="relative">
        <CallToAction lang={lang} callActionsCards={page.media.callActions.callActionCards} />
      </div>
      <div className='container mt-8'>
      {page.media.content.map((section, index) => (
        <div key={section.id} className='mb-8 p-8 bg-white rounded-md text-black' id={section.tag}>
          <ImageSlider sliderImages={billboardSliderImages} />
          <p className='text-2xl font-bold text-center mb-2'>{section.title}</p>
          <p className='leading-10 text-justify'>{section.desc}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
