import Image from "next/image"

const produtos = [
    {src : '/home/guitarra_telecaster.webp', label: 'Guitarra Telecaster', price: 'R$3000,00'},
    {src : '/home/guitarra_stratocaster.webp', label: 'Guitarra Fender', price: 'R$6000,00'},
    {src : '/home/violao_fender_cd.webp', label: 'Violão Fender CD', price: 'R$1700,00'},
    {src : '/home/amplificador_fender.webp', label: 'Amplificador Fender', price: 'R$1890,00'}
]

export default function Products() {
    return(
        <div className=" items-center flex flex-col gap-6 pt-3">
            <span className="w-full text-2xl sm:pl-20 pb-3">Produtos:</span>
            <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap items-center justify-center gap-8 sm:gap-20 pb-8">
                {produtos.map((produto, index) =>
                    <div key={index} className="bg-primarycolor flex flex-col rounded-3xl p-5 items-center justify-evenly cursor-pointer">
                        <Image
                            src={produto.src}
                            alt={produto.label}
                            width={200}
                            height={200}
                            className="h-[140px] w-[140px] xsm:h-[200px] xsm:w-[200px]"
                        />
                        <div className="flex flex-col items-center justify-center">
                            <span>
                                {produto.label}
                            </span>
                            <span>
                                {produto.price}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}