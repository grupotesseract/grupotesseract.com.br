import Image from "next/image";
import gears from "../../docs/image/gears.svg"

export default function Outsourcing () {
    
    return (
        <div className="flex flex-col items-center w-319 h-7 shrink-0">
            <Image src={gears} alt="outsourcing" width={182} height={195} className="flex m-12"/>
                <h1 className="text-lightBlue text-center text-4xl font-bold uppercase pb-11">Outsourcing</h1>
                    <div>
                        <span className="text-xl font-bold pr-1">
                            Alocamos profissionais ou equipes completas 
                        </span> 
                            <span className="text-xl font-normal">
                                na sua empresa por um período indeterminado, onde os mesmos possam contribuir para o crescimento das suas soluções.
                            </span>
                    </div>
        </div>
    )
}
