import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/mdx'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}