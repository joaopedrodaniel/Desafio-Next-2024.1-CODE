import Link from "next/link";

export default function TelaLogin() {
    return (
        <form className="bg-extracolor w-10/12 h-[400px] md:w-[650px] md:h-[500px] flex items-center justify-center">
            <div className="flex flex-col justify-between w-10/12 h-[300px] md:h-[360px]">
                <h1 className="text-3xl md:text-3xl uppercase font-bold text-center">Guitar Tone</h1>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <span className="text-lg">E-mail:</span>
                        <input
                            type="e-mail"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg">Senha:</span>
                        <input
                            type="password"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href={'/admin'}>
                        <button className="bg-secondarycolor rounded-full w-[165px] h-[58px] text-xl uppercase font-bold hover:bg-primarycolor duration-100">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    )
}