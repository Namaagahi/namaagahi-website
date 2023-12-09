import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Video from '@/components/site/generals/video'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['namava']
}

export default async function Namava(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <Video videoSrc="https://www.namaagahi.com/wp-content/uploads/2022/01/avc_Namaagahi-Rubik-Site-Bedune-PackShot-Bedune-Seda.mp4" />
      <div className='container py-[100vh] bg-red-500'>
      Media
      </div>
    </section>
  )
}
