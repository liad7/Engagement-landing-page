'use client'

import { Carousel } from "@/cmps/carousel"
import { GemIcon, PencilRulerIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <center className="color-[#0a0a0a]">


      <header className="h-2/3">
        <div className="relative overflow-hidden w-full h-[600px] md:h-[650px]">
          <Image className="object-cover md:object-fill"
            fill
            src="https://res.cloudinary.com/dug85f2rg/image/upload/v1696168549/WhatsApp_Image_2023-10-01_at_16.54.34_aly9xx.jpg"
            alt=""
          />
        </div>
        <p className="absolute center w-max top-0">אני אריאל בוכריס בראון</p>

        <h2 className="absolute center w-max top-1/4">אני אריאל בוכריס בראון2</h2>

        <button>אני רוצה הצעת מחיר</button>
      </header>

      <main className="">
        <div>
          <h3></h3>
        </div>

        <div>
          <h3 className="text-4xl">?מה אנחנו מציעים</h3>
          <div className="lg:flex">

            <div className="flex-1 mb-16 mx-4">
              <PencilRulerIcon className="h-24 w-24 mb-6" />
              <h5 className="text-3xl font-bold mb-2">עיצוב</h5>
              <p>מגוון של עיצובים ואביזרים איכותיים, שיהפכו את האירוע שלכם להכי יפה ומושקע שיש</p>
            </div>
            <div className="flex-1 mb-16 mx-4">
              <GemIcon className="h-24 w-24 mb-6" />
              <h5 className="text-3xl font-bold mb-2">חוויה</h5>
              <p>רגע ההצעה הוא חוויה של פעם בחיים. יחד איתכם, נוכל להפוך אותו לרגע בלתי נשכח</p>
            </div>
            <div className="flex-1 mb-16 mx-4">

              <div>
                <div className="relative h-24 w-24 mb-6">
                  <Image
                    fill
                    src="https://res.cloudinary.com/dug85f2rg/image/upload/v1696170909/customer-removebg-preview_m1lhlw.png"
                    alt=""
                  />
                </div>

                <h5 className="text-3xl font-bold mb-2">שירות</h5>
                <p>שירות מקצועי ואיכותי. אנחנו כאן לתת ליווי אישי מרגע השיחה עד לרגע בו אתה כורע ברך</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-96">

        {/* carousel */}
        <Carousel />

      </footer>

    </center>
  )
}
