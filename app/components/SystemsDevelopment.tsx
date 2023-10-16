import Image from "next/image";
import list from "../../docs/image/list.svg"

export default function SystemsDevelopment () {
    
    return (
        <div className="flex flex-col items-center w-352 h-7 shrink-0">
            <Image src={list} alt="systemsDevelopment" width={182} height={195} className="flex m-12"/>
                <h1 className="flex justify-center text-lightBlue text-center text-4xl font-bold uppercase pb-9">Desenvolvimento de Sistemas</h1>
                    <div>
                        <span className="text-xl font-bold pr-1">
                        Cuidamos de toda a gestão do projeto e equipe 
                        </span> 
                            <span className="text-xl font-normal">
                            de desenvolvimento para tirar sua ideia do papel e transformá-la em um produto escalável com os mais altos padrões de qualidade.
                            </span>
                    </div>
        </div>
    )
}
