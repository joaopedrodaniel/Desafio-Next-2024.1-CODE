import { X } from "lucide-react";
import Button from "../../button";
import AdminTitle from "../../title";

type DeleteModalProps = {
    isDButtonOpen: boolean;
    setIsDButtonOpen: (isCButtonOpen: boolean) => void;
}

export default function DeletarModal({isDButtonOpen, setIsDButtonOpen}: DeleteModalProps) {

    const toggleDButton = () => setIsDButtonOpen(!isDButtonOpen)

    return (
        <div className="bg-black bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="bg-primarycolor w-10/12 md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center">
                <div onClick={toggleDButton} className="w-full flex justify-end">
                    <X className="cursor-pointer" />
                </div>
                <div className="flex flex-col items-center gap-5 w-10/12">
                    <div className="uppercase w-10/12">
                        <AdminTitle name="Tem certeza que deseja deletar?" />
                        <AdminTitle name="Essa ação não tem volta!" />
                    </div>
                    <div onClick={toggleDButton} className="pt-5 py-2 pb-8">
                        <Button name="Deletar" />
                    </div>
                </div>
            </div>
        </div>
    )
}