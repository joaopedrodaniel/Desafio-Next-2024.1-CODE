"use server"

import { CadastrarButton } from "./buttons";
import ManagementTable from "./management-table";
import { getMembers } from "@/actions/members";

export default async function ManagementPage() {

    const members = await getMembers()

    return (
        <div className="flex flex-col gap-8 items-center w-full">
            <CadastrarButton />
            <ManagementTable members={members} /> 
        </div>
    )
}