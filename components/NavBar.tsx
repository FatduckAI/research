import Link from 'next/link'

const navLinks = [
  { href: 'https://fatduck.ai', label: 'Fatduck.ai' },
  { href: 'https://ducky.fatduck.ai', label: 'Ducky' },
]

export default function Navbar() {
  return (
    <nav className=" sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-xl text-gray-700"
          >
            Fatduck
          </Link>
          <div className="flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:underline transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}