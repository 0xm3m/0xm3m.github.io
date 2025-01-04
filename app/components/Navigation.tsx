import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors">
          <span className="mr-2">&lt;/&gt;</span>
          0xm3m
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-green-400 transition-colors">About</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          </li>
          <li>
            <Link href="/cv" className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">
              CV
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

