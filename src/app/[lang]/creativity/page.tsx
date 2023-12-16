import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Video from '@/components/site/generals/video'
import ImageFrame from '@/components/site/generals/imageFrame'
import CallToAction from '@/components/site/generals/callToAction'
import Title from '@/components/site/generals/title'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['creativity']
}

export default async function Creativity(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <Video videoSrc="https://www.namaagahi.com/wp-content/uploads/2022/01/avc_Namaagahi-Rubik-Site-Bedune-PackShot-Bedune-Seda.mp4" />
      <div className='px-16 pt-[90vh] pb-24'>
      <div className="relative">
        <CallToAction lang={lang} callActionsCards={page.creativity.callActions.callActionCards} />
      </div>
        <div className='grid grid-cols-12 gap-7 justify-center mt-10 relative'>
          <div className='col-span-12 relative mb-10'>
            <Title 
              lang={lang}
              text={page.creativity.titles[0].title} 
              svgColor={page.creativity.titles[0].svgColor} 
              top='0' 
            />
            <p className='text-lg leading-[45px] text-justify my-24'>
              {page.creativity.titles[1].text}
            </p>
            <Title
              lang={lang}
              text={page.creativity.titles[1].title} 
              svgColor={page.creativity.titles[1].svgColor} 
              top='10' 
            />
          </div>
            {page.creativity.imageFrames.map((imageFrame) => (
              <ImageFrame
                key={imageFrame.id}
                colSpan={imageFrame.colSpan}
                height={imageFrame.height}
                title={imageFrame.title}
                image={imageFrame.url}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
