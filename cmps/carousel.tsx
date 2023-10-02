import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function Carousel() {

    const images: string[] = ["https://res.cloudinary.com/dug85f2rg/image/upload/v1696165628/WhatsApp_Image_2023-10-01_at_16.03.58_2_nszbzf.jpg",
        "https://res.cloudinary.com/dug85f2rg/image/upload/v1696165628/WhatsApp_Image_2023-10-01_at_16.03.57_jpr9ht.jpg",
        "https://res.cloudinary.com/dug85f2rg/image/upload/v1696165628/WhatsApp_Image_2023-10-01_at_16.03.58_1_nseb9c.jpg",
        "https://res.cloudinary.com/dug85f2rg/image/upload/v1696165627/WhatsApp_Image_2023-10-01_at_16.03.58_qo3mdz.jpg"]
    const delay = 3500

    const [index, setIndex] = useState(0)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )

        return () => {
            resetTimeout()
        }
    }, [index])

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((img, index) => (
                    <div
                        className="slide relative"
                        key={index}
                    >
                        <Image
                            fill
                            src={img}
                            alt="" />
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx)
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

