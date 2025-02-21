import Image from 'next/image'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold mb-4">0xm3m</h1>
        <p className="text-xl text-gray-400">Security Researcher</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/0xm3m" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/gnanaraj-mauviel/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/0xm3m" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://app.hackthebox.com/profile/660398" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.9959 0L5.71703 3.60131V10.8047L0 14.0601V21.2615L6.27804 24.8622L12 21.2615L17.7219 24.8622L24 21.2615V14.0601L18.2829 10.8047V3.60131L11.9959 0ZM18.2829 14.9502L12.5609 18.5509V15.3937L18.2829 11.7938V14.9502ZM12.5609 9.91541L18.2829 6.31541V9.47148L12.5609 13.0723V9.91541ZM5.71703 14.9502V11.7938L11.4382 15.3937V18.5509L5.71703 14.9502ZM11.4382 9.91541V13.0723L5.71703 9.47148V6.31541L11.4382 9.91541Z"/>
            </svg>
          </a>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <Image
          src="https://raw.githubusercontent.com/0xm3m/0xm3m.github.io/main/0xm3m.jpeg?height=300&width=300"
          alt="0xm3m profile picture"
          width={300}
          height={300}
          className="rounded-full border-4 border-green-500"
        />
        <div className="space-y-6 max-w-2xl">
          <section>
            <div className="flex-1">
            <h2 className="text-[#00FF00] font-mono text-2xl mb-4">whoami</h2>
            <p className="text-[#00FF00] font-mono leading-relaxed text-justify">
              {`Hi, I’m Gnanaraj Mauviel (0xm3m) – a passionate AppSec and Red Teaming with 3+ years of hacking experience. Obsessed with security, breaking things, and making them stronger.
              
              Off-duty? Catch me whipping up flavors in the kitchen or chasing adventures while traveling.`}
            </p>
          </div>
          </section>
        </div>
      </div>

      <section className="bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>Penetration Testing & Vulnerability Assessment</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>Network & Web Application Security</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>Source Code Analysis (White Box Testing)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>Mobile Application Penetration Testing</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

