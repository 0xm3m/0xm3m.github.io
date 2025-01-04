import './globals.css'
import { Space_Mono } from 'next/font/google'
import Navigation from './components/Navigation'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export const metadata = {
  title: 'CyberSentinel | Ethical Hacker & Security Researcher',
  description: 'Portfolio of Alex "CyberSentinel" Johnson, a leading ethical hacker and security researcher, uncovering vulnerabilities to make the digital world safer.',
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
            <p>&copy; {new Date().getFullYear()} CyberSentinel. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

