import { Locale } from "@/config/i18n.config";
import Container from "../generals/container";
import { getDictionary } from "@/lib/dictionary";
import Reveal from "../generals/reveal";

export default async function Notice({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <Reveal>
      <section className='py-24 '>
        <div className="container flex flex-col gap-5 items-center justify-between">
          <p className='font-bold text-3xl'>
            {component.notice.title}
          </p>
          <Container>
            <p className="text-sm text-justify">
              {component.notice.description}
            </p>
          </Container>
        </div>
      </section>
    </Reveal>
  )
}
