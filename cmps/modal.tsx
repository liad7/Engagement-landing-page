import { XIcon } from "lucide-react"

type Props = {
    toggleModal: Function,
    isModalOpen: boolean
}

export function Modal({ toggleModal, isModalOpen }: Props) {
    const onSubmit = (ev: any) => {
        ev.preventDefault()

        toggleModal()

        const name = ev.target.name.value
        const region = ev.target.region.value
        const kind = ev.target.kind.value

        const whatsappMessage = `שם: ${name}%0Aאני רוצה לעשות הצעה באזור: ${region}%0Aסוג הצעה: ${kind}%0Aתן לי הצעת מחיר`
        const whatsappURL = `https://wa.me/972502901329?text=${whatsappMessage}`

        window.open(whatsappURL, '_blank')
    }

    return (
        <>
            {isModalOpen && <div className="screen"></div>}

            <div className={`modal ${isModalOpen ? 'active' : ''} p-16 text-white`}>

                <div className="text-right">
                    <div className="rounded-full w-12 h-12 bg-[#d08181] flex justify-center mb-12">
                        <button onClick={toggleModal as any}
                        ><XIcon /></button>
                    </div>
                </div>

                <div className="bg-[#d08181] p-4 rounded-xl">
                    <h1 className="text-2xl mb-3">שלחו לנו הודעה ונחזור אליכם בהקדם (:</h1>
                    <form onSubmit={onSubmit}>

                        <input className="w-3/4 p-4 rounded-full text-xl my-2 text-black"
                            autoFocus
                            type="text"
                            name="name"
                            placeholder="שם:"
                            required />

                        <select name="region" className="w-3/4 p-4 rounded-full text-xl my-2 text-black">
                            <option disabled selected>בחר אזור</option>
                            <option value="דרום">דרום</option>
                            <option value="מרכז">מרכז</option>
                            <option value="צפון">צפון</option>
                        </select>

                        <select name="kind" className="w-3/4 p-4 rounded-full text-xl my-2 text-black">
                            <option disabled selected>סוג הצעה</option>
                            <option value="לב פרחים">לב פרחים</option>
                            <option value="עוד אופציה">עוד אופציה</option>
                            <option value="אופציה שהיא אותו דבר אבל אחרת">אופציה שהיא אותו דבר אבל אחרת</option>
                        </select>

                        <button className="w-2/4 p-4 rounded-full text-xl my-2 bg-[#eb6a56]"
                            type="submit">שליחה</button>
                    </form>
                </div>
            </div>
        </>
    )
}