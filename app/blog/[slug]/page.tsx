import { getAllPosts, getPostBySlug } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const post = await getPostBySlug(slug)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
      <div className="mb-8 text-gray-600">
        <span>{post.frontMatter.date}</span>
        <span className="mx-2">•</span>
        <span>{post.frontMatter.author}</span>
      </div>
      <article className="prose lg:prose-xl max-w-none">
        {post.content}
      </article>
    </div>
  )
}