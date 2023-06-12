import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Unlearn Nepal',
  description: 'Topics not taught',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' font-mono' >
        <Header />
        {children}
      </body>
    </html>
  )
}
