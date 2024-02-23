import { DeletarButton, EditarButton, VizualizarButton } from "../buttons";

export default function ManagementTable() {
    return (
        <div className="w-full">
            <table className="w-full bg-secondarycolor">
                <thead>
                    <tr className="">
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>E-mail</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="w-full">
                        <th className="font-normal pt-4">João</th>
                        <th className="font-normal pt-4">Dono</th>
                        <th className="font-normal pt-4">blabla</th>
                        <th className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center gap-2 pt-4 pb-1">
                            <VizualizarButton id={1} />
                            <EditarButton id={1} />
                            <DeletarButton id={1} />
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}