import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Container from '@/components/site/generals/container'
import { FaPhoneSquareAlt } from "react-icons/fa"
import dynamic from 'next/dynamic'
const Map = dynamic(() => import( '@/components/site/generals/map'), {
  ssr: false
})

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['contact']
}

export default async function Contact(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24 '>
      <div className='container h-[50vh] flex flex-col items-center justify-between gap-9'>
        <p className='font-bold text-5xl'>
          {page.contact.title}
        </p>
        <Container>
          <div className='flex flex-col md:flex-row justify-center items-center gap-x-3 gap-y-3 w-full'>
            <div className=' flex flex-col gap-y-10 w-full md:w-1/2 '>
              <p className='text-center text-2xl xl:text-4xl font-bold leading-10'>
                {page.contact.address}
              </p>
              <div className="flex items-center justify-center gap-x-2 text-6xl font-bold">
                <FaPhoneSquareAlt  />
                <p>
                  {page.contact.phone}
                </p>
              </div>
              <div className="flex flex-col">
                <p>
                  <span>
                    {page.contact['it-email-title']}
                  </span>
                  {page.contact['it-email']}
                </p>
                <p>
                <span>
                    {page.contact['info-email-title']}
                  </span>
                  {page.contact['info-email']}
                </p>
              </div>
            </div>
            <div className='w-full md:w-1/2 '>
              <Map lang={lang} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
