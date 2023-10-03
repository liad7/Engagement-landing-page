import { XIcon } from "lucide-react"

type Props = {
    toggleModal: Function
}

export function Modal({ toggleModal }: Props) {
    const onSubmit = (ev: any) => {
        ev.preventDefault()

        toggleModal()

        const name = ev.target.name.value
        const phone = ev.target.phone.value

        const whatsappMessage = `Name: ${name}%0Aphone: ${phone}`
        const whatsappURL = `https://wa.me/1234567890?text=${whatsappMessage}`

        window.open(whatsappURL, '_blank')
    }

    return (
        <div className="modal">
            <button><XIcon /></button>

            <h1>שלחו לנו הודעה ונחזור אליכם בהקדם (:</h1>
            <form onSubmit={onSubmit}>
                <input className="w-3/4"
                    type="text"
                    name="name"
                    placeholder="שם:"
                    required />

                <input className="w-3/4"
                    type="text"
                    name="phone"
                    placeholder="טלפון:"
                    required />

                <button className="w-3/4"
                    type="submit">שליחה</button>
            </form>
        </div>
    )
}