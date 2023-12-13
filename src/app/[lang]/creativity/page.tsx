import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Video from '@/components/site/generals/video'
import ImageFrame from '@/components/site/generals/imageFrame'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['creativity']
}

export default async function Creativity(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <Video videoSrc="https://www.namaagahi.com/wp-content/uploads/2022/01/avc_Namaagahi-Rubik-Site-Bedune-PackShot-Bedune-Seda.mp4" />
      <div className='px-16 pt-[100vh] pb-24'>
        <div className='grid grid-cols-12 gap-7'>
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
