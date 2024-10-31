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
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

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