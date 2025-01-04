import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Uncovering a Zero-Day Exploit',
    excerpt: 'In this post, I detail my recent discovery of a critical vulnerability in a popular software...',
    date: '2023-06-01',
  },
  {
    id: 2,
    title: 'The Importance of Multi-Factor Authentication',
    excerpt: 'Multi-factor authentication is a crucial security measure that can significantly reduce the risk of unauthorized access...',
    date: '2023-05-15',
  },
  // Add more blog posts here
]

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="hover:text-green-500">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

