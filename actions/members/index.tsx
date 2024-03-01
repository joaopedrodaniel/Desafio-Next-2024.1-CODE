"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getMembers() {
    const members = await prisma.membro.findMany({
        where: {
            published: true
        },
        select: {
            id: true,
            name: true,
            cargo: true,
            email: true
        },
    })

    return members;
}

export async function getMemberById(id: number | undefined) {
    const member = await prisma.membro.findUnique({
        where: {id},
        select: {
            id: true,
            name: true,
            cargo: true,
            email: true
        },
    });

    return member;
}

export async function updateMember(id: number | undefined, formData: FormData) {
    const name = formData.get("name") as string;
    const cargo = formData.get("cargo") as string;
    const email = formData.get("email") as string;

    await prisma.membro.update({
        where: { id },
        data: {
            name,
            cargo,
            email,
        },
    });

    redirect("/admin/management")
}

export async function deleteMember(id:number | undefined) {
    await prisma.membro.delete({
        where: { id },
    });

    revalidatePath("/admin/management")
}

export async function createMember(formData: FormData) {
    const name = formData.get("name") as string;
    const cargo = formData.get("cargo") as string;
    const email = formData.get("email") as string;

    const memberVerification = await prisma.membro.findFirst({
        where: {
            OR: [
                { name },
                { email },
            ],
        },
    });

    

    await prisma.membro.create({
        data: {
            name,
            cargo,
            email,
            published: true,
        },
    });

    redirect("/admin/management")
}