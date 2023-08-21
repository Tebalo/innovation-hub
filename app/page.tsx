"use client"
import { Button } from "@/components/ui/button";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function Theme(){
    const {setTheme} = useTheme()
    return(
        <>
          <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default function Home() {
  
  return (
    <>
    
  <main className="mx-auto px-0 py-8">
    <header className="fixed top-0 left-0 right-0 bg-slate-800 z-10">
        <div className="container mx-auto flex justify-between items-center">
            <a className="text-2xl font-bold">
            <img src="/img/banner.jpg" alt="Your Logo" className="h-8 w-8 mr-2" />
            </a>
        </div>
    </header>
    <section className="dark:bg-inherit text-center py-20 bg-[url('img/abstract-digital-grid-black-background.jpg')] bg-cover bg-center">
        <div className="items-center mb-10">  
            <h1 className="mx-auto mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Crush Business Complexity</h1>
            <p className="mx-auto mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at 26Digital we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <a href="#" className="mb-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-orange-600 rounded-full hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get Started with Us
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 shadow-md border border-blue-400 dark:bg-inherit">
                        <h3 className="text-xl font-semibold mb-3">For Developers</h3>
                        <p className="text-gray-600">Build, deploy, and operate applications at scale.</p>
                        <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Explore</a>
                    </div>
                    <div className="bg-white p-6 shadow-md border border-blue-400 dark:bg-inherit">
                        <h3 className="text-xl font-semibold mb-3">For Decision Makers</h3>
                        <p className="text-gray-600">Make informed decisions about your technology strategy.</p>
                        <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                    </div>
                </div>
            </div>
    </section>
    <section className="bg-gray-100 py-20 dark:bg-slate-700">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Explore Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md dark:bg-inherit">
                    <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md dark:bg-inherit">
                    <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
                    <p className="text-gray-600">Aliquam eget justo at odio aliquam ullamcorper ut vitae dolor.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md dark:bg-inherit">
                    <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
                    <p className="text-gray-600">Sed nec nunc vel leo eleifend auctor at eget tellus.</p>
                </div>
            </div>
        </div>
    </section>
  </main>
  <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <p className="text-center text-gray-400">&copy; 2023 26Digitalbw. All rights reserved.</p>
    </div>
  </footer>
  </>
  )
}
