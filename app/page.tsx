import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 py-8 mt-24 text-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-700 align-center">Fatduck Research</h1>
      <p className="text-gray-600 text-center italic mt-24 prose mx-auto">
        Fatduck research aims to publish latest findings about our AI and social experiments. We aim to bring the solarpunk ethos to AI development.
      </p>
      <Link
        href="/blog"
      >
        Blog
      </Link>
    </div>
  )
}