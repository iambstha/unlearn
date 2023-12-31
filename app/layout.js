import Header from '@/components/Header'
import './globals.css'
import { Inter, Lato, Alegreya, Plus_Jakarta_Sans  } from 'next/font/google'
import Footer from '@/components/Footer'
 
const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: ['300'] })
const jakarta = Plus_Jakarta_Sans({subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'Unlearn Nepal',
  description: 'Topics not taught',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} min-h-[100vh]`}  >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
