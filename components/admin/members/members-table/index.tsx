import { iMembers } from "@/types/data"

export default function Table({members, count}: {members: iMembers[], count: number}) {
    return (
        <div className="w-full overflow-x-auto">
            <span>Foi encontrado {count} membros.</span>
            <table className="w-full bg-secondarycolor border-2 border-extracolor">
                <thead>
                    <tr className="">
                        <th className="border-r-2 border-extracolor text-lg">Nome</th>
                        <th className="border-r-2 border-extracolor text-lg">Cargo</th>
                        <th className="text-lg">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {members?.map((member, index) => (
                        <tr key={index} className="border-t-2 border-extracolor">
                            <th className="font-normal border-r-2 border-extracolor">{member?.name}</th>
                            <th className="font-normal border-r-2 border-extracolor">{member?.cargo}</th>
                            <th className="font-normal">{member?.email}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}