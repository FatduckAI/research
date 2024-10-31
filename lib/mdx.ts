import fs from 'fs'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'

const POSTS_PATH = path.join(process.cwd(), 'content/blog')

export interface FrontMatter {
  title: string
  date: string
  author: string
  categories: string[]
  excerpt: string
}

export interface BlogPost {
  content: string
  frontMatter: FrontMatter
  slug: string
}

export async function getAllPosts() {
  const files = fs.readdirSync(POSTS_PATH)
  
  const posts = await Promise.all(
    files
      .filter((file) => /\.mdx?$/.test(file))
      .map(async (file) => {
        const filePath = path.join(POSTS_PATH, file)
        const source = fs.readFileSync(filePath, 'utf8')
        const { content, data } = matter(source)
        
        return {
          content,
          frontMatter: data as FrontMatter,
          slug: file.replace(/\.mdx?$/, ''),
        }
      })
  )
  
  return posts.sort(
    (a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  )
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  })
  
  return {
    content: compiledContent,
    frontMatter: data as FrontMatter,
    slug,
  }
}
