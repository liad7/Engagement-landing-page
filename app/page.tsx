'use client'

import { AppHeader } from "@/cmps/app-header"
import { Carousel } from "@/cmps/carousel"
import { ServiceList } from "@/cmps/service-list"
import { GemIcon, PencilRulerIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <center className="color-[#0a0a0a]">

      <AppHeader />

      <main className="">
        <div>
          <h3></h3>
        </div>
        <ServiceList />
      </main>

      <footer className="h-96">

        {/* carousel */}
        <Carousel />

      </footer>

    </center>
  )
}
