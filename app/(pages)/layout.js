"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";




export default function RootLayout({ children }) {
  const pathname=usePathname();
  return (
  

<div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600 flex items-center">
        DreamWande <span className="text-sm ml-2 text-gray-500">(Powered by <a href="https://textify.ai" className="text-blue-600">Textify AI</a>)</span>
        </h1>
        <nav>
        <ul className="flex space-x-4">
            {[
              { name: "Shop", path: "/shop" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Blog", path: "/blog" }
            ].map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <span className={`px-3 py-2 rounded-md ${pathname === link.path ? "bg-pink-600 text-white" : "hover:bg-gray-200"}`}>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="p-6 text-center">
      {children}
      </main>

      <footer className="mt-12 bg-white p-4 text-center shadow flex flex-wrap justify-center items-center text-sm text-gray-600 gap-2">
        <p>&copy; {new Date().getFullYear()} DreamWande. All rights reserved.</p>
        <span className="mx-2">|</span>
        <p><a href="https://textify.ai" className="text-blue-600">Powered by Textify AI</a></p>
        <span className="mx-2">|</span>
        <p><a href="https://wecommit.ai" target="_blank" rel="noopener noreferrer">AI Agent SaaS</a></p>
      </footer>
    </div>
   
  );
}
