'use client'

import { useState } from "react";
import { CadastrarButton } from "./buttons";
import ManagementTable from "./management-table";

export default function ManagementPage() {
    return (
        <div className="flex flex-col gap-8 items-center w-full">
            <CadastrarButton />
            <ManagementTable /> 
        </div>
    )
}