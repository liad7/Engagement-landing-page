import Image from "next/image"
import { MouseEventHandler } from "react"

type Props = {
    toggleModal: MouseEventHandler<HTMLButtonElement>
}

export function AppHeader({ toggleModal }: Props) {
    return (
        <header>
            <div className="relative overflow-hidden w-full h-[400px] md:h-[650px]">
                <Image className="object-fill"
                    fill
                    src="https://res.cloudinary.com/dug85f2rg/image/upload/v1696168549/WhatsApp_Image_2023-10-01_at_16.54.34_aly9xx.jpg"
                    alt=""
                />
            </div>
            <p className="absolute center w-max top-4 text-xl">ההצעה שתמיד רציתם <span className="text-[#ffd935]">במחיר חלומי</span></p>

            <button onClick={toggleModal}
                className="absolute center w-max top-36 md:top-1/3 rounded-full bg-[#ffd935] text-sm duration-300 transition-all px-8 py-4 hover:bg-[#dab200]">אני רוצה הצעת מחיר</button>
        </header>
    )
}