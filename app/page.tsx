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
            <HackTheBox className="w-6 h-6" />
          </a>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <Image
          src="/0xm3m.jpeg?height=300&width=300"
          alt="0xm3m profile picture"
          width={300}
          height={300}
          className="rounded-full border-4 border-green-500"
        />
        <div className="space-y-6 max-w-2xl">
          <section>
            <h2 className="text-2xl font-bold mb-4">whoami</h2>
            <p className="text-lg">
              I'm 0xm3m, a passionate security researcher and ethical hacker with over a decade of experience in the cybersecurity field. My mission is to uncover vulnerabilities, strengthen digital defenses, and make the online world a safer place for everyone.
            </p>
            <p className="text-lg mt-4">
              With a background in computer science and a lifelong fascination with technology, I've dedicated my career to staying one step ahead of cybercriminals. My work spans various domains, from critical infrastructure protection to securing cutting-edge IoT devices.
            </p>
            <p className="text-lg mt-4">
              I specialize in penetration testing, vulnerability assessment, malware analysis, and incident response. My approach combines technical expertise with creative problem-solving, allowing me to identify and mitigate complex security threats effectively.
            </p>
            <p className="text-lg mt-4">
              When I'm not diving into code or hunting for vulnerabilities, I'm actively contributing to the cybersecurity community through blog posts, conference talks, and mentoring aspiring security professionals.
            </p>
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

