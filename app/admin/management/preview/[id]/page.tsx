import { getMemberById } from "@/actions/members";
import PreviewForm from "@/components/admin/crud/preview";
import AdminTitle from "@/components/admin/title";


export default async function PreviewPage({params}: {params: {id: string}}) {

    const id = parseInt(params.id, 10)
    const member = await getMemberById(id)

    return (
        <div className="w-full space-y-12 flex flex-col items-center min-h-screen">
            <AdminTitle name="Visualizar Membro" />
            <PreviewForm member={member} />
        </div>
    )
}