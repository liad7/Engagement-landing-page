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
                        <h3 className="text-4xl mb-4">? מה אנחנו מציעים</h3>
                        <p>מגוון סוגי הצעות <GemIcon className="inline" /></p>
                        <p> שירות מקצועי ואדיב <GemIcon className="inline" /></p>
                        <p>הגעה לכל מקום בארץ <GemIcon className="inline" /></p>
                        <p>מחירים נוחים לכל כיס <GemIcon className="inline" /></p>
                        <p>שיחות ייעוץ והכוונה <GemIcon className="inline" /></p>
                        <p>צילום מצלמהֿֿ/רחפן <GemIcon className="inline" /></p>
                        <p>הפקה עם זיקוקים <GemIcon className="inline" /></p>
                </div>
            </div>
        </footer>
    )
}