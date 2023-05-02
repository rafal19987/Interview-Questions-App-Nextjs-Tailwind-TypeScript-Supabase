//lib
import { Montserrat } from 'next/font/google'

//components
import Header from './components/shared/Header/Header'
import Footer from './components/shared/Footer/Footer'

// styles
import './globals.css'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Interview Questions App',
  description: 'JavaScript Interview Questions App',
  icons: {
    icon: '/pageFavicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center items-center lg:w-screen lg:h-screen  text-zinc-500 bg-[#e9eaed] ${montserrat.className}`}
      >
        <div className="relative overflow-hidden lg:h-screen lg:flex lg:justify-center lg:items-center lg:w-[800px] xl:w-[1200px]">
          <div className="flex flex-col justify-between items-center min-h-screen max-h-full w-full">
            <Header />
            <main className="flex grow flex-col items-center h-full w-full mx-6 bg-white verflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
