import Link from "next/link";


export default function Error() {
    return (
        <div className="flex flex-col items-center w-full px-6 justify-center">
            <div className="bg-secondarycolor border-2 border-black rounded-lg w-10/12 md:w-1/2 lg:w-1/3 xl:min-h-[500px] flex flex-col items-center justify-center py-6">
                <div className="flex flex-col items-center gap-5 w-10/12 lg:gap-10">
                    <div className="flex flex-col gap-5 w-10/12">
                        <div className="flex flex-col text-center">
                            <span className="text-2xl font-bold uppercase pb-6">Opa...</span>
                            
                            <span className="text-lg">Não é possível cadastrar membros com mesmo nome ou email.</span>
                        </div>                            
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-secondarycolor rounded-full w-[265px] h-[58px] text-xl uppercase font-bold hover:bg-extracolor duration-100">
                            <Link
                                className="mt-2"
                                href={"/admin/management/create"}
                            >
                                <span className="cursor-pointer hover:font-bold">
                                    Cadastrar outro membro
                                </span>
                            </Link>
                        </button>
                        <Link
                            className="mt-2"
                            href={"/admin/management"}
                        >
                            <span className="cursor-pointer hover:font-bold">
                                Voltar
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}