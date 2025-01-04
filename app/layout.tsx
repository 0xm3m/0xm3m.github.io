import './globals.css'
import { Space_Mono } from 'next/font/google'
import Navigation from './components/Navigation'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export const metadata = {
  title: '0xm3m | Ethical Hacker & Security Researcher',
  description: 'Portfolio of Gnanaraj "0xm3m" Mauviel, ethical hacker and security researcher.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <body className="bg-black text-green-500 font-mono">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-900 text-center py-4">
            <p>&copy; {new Date().getFullYear()} 0xm3m. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

