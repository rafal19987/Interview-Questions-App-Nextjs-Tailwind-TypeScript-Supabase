//components
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className="font-body text-[#B4B4B4] bg-[#023047]">
        <div className="flex flex-col justify-between items-center min-h-screen max-h-full">
          <Header></Header>
          <main className="flex grow flex-col items-center h-4/5 w-4/5 mt-[36px] p-2">
            {children}
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
