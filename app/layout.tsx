//components
import Header from './components/shared/Header/Header'
import Footer from './components/shared/Footer/Footer'

// styles
import './globals.css'

export const metadata = {
  title: 'Interview Questions App',
  description: 'JavaScript Interview Questions App',
  icons: {
    icon: '/pageFav.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen font-body text-zinc-500 bg-zinc-800">
        <div className="relative overflow-hidden">
          <div className="flex flex-col justify-between items-center min-h-screen max-h-full ">
            <Header />
            <main className="flex grow flex-col items-center h-full w-full mx-6 verflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
