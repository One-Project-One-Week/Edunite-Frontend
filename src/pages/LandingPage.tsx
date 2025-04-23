import Image from "@/assets/prof.svg"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <main className=" flex items-center justify-center my-10">
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Text Section */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 text-lg">
          Explore the best features and learn how we can help you succeed. This landing page is simple, clean, and effective.
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition">
        <Link to="/login">Join Now</Link>
        </button>
      </div>
  
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={Image}// Replace with your image path
          alt="Landing"
          className="w-full max-w-md"
        />
      </div>
      
    </div>
  </main>
  
  )
}
