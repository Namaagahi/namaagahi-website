import '../globals.css'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props

  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  )
}
