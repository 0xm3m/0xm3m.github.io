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
          <SocialLink 
            href="https://app.hackthebox.com/profile/660398" 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9959 0L5.71703 3.60131V10.8047L0 14.0601V21.2615L6.27804 24.8622L12 21.2615L17.7219 24.8622L24 21.2615V14.0601L18.2829 10.8047V3.60131L11.9959 0ZM18.2829 14.9502L12.5609 18.5509V15.3937L18.2829 11.7938V14.9502ZM12.5609 9.91541L18.2829 6.31541V9.47148L12.5609 13.0723V9.91541ZM5.71703 14.9502V11.7938L11.4382 15.3937V18.5509L5.71703 14.9502ZM11.4382 9.91541V13.0723L5.71703 9.47148V6.31541L11.4382 9.91541Z"/>
              </svg>
            } 
          />
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