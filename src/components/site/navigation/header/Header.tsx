import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Navbar from './navbar'

export default async function Header({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <header className='sticky top-0 px-2 z-[999] w-full'>
      <Navbar
        component={component}
        lang={lang}
      />
    </header>
  )
}
