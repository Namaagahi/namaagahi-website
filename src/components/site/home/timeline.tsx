import { Locale } from '@/config/i18n.config'
import TimeLineElement from './timeLineElement'
import { getDictionary } from '@/lib/dictionary'

export default async function Timeline({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <section className='py-24 '>
      <div className="container flex flex-col-reverse items-center justify-center sm:flex-row-reverse w-full">
        {component.timeline.timelineElements.map((element) => (
          <TimeLineElement
            key={element.id}
            title={element.title}
            color={element.color}
            time={element.time}
            direction={element.direction}
          />
        ))}
      </div>
    </section>
  )
}
