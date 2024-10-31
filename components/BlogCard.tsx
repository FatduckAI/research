import { BlogPost } from '@/lib/mdx'
import Link from 'next/link'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
          {post.frontMatter.title}
        </h2>
      </Link>
      <div className="mb-4 text-gray-600">
        <span>{post.frontMatter.date}</span>
        <span className="mx-2">•</span>
        <span>{post.frontMatter.author}</span>
      </div>
      <div className="mb-4">
        {post.frontMatter.categories.map((category) => (
          <span
            key={category}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {category}
          </span>
        ))}
      </div>
      <p className="text-gray-700">{post.frontMatter.excerpt}</p>
    </div>
  )
}