import { iMembers } from "@/types/data"

type MembersProps = {
    members: iMembers[]
}

export default function Table({members}: MembersProps) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full bg-secondarycolor">
                <thead>
                    <tr className="">
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <th className="font-normal">{member.name}</th>
                            <th className="font-normal">{member.cargo}</th>
                            <th className="font-normal">{member.email}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}