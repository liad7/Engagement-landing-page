'use client'

import { AppFooter } from "@/cmps/app-footer"
import { AppHeader } from "@/cmps/app-header"
import { ServiceList } from "@/cmps/service-list"

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

      <AppFooter />

    </center>
  )
}
