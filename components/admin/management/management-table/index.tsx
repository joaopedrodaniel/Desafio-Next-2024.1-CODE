import { iMembers } from "@/types/data";
import { DeletarButton, EditarButton, VizualizarButton } from "../buttons";

type MembersProps = {
    members: iMembers[]
}

export default function ManagementTable({members}: MembersProps) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full bg-secondarycolor border-2 border-extracolor">
                <thead>
                    <tr className="">
                        <th className="border-r-2 border-extracolor text-lg">Nome</th>
                        <th className="border-r-2 border-extracolor text-lg">Cargo</th>
                        <th className="border-r-2 border-extracolor text-lg">E-mail</th>
                        <th className="text-lg">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr className="w-full border-t-2 border-extracolor" key={index}>
                            <th className="font-normal pt-4 border-r-2 border-extracolor">{member?.name}</th>
                            <th className="font-normal pt-4 border-r-2 border-extracolor">{member?.cargo}</th>
                            <th className="font-normal pt-4 border-r-2 border-extracolor">{member?.email}</th>
                            <th className="flex flex-col items-center justify-center gap-1 pt-4 pb-1">
                                <VizualizarButton id={member?.id} />
                                <EditarButton id={member?.id} />
                                <DeletarButton id={member?.id} />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}