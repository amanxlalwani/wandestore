import Link from "next/link";




export default function Blog() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
        <h1 className="text-5xl font-bold text-pink-600">Coming Soon</h1>
        <p className="mt-4 text-lg text-gray-600">We're working on something exciting. Stay tuned!</p>
        <Link href="/" className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg">Go Back Home</Link>
      </div>
    );
  }