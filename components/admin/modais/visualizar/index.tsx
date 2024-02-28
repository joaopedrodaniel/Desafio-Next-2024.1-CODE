import Button from "../../button";
import AdminTitle from "../../title";

type VisualizarModalProps = {
    isVButtonOpen: boolean;
    setIsVButtonOpen: (isCButtonOpen: boolean) => void;
}

export default function VisualizarModal({isVButtonOpen, setIsVButtonOpen}: VisualizarModalProps) {

    const toggleVButton = () => setIsVButtonOpen(!isVButtonOpen)

    return (
        <div className="bg-black bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="bg-primarycolor w-10/12 md:w-1/2 lg:w-1/3 flex justify-center">
                <div className="flex flex-col items-center gap-5 w-10/12">
                    <AdminTitle name="Visualizar" />
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
                    <div onClick={toggleVButton} className="pt-5 py-2 pb-8">
                        <Button name="Fechar" />
                    </div>
                </div>
            </div>
        </div>
    )
}