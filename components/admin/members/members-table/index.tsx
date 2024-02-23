export default function Table() {
    return (
        <div className="w-full">
            <table className="w-full bg-secondarycolor">
                <thead>
                    <tr className="">
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="font-normal">João</th>
                        <th className="font-normal">Dono</th>
                        <th className="font-normal">blabla</th>
                    </tr>
                    <tr>
                        <th className="font-normal">João</th>
                        <th className="font-normal">Dono</th>
                        <th className="font-normal">blabla</th>
                    </tr>
                    <tr>
                        <th className="font-normal">João</th>
                        <th className="font-normal">Dono</th>
                        <th className="font-normal">blabla</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}