"use client"
import {Alert, Dropdown, Navbar} from "flowbite-react"

export default function Home() {
  return (
    <>
    <header className="bg-white py-4">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center">
        <a href="#" className="text-lg font-semibold text-gray-800">Logo</a>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-semibold text-gray-800">Welcome to Our Website</h1>
    <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in porta metus, sed
      aliquam nulla. Mauris ac tristique est, at efficitur massa. Nulla facilisi. Aliquam erat volutpat. Sed luctus
      faucibus est, vel feugiat diam hendrerit et.</p>
    <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Get Started</button>
    <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800">Service 1</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut erat
      sagittis, tincidunt nisi et, interdum libero. Nulla facilisi.</p>
  </div>
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800">Service 2</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut erat
      sagittis, tincidunt nisi et, interdum libero. Nulla facilisi.</p>
  </div>
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800">Service 3</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut erat
      sagittis, tincidunt nisi et, interdum libero. Nulla facilisi.</p>
  </div>
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800">Service 3</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut erat
      sagittis, tincidunt nisi et, interdum libero. Nulla facilisi.</p>
  </div>
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800">Service 3</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut erat
      sagittis, tincidunt nisi et, interdum libero. Nulla facilisi.</p>
  </div>
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800">Service 3</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut erat
      sagittis, tincidunt nisi et, interdum libero. Nulla facilisi.</p>
  </div>
  
</div>

  </main>

  <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <p className="text-center text-gray-400">&copy; 2023 Company Name. All rights reserved.</p>
    </div>
  </footer>
  </>
  )
}
