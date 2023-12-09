import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Container from '@/components/site/generals/container'
import JoinUsForm from '@/components/site/jobs/joinUsForm'


export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['jobs']
}

export default async function Jobs(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container h-[100vh] flex flex-col items-center gap-9'>
        <p className='font-bold text-5xl'>
          {page.jobs.title}
        </p>
        <Container>
          <JoinUsForm data={page.jobs} />
        </Container>
      </div>
    </section>
  )
}
