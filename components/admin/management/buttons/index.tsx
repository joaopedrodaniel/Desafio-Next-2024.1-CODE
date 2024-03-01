'use client'

import { deleteMember } from "@/actions/members"
import Link from "next/link"

export function CadastrarButton() {

    return (
        <div className="w-full">
            <div>
                <div className="w-full flex">
                    <Link href={"/admin/management/create"}>
                        <button
                            className="bg-secondarycolor uppercase font-bold rounded-lg p-1 pr-3 pl-3"
                        >
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function VizualizarButton({id}: {id: number | undefined}) {

    return (
        <div className="w-full">
            <div>
                <div className="w-full flex justify-center">
                    <Link href={`/admin/management/preview/${id}`}>
                        <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                            Visualizar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function EditarButton({id}: {id: number | undefined}) {
    
    return (
        <div className="w-full">
            <div>
                <div className="w-full flex justify-center">
                    <Link href={`/admin/management/edit/${id}`}>
                        <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                            Editar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function DeletarButton({id}: {id: number | undefined}) {

    return (
        <div className="w-full pb-2">
            <div className="w-full flex justify-center">
                <button
                    className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black"
                    onClick={() => deleteMember(id)}
                >
                    Deletar
                </button>
            </div>
        </div>
    )
}