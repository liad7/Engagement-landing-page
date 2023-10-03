import Image from "next/image"
import { Carousel } from "./carousel"
import { GemIcon } from "lucide-react"

export function AppFooter() {
    return (
        <footer>

            {/* carousel */}
            <Carousel />

            <div className="relative top-16 h-[500px]">
                <Image className="object-cover md:object-fill"
                    fill
                    src="https://res.cloudinary.com/dug85f2rg/image/upload/v1696165627/WhatsApp_Image_2023-10-01_at_16.03.59_vf2rr6.jpg"
                    alt=""
                />

                <div className="relative text-right pr-4 pt-32">
                        <h3 className="text-4xl mb-4 text-[#ffd935]">? מה אנחנו מציעים</h3>

                        <p className="text-white text-lg">מגוון סוגי הצעות <GemIcon className="inline text-[#6a0cad]" /></p>
                        <p className="text-white text-lg"> שירות מקצועי ואדיב <GemIcon className="inline text-[#6a0cad]" /></p>
                        <p className="text-white text-lg">הגעה לכל מקום בארץ <GemIcon className="inline text-[#6a0cad]" /></p>
                        <p className="text-white text-lg">מחירים נוחים לכל כיס <GemIcon className="inline text-[#6a0cad]" /></p>
                        <p className="text-white text-lg">שיחות ייעוץ והכוונה <GemIcon className="inline text-[#6a0cad]" /></p>
                        <p className="text-white text-lg">צילום מצלמהֿֿ/רחפן <GemIcon className="inline text-[#6a0cad]" /></p>
                        <p className="text-white text-lg">הפקה עם זיקוקים <GemIcon className="inline text-[#6a0cad]" /></p>

                        <button className="w-max rounded-3xl bg-[#ffd935] text-sm duration-300 transition-all mt-4 px-8 py-3 hover:bg-[#dab200]">אני מעוניין</button>
                </div>
            </div>
        </footer>
    )
}