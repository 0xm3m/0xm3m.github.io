import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Terminal, Shield, Cpu, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">
          0xm3m
        </h1>
        <p className="text-xl text-gray-400">
          Ethical Hacker | Security Researcher | Digital Guardian
        </p>
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
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="0xm3m profile picture"
          width={300}
          height={300}
          className="rounded-full border-4 border-green-500"
        />
        <div className="space-y-6 max-w-2xl">
          <p className="text-lg">
            Greetings, I'm Gnanaraj "0xm3m" Mauviel, a passionate ethical hacker and cybersecurity researcher with over a decade of experience in the digital trenches. My mission: to uncover vulnerabilities, fortify digital bastions, and make the vast cyberspace a safer realm for all who traverse it.
          </p>
          <p className="text-lg">
            Armed with a keyboard and an insatiable curiosity, I've dedicated my career to staying one step ahead of cyber adversaries. From safeguarding critical infrastructure to securing the Internet of Things, I'm constantly pushing the boundaries of what's possible in cybersecurity.
          </p>
        </div>
      </div>

      <section className="bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Digital Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
            <Terminal className="w-8 h-8 mt-1 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Code Whisperer</h3>
              <p className="text-gray-400">Fluent in the languages of machines, from low-level assembly to high-level scripting.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
            <Shield className="w-8 h-8 mt-1 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Digital Fortress Architect</h3>
              <p className="text-gray-400">Designing impenetrable systems and networks that stand strong against cyber sieges.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
            <Cpu className="w-8 h-8 mt-1 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Vulnerability Voyager</h3>
              <p className="text-gray-400">Exploring the uncharted territories of systems, unearthing hidden flaws before they can be exploited.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
            <Zap className="w-8 h-8 mt-1 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Cyber Sentinel</h3>
              <p className="text-gray-400">Standing vigilant against digital threats, ready to neutralize attacks at a moment's notice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Cyber Chronicles</h2>
        <div className="space-y-8">
          <div className="relative pl-8 pb-8 border-l-2 border-green-500">
            <div className="absolute left-[-8px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-2">Lead Security Architect | QuantumShield Inc.</h3>
            <p className="text-gray-400 mb-2">2020 - Present</p>
            <p className="text-gray-300">Orchestrating digital defenses for Fortune 500 companies, weaving an impenetrable web of security protocols and cutting-edge technologies.</p>
          </div>
          <div className="relative pl-8 pb-8 border-l-2 border-green-500">
            <div className="absolute left-[-8px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-2">Cyber Threat Hunter | ByteGuard Solutions</h3>
            <p className="text-gray-400 mb-2">2017 - 2020</p>
            <p className="text-gray-300">Prowled through digital landscapes, tracking down elusive threats and neutralizing potential cyber catastrophes before they could materialize.</p>
          </div>
          <div className="relative pl-8 pb-8 border-l-2 border-green-500">
            <div className="absolute left-[-8px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-2">Penetration Tester | CyberNinja Consulting</h3>
            <p className="text-gray-400 mb-2">2014 - 2017</p>
            <p className="text-gray-300">Infiltrated systems with precision and stealth, exposing vulnerabilities and fortifying defenses against the dark arts of cyber warfare.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Digital Badges of Honor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Master of Cyber Defense</h3>
            <p className="text-gray-400">GIAC Security Expert (GSE)</p>
            <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Certified Ethical Hacker</h3>
            <p className="text-gray-400">EC-Council</p>
            <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Offensive Security Ninja</h3>
            <p className="text-gray-400">Offensive Security Certified Professional (OSCP)</p>
            <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Cloud Security Sentinel</h3>
            <p className="text-gray-400">AWS Certified Security - Specialty</p>
            <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <Link href="/blog" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Explore My Cyber Insights
        </Link>
      </section>
    </div>
  )
}

