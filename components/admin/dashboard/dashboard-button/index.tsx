import Link from "next/link";

type DashboardButtonProps = {
    description: string;
    name: string;
    href: string;
}

export default function DeashboardButton({description, name, href}: DashboardButtonProps) {
    return (
        <div>
            <button className="flex flex-col border border-black rounded-xl bg-gradient-to-b from-primarycolor to-secondarycolor hover:scale-[1.01] transition-all duration-200">
                <Link
                    href={href}
                    className="p-3"
                >
                    <h1 className="text-xl md:text-3xl">{name}</h1>
                    <span className="md:text-xl text-gray-600">{description}</span>
                </Link>
            </button>
        </div>
    )
}