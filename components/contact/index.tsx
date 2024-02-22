import ContactCard from "./cards";

export default function ContactPage() {
    return(
        <div className="flex flex-col w-10/12 items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold uppercase pt-10 pb-2">Guitar Tone</h1>
            <p className="text-2xl md:text-3xl pt-6">
                Faça música com instrumentos de qualidade.
            </p>
            <p className="text-2xl md:text-3xl pt-3 pb-10">
                A Guitar Tone é uma empresa que se dedica diariamente para proporcionar intrumentos de extrema qualidade aos seus clientes.
            </p>
            <span className="text-3xl md:text-4xl pt-10 pb-6">CONTATO:</span>
            <ContactCard />
        </div>
    )
}