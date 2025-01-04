import Image from 'next/image'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About CyberSentinel</h1>
        <p className="text-xl text-gray-400">Defending the Digital Realm, One Vulnerability at a Time</p>
      </section>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="CyberSentinel profile picture"
          width={300}
          height={300}
          className="rounded-full border-4 border-green-500"
        />
        <div className="space-y-6 max-w-2xl">
          <p className="text-lg">
            Greetings, I'm Alex "CyberSentinel" Johnson, a passionate ethical hacker and cybersecurity researcher with over a decade of experience in the field. My mission is to uncover vulnerabilities, strengthen digital defenses, and make the online world a safer place for everyone.
          </p>
          <p className="text-lg">
            With a background in computer science and a lifelong fascination with technology, I've dedicated my career to staying one step ahead of cybercriminals. My work spans various domains, from critical infrastructure protection to securing cutting-edge IoT devices.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/cybersentinel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/cybersentinel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/cybersentinel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
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
            <span>Malware Analysis & Reverse Engineering</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>Network & Web Application Security</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>IoT & Embedded Systems Security</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>Incident Response & Digital Forensics</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">▹</span>
            <span>Security Awareness Training</span>
          </li>
        </ul>
      </section>

      <section className="bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Certifications & Achievements</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <span className="text-green-500">🏆</span>
            <span>Certified Ethical Hacker (CEH)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">🏆</span>
            <span>Offensive Security Certified Professional (OSCP)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">🏆</span>
            <span>GIAC Security Expert (GSE)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">🏆</span>
            <span>Black Hat USA 2022 Arsenal Presenter</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">🏆</span>
            <span>Multiple CVEs published for critical vulnerabilities</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

