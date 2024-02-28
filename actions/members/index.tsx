"use server"

import prisma from "@/lib/db"

export default async function getMembers() {
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