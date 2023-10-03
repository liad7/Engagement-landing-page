import { GemIcon, PencilRulerIcon } from "lucide-react"
import Image from "next/image"

export function ServiceList() {
    return (
        <div className="px-3 md:p-4">
            <h3 className="text-4xl text-right">:קצת עלינו</h3>
            <hr className="w-24 md:w-30 ml-auto border-t-4 my-2 border-[#dab200]" />
            <div className="text-right text-xl mb-20">
                <p>להוסיף פה תוכן</p>
            </div>
            <h3 className="text-4xl text-right">?מה אנחנו מציעים</h3>
            <hr className="w-24 md:w-30 ml-auto border-t-4 my-2 border-[#dab200]" />
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