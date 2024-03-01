import { getMemberById } from "@/actions/members";
import EditForm from "@/components/admin/crud/edit";
import AdminTitle from "@/components/admin/title";


export default async function EditPage({params}: {params: {id: string}}) {

    const id = parseInt(params.id, 10)
    const member = await getMemberById(id)

    return (
        <div className="w-full space-y-12 flex flex-col items-center">
            <AdminTitle name="Editar Membro" />
            <EditForm member={member} />
        </div>
    )
}