import prisma from "@/lib/db";

const itemsPerPage = 100;

export async function fetchFilteredMembers(query: string, currentPage: number) {
    
    const filteredMembers = await prisma.membro.findMany ({
        
        where: {
            OR: [{name: {contains: query, mode: "insensitive"}}]
        },
        orderBy: {
            name: "asc"
        },

        take: itemsPerPage
    })

    const count = await prisma.membro.count({
        where: {
            OR: [{name: { contains: query, mode: "insensitive"}}]
        },
    });

    return { filteredMembers, count };
}