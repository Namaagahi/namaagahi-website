import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Container from '@/components/site/generals/container'
import CallToAction from '@/components/site/generals/callToAction'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['about']
}

export default async function About(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24 '>
      <div className='container h-[50vh] flex flex-col gap-9 items-center justify-between'>
        <p className='font-bold text-5xl'>
          {page.about.title}
        </p>
        <Container>
          <p>
            {page.about.about}
          </p>
          <p className='text-center font-bold text-2xl'>
            {page.about.subtitle}
          </p>
          <CallToAction lang={lang} />
        </Container>
      </div>
    </section>
  )
}
