import { Instagram, Mail, Phone } from "lucide-react"

export default function ContactCard() {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-3">
                <Mail />
                <span className="text-xl md:text-2xl">contato@guitartone.com.br</span>
            </div>
            <div className="flex gap-3">
                <Phone />
                <span className="text-xl md:text-2xl">(31) 4002 - 8922</span>
            </div>
            <div className="flex gap-3">
                <Instagram />
                <span className="text-xl md:text-2xl">@guitartone</span>
            </div>
        </div>
    )
}