import CreateForm from "@/components/admin/crud/create";
import AdminTitle from "@/components/admin/title";


export default function CreatePage() {
    return (
        <div className="w-full space-y-12 flex flex-col items-center min-h-screen">
            <AdminTitle name="Cadastrar Membro" />
            <CreateForm />
        </div>
    )
}