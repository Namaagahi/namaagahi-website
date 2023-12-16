import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Hero from '@/components/site/media/hero'
import CallToAction from '@/components/site/generals/callToAction'
import Title from '@/components/site/generals/title'
import ImageSlider from '@/components/site/media/imageSlider'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['digital']
}

export default async function About(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <div className='absolute top-0 right-0 w-full h-screen'>
      <Hero />
      <div className='px-16'>
        <CallToAction lang={lang} callActionsCards={page['digital-marketing'].callActions.callActionCards} />
          <div className='pt-12'>
            <Title
              lang={lang}
              text={page['digital-marketing'].titles[0].title}
              svgColor={page['digital-marketing'].titles[0].svgColor}
              top='30'
            />
            <p className='text-lg leading-[45px] text-justify my-24'>
              {page['digital-marketing'].titles[0].text}
            </p>
          </div>
          <div className="flex flex-col gap-16 relative">
            <Title
              lang={lang}
              text={page['digital-marketing'].titles[1].title}
              svgColor={page['digital-marketing'].titles[1].svgColor}
              top='0'
            />
            <ImageSlider sliderImages={page.media.billboardImages} />
            <Title
              lang={lang}
              text={page['digital-marketing'].titles[2].title}
              svgColor={page['digital-marketing'].titles[2].svgColor}
              top='30'
            />
            <ImageSlider sliderImages={page.media.billboardImages} />
            <Title
              lang={lang}
              text={page['digital-marketing'].titles[3].title}
              svgColor={page['digital-marketing'].titles[3].svgColor}
              top='40'
            />
            <ImageSlider sliderImages={page.media.billboardImages} />
          </div>

      </div>
    </div>
  )
}
 