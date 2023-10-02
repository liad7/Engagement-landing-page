import { GemIcon, PencilRulerIcon } from "lucide-react"
import Image from "next/image"

export function ServiceList() {
    return (
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
    )
}