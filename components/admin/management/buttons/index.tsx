import Link from "next/link"

export function CadastrarButton() {
    return (
        <div className="w-full flex">
            <button className="bg-secondarycolor uppercase font-bold rounded-lg p-1 pr-3 pl-3">
                Cadastrar
            </button>
        </div>
    )
}

export function VizualizarButton({id}: {id: number}) {
    return (
            <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                Visualizar
            </button>
    )
}

export function EditarButton({id}: {id: number}) {
    return (
            <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                Editar
            </button>
    )
}

export function DeletarButton({id}: {id: number}) {
    return (
        <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                Deletar
        </button>
    )
}