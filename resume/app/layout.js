import './globals.css'
import { Figtree} from 'next/font/google'
import Header from './components/Header'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Create your resume',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header></Header>
        {children}
        </body>
    </html>
  )
}
