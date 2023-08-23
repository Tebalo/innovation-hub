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
import { AlignTopIcon, MagicWandIcon } from "@radix-ui/react-icons";
import Image from 'next/image'
import logo from './img/26logo_prev_ui.png'

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
    <header className="fixed top-0 left-0 right-0 bg-slate-800 z-10 h-auto">
        <div className="bg-inherit m-2 z-10">
            <Image
             src={logo} alt="Your Logo" className="h-8 w-8 mr-2" 
             unoptimized
             sizes="100vw"
             style={{
               width: '5%',
               height: '80%',
             }}
             width={500}
             height={300}
             />
             <div className="mt-2 grid grid-cols-3">
                <div><h2>Showcase</h2></div>
                <div><h2>Templates</h2></div>
             </div>
        </div>
    </header>
    <section className="dark:bg-inherit text-center py-20 bg-[url('img/abstract-digital-grid-black-background.jpg')] bg-cover bg-center">
        <div className="items-center mb-10">  
            <h1 className="mx-auto mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Crush Business Complexity</h1>
            <p className="mx-auto mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at 26Digital we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <a href="#" className="mb-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get Started with Us
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 shadow-md border border-blue-400 dark:bg-transparent">
                    <h3 className="text-xl font-semibold mb-3">For Developers</h3>
                    <p className="text-gray-600">Build, deploy, and operate applications at scale.</p>
                    <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Explore</a>
                </div>
                <div className="bg-white p-6 shadow-md border border-blue-400 dark:bg-transparent">
                    <h3 className="text-xl font-semibold mb-3">For Decision Makers</h3>
                    <p className="text-gray-500">Make informed decisions about your technology strategy.</p>
                    <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    <section className="bg-gray-100 py-10 dark:bg-slate-100">
        <div className="container mx-auto">
            <div className="text-center"><h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">Explore Our Solutions</h2></div>
            <div className="mb-20">
            <div className="font-semibold"><h3 className="text-gray-900 mb-2">By Industry</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Advertising & Marketing</h3>
                    <p className="text-gray-600 text-sm">Offer meaningful, personalized products and services for all.</p>
                </div>
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Financial Services</h3>
                    <p className="text-gray-600 text-sm">Simpler operations. Scalable solutions. Satisfied customers.</p>
                </div>
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Gorvernment</h3>
                    <p className="text-gray-600 text-sm">Government software to engage citizens and modernize processes.</p>
                </div>
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Health & Life Sciences</h3>
                    <p className="text-gray-600 text-sm">People-centric healthcare at scale. Better outcomes for all.</p>
                </div>
                <div className="justify justify-end">
                    <h2 className="text-blue-600 text-lg">View All Industries</h2>
                </div>
            </div>
            </div>
            <div className="my-2">
            <div className="pl-0 font-semibold"><h3 className="text-gray-900 mb-2">By Technology Category</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Analytics & Data Lakes</h3>
                    <p className="text-gray-600 text-sm">Securely store, categorize, and analyze all your data in one, centralized repository.</p>
                </div>
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Machine Learning</h3>
                    <p className="text-gray-600 text-sm">Build with powerful services and platforms, and the broadest machine learning framework support anywhere.</p>
                </div>
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Business Process Management</h3>
                    <p className="text-gray-600 text-sm">Government software to engage citizens and modernize processes.</p>
                </div>
                <div className="bg-white p-6 shadow-lg box-border md:box-content h-auto border-t-4 dark:bg-inherit group-hover:bg-slate-200 focus:bg-slate-500 hover:cursor-pointer">
                    <MagicWandIcon className="text-blue-500 h-[2rem] w-[2rem]"/>
                    <h3 className="text-l font-semibold mb-3 text-blue-700">Security, Identity & Compliance</h3>
                    <p className="text-gray-600 text-sm">People-centric healthcare at scale. Better outcomes for all.</p>
                </div>
            </div>
            </div>
        
        <div>
            <h2 className="text-blue-600 text-lg">View All Solutions</h2>
        </div>
        </div>
    </section>
    <section className="bg-sky-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify justify-center py-10">
             <div className="text-center mb-5">
                <h3 className="">Solutions</h3>
                <p>View on 26Digital library</p>
            </div>
            <div className="text-center mb-5">
                <h3>Products</h3>
                <p>Explore our cloud-based products</p>
            </div>
            <div className="text-center mb-5">
                <h3>Customer Innovation</h3>
                <p>Read our customer success stories</p>
            </div>
        </div>
    </section>
    <section className="bg-slate-100">
        <div className="container mx-auto">
            <div className="text-center pt-10"><h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">Explore Our Products</h2></div>
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
