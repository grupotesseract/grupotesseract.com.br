import Image from "next/image";
import contact from "../../docs/image/contact.svg"

export default function Consulting () {
    
    return (
        <div className="flex flex-col items-center w-352 h-7 shrink-0">
            <Image src={contact} alt="consulting" width={182} height={195} className="flex m-12"/>
                <h1 className="text-lightBlue text-center text-4xl font-bold uppercase pt-1 pb-10">Consultoria</h1>
                    <div>
                        <span className="text-xl font-normal">
                            Oferecemos também <strong>análises aprofundadas de aplicações</strong> em PHP e JavaScript, bem como otimizações e medidas de segurança para ambientes AWS e pipelines de CI/CD.
                            </span>
                    </div>
        </div>
    )
}