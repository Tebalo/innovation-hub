"use client"
import {Alert, Dropdown, Navbar} from "flowbite-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3">01</div>
  <div className="col-span-2">02</div>
  <div className="row-span-2 col-span-2 ...">03</div>
</div>
    </main>
  )
}
