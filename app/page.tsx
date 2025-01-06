import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Terminal, Shield, Cpu, Zap } from 'lucide-react'

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    {icon}
  </a>
);

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
    {icon}
    <div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base">{description}</p>
    </div>
  </div>
)

interface CertificationCardProps {
  title: string;
  certification: string;
  progress: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, certification, progress }) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm md:text-base">{certification}</p>
    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
)

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
          <p className="text-base md:text-lg text-gray-400">
            Welcome to my portfolio! I am a passionate security researcher with a focus on cyber defense and ethical hacking.
          </p>
          <div className="space-y-4">
            <SkillCard
              icon={<Terminal className="w-6 h-6 text-green-500" />}
              title="Penetration Testing"
              description="Expert in identifying and exploiting vulnerabilities in systems and networks."
            />
            <SkillCard
              icon={<Shield className="w-6 h-6 text-green-500" />}
              title="Incident Response"
              description="Experienced in responding to and mitigating security incidents."
            />
            <SkillCard
              icon={<Cpu className="w-6 h-6 text-green-500" />}
              title="Reverse Engineering"
              description="Skilled in analyzing and understanding malware and other malicious code."
            />
            <SkillCard
              icon={<Zap className="w-6 h-6 text-green-500" />}
              title="Cyber Threat Intelligence"
              description="Proficient in gathering and analyzing threat intelligence to protect against cyber attacks."
            />
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Certifications</h2>
        <div className="space-y-4">
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