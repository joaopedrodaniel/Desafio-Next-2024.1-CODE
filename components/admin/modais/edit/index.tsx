import { X } from "lucide-react";
import Button from "../../button";
import AdminTitle from "../../title";

type EditModalProps = {
    isEButtonOpen: boolean;
    setIsEButtonOpen: (isCButtonOpen: boolean) => void;
}

export default function EditModal({isEButtonOpen, setIsEButtonOpen}: EditModalProps) {

    const toggleEButton = () => setIsEButtonOpen(!isEButtonOpen)

    return (
        <div className="bg-black bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="bg-primarycolor w-10/12 md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center">
                <div onClick={toggleEButton} className="w-full flex justify-end">
                    <X className="cursor-pointer" />
                </div>
                <div className="flex flex-col items-center gap-5 w-10/12">
                    <AdminTitle name="Editar" />
                    <div className="flex flex-col gap-5 w-10/12">
                        <div className="flex flex-col">
                            <span className="text-lg">Nome:</span>
                            <input
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg">Cargo:</span>
                            <input
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg">E-mail:</span>
                            <input
                                type="e-mail"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg">Senha:</span>
                            <input
                                type="password"
                            />
                        </div>
                    </div>
                    <div onClick={toggleEButton} className="pt-5 py-2 pb-8">
                        <Button name="Salvar" />
                    </div>
                </div>
            </div>
        </div>
    )
}