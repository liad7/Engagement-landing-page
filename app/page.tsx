'use client'

import { AppFooter } from "@/cmps/app-footer"
import { AppHeader } from "@/cmps/app-header"
import { Modal } from "@/cmps/modal"
import { ServiceList } from "@/cmps/service-list"
import React, { useState } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const toggleModal = (): void => {
    setIsModalOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <center className="color-[#0a0a0a]">

      <AppHeader toggleModal={toggleModal} />

      <main className="">
        <div>
          <h3></h3>
        </div>

        <ServiceList />
      </main>

      <AppFooter toggleModal={toggleModal} />

      {/* {isModalOpen && <Modal toggleModal={toggleModal}/>} */}
      <Modal toggleModal={toggleModal} isModalOpen={isModalOpen}/>
    </center>
  )
}
