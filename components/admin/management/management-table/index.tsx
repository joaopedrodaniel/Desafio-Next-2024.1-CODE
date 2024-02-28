import { iMembers } from "@/types/data";
import { DeletarButton, EditarButton, VizualizarButton } from "../buttons";

type MembersProps = {
    members: iMembers[]
}

export default function ManagementTable({members}: MembersProps) {
    return (
        <div className="w-full overflow-x-auto">
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
                    {members.map((member, index) => (
                        <tr className="w-full" key={index}>
                            <th className="font-normal pt-4">{member.name}</th>
                            <th className="font-normal pt-4">{member.cargo}</th>
                            <th className="font-normal pt-4">{member.email}</th>
                            <th className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center gap-2 pt-4 pb-1">
                                <VizualizarButton id={1} />
                                <EditarButton id={1} />
                                <DeletarButton id={1} />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}