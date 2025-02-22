import Link from "next/link";


export default function About() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
        <h1 className="text-5xl font-bold text-pink-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">DreamWande is your go-to destination for trendy and stylish fashion accessories. We aim to bring high-quality products to fashion enthusiasts worldwide. Stay updated as we grow and evolve!</p>
        <Link href="/" className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg">Go Back Home</Link>
      </div>
    );
  }