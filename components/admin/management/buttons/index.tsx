'use client'

import CadastrarModal from "../../modais/cadastrar"
import { useState } from "react"
import EditModal from "../../modais/edit"
import VisualizarModal from "../../modais/visualizar"
import DeletarModal from "../../modais/delete"

export function CadastrarButton() {

    const [isCButtonOpen, setIsCButtonOpen] = useState<boolean>(false)
    const toggleCButton = () => setIsCButtonOpen(!isCButtonOpen)

    return (
        <div className="w-full">
            <div onClick={toggleCButton}>
                <div className="w-full flex">
                    <button className="bg-secondarycolor uppercase font-bold rounded-lg p-1 pr-3 pl-3">
                        Cadastrar
                    </button>
                </div>
            </div>
            { isCButtonOpen && (
                <CadastrarModal isCButtonOpen={isCButtonOpen} setIsCButtonOpen={setIsCButtonOpen} />
            )}
        </div>
    )
}

export function VizualizarButton({id}: {id: number}) {

    const [isVButtonOpen, setIsVButtonOpen] = useState<boolean>(false)
    const toggleVButton = () => setIsVButtonOpen(!isVButtonOpen)

    
    return (
        <div className="w-full">
            <div onClick={toggleVButton}>
                <div className="w-full flex justify-center">
                    <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                        Visualizar
                    </button>
                </div>
            </div>
            { isVButtonOpen && (
                <VisualizarModal isVButtonOpen={isVButtonOpen} setIsVButtonOpen={setIsVButtonOpen} />
            )}
        </div>
    )
}

export function EditarButton({id}: {id: number}) {
    
    const [isEButtonOpen, setIsEButtonOpen] = useState<boolean>(false)
    const toggleEButton = () => setIsEButtonOpen(!isEButtonOpen)

    return (
        <div className="w-full">
            <div onClick={toggleEButton}>
                <div className="w-full flex justify-center">
                    <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                        Editar
                    </button>
                </div>
            </div>
            { isEButtonOpen && (
                <EditModal isEButtonOpen={isEButtonOpen} setIsEButtonOpen={setIsEButtonOpen} />
            )}
        </div>
    )
}

export function DeletarButton({id}: {id: number}) {
    
    const [isDButtonOpen, setIsDButtonOpen] = useState<boolean>(false)
    const toggleDButton = () => setIsDButtonOpen(!isDButtonOpen)

    return (
        <div className="w-full pb-2">
            <div onClick={toggleDButton}>
                <div className="w-full flex justify-center">
                    <button className="bg-secondarycolor w-[95px] uppercase text-[12px] font-bold rounded-full p-1 pr-3 pl-3 border border-black">
                        Deletar
                    </button>
                </div>
            </div>
            { isDButtonOpen && (
                <DeletarModal isDButtonOpen={isDButtonOpen} setIsDButtonOpen={setIsDButtonOpen} />
            )}
        </div>
    )
}