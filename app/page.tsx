import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Terminal, Shield, Cpu, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          0xm3m
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Security Researcher
        </p>
        <div className="flex justify-center space-x-4">
          <SocialLink href="https://github.com/0xm3m" icon={<Github className="w-6 h-6" />} />
          <SocialLink href="https://linkedin.com/in/gnanaraj-mauviel/" icon={<Linkedin className="w-6 h-6" />} />
          <SocialLink href="https://twitter.com/0xm3m" icon={<Twitter className="w-6 h-6" />} />
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
          <p className="text-base md:text-lg">
            Greetings, I'm Gnanaraj "0xm3m" Mauviel, a passionate ethical hacker and cybersecurity researcher with over a decade of experience in the digital trenches. My mission: to uncover vulnerabilities, fortify digital bastions, and make the vast cyberspace a safer realm for all who traverse it.
          </p>
          <p className="text-base md:text-lg">
            Armed with a keyboard and an insatiable curiosity, I've dedicated my career to staying one step ahead of cyber adversaries. From safeguarding critical infrastructure to securing the Internet of Things, I'm constantly pushing the boundaries of what's possible in cybersecurity.
          </p>
        </div>
      </div>

      <section className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Cyber Chronicles</h2>
        <div className="space-y-8">
          <TimelineItem
            title="Lead Security Architect | QuantumShield Inc."
            date="2020 - Present"
            description="Orchestrating digital defenses for Fortune 500 companies, weaving an impenetrable web of security protocols and cutting-edge technologies."
          />
          <TimelineItem
            title="Cyber Threat Hunter | ByteGuard Solutions"
            date="2017 - 2020"
            description="Prowled through digital landscapes, tracking down elusive threats and neutralizing potential cyber catastrophes before they could materialize."
          />
          <TimelineItem
            title="Penetration Tester | CyberNinja Consulting"
            date="2014 - 2017"
            description="Infiltrated systems with precision and stealth, exposing vulnerabilities and fortifying defenses against the dark arts of cyber warfare."
          />
        </div>
      </section>

      <section className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Digital Badges of Honor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CertificationCard
            title="Master of Cyber Defense"
            certification="GIAC Security Expert (GSE)"
            progress={100}
          />
          <CertificationCard
            title="Certified Ethical Hacker"
            certification="EC-Council"
            progress={100}
          />
          <CertificationCard
            title="Offensive Security Ninja"
            certification="Offensive Security Certified Professional (OSCP)"
            progress={100}
          />
          <CertificationCard
            title="Cloud Security Sentinel"
            certification="AWS Certified Security - Specialty"
            progress={90}
          />
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

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    {icon}
  </a>
)

const SkillCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
    {icon}
    <div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base">{description}</p>
    </div>
  </div>
)

const TimelineItem = ({ title, date, description }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-green-500">
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-2 text-sm md:text-base">{date}</p>
    <p className="text-gray-300 text-sm md:text-base">{description}</p>
  </div>
)

const CertificationCard = ({ title, certification, progress }) => (
  <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm md:text-base">{certification}</p>
    <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
      <div className="bg-green-500 h-2 rounded-full" style={{width: `${progress}%`}}></div>
    </div>
  </div>
)

