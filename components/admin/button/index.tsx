import Link from "next/link";

type iButtonProps = {
    name: string;
    href?: string;
};

export default function Button({name, href}: iButtonProps) {
    return (
        <div className="flex justify-center">
            <Link href={href || '/admin/management'}>
                <button className="bg-secondarycolor rounded-full w-[165px] h-[58px] text-xl uppercase font-bold hover:bg-primarycolor duration-100">
                    {name}
                </button>
            </Link>
        </div>
    )
}