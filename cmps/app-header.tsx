import Image from "next/image"

export function AppHeader() {
    return (
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
    )
}