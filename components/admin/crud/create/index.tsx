import { createMember } from "@/actions/members";
import Link from "next/link";


export default function CreateForm() {
    return (
        <div className="flex flex-col items-center w-full px-6 justify-center">
            <div id="error-text"></div>
            <form className="bg-secondarycolor border-2 border-black rounded-lg w-10/12 md:w-1/2 lg:w-1/3 xl:min-h-[500px] flex flex-col items-center justify-center py-6" autoComplete="off" action={createMember}>
                <div className="flex flex-col items-center gap-5 w-10/12 lg:gap-10">
                    <div className="flex flex-col gap-5 w-10/12">
                        <div className="flex flex-col">
                            <span className="text-lg">Nome:</span>
                            <input
                                type="text"
                                name="name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg">Cargo:</span>
                            <input
                                type="text"
                                name="cargo"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg">E-mail:</span>
                            <input
                                type="e-mail"
                                name="email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            className="bg-secondarycolor rounded-full w-[165px] h-[58px] text-xl uppercase font-bold hover:bg-extracolor duration-100"
                            type="submit"
                        >
                            Salvar   
                        </button>
                        <Link
                            className="mt-2"
                            href={"/admin/management"}
                        >
                            <span className="cursor-pointer hover:font-bold">
                                Fechar
                            </span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}