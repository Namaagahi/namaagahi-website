import '../globals.css'
import { Locale, i18n } from '@/config/i18n.config'
import Header from '@/components/site/navigation/header/header'
import Providers from '@/lib/Providers'
import { roboto, sahel } from '@/lib/fonts'
import Footer from '@/components/site/navigation/footer'

type RootLayoutProps = {
  children: React.ReactNode
  params: { lang: Locale }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout(props: RootLayoutProps) {
  const { params, children } = props

  return (
    <html lang={params.lang} dir={params.lang === 'fa' ? 'rtl' : 'ltr'}>
      <body className={`
        ${params.lang === 'fa' ? sahel.variable : roboto.variable}
        ${params.lang === 'fa' ? 'font-sahel' : 'font-roboto'}
        h-screen
      `}
      suppressHydrationWarning={true}
      >
        <Providers>
          <main className='z-10 bg-gradient-to-r from-fuchsia-500/10 via-violet-900/10 to-indigo-500/10 h-[250%]'>
            <Header lang={params.lang} />
            {children}
          </main>
            <Footer lang={params.lang} />
        </Providers>
      </body>
    </html>
  )
}
