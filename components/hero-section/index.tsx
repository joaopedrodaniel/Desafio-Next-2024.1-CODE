import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="w-full grid grid-flow-col grid-cols-6 items-center justify-center">
            <div className="flex items-center col-span-2 justify-center">
                <Image
                    src={'/home/violao.jpg'}
                    alt="Violão ilustrativo"
                    width={360}
                    height={360}
                    className="w-[250px]"         
                />
            </div>
            <div className="flex col-span-4 text-center justify-center px-2 text-lg sm:text-xl md:text-3xl">
                A empresa que se preocupa com a qualidade do seu som
            </div>
        </div>
    )
}