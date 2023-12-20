import Image from "next/image";
interface IconTitleDescriptionProps {
    icon?: string,
    title: string,
    description: string,
    titleClass?: string,
    visible?: boolean
}

export default function IconTitleDescription (props: IconTitleDescriptionProps) {
    return (
        <div className="flex flex-col items-center w-358 gap-30">
           {props.visible && props.icon &&
             <Image
                 src={props.icon}
                 alt="outsourcing"
                 width={182}
                 height={195}
                 className="flex m-8"
             />
           }
            <h1 className={`text-lightBlue text-4xl font-black uppercase pb-10 ${props.titleClass}`}>
                {props.title}
            </h1>
                <div>
                    <span className="text-xl" dangerouslySetInnerHTML={{__html: props.description}}></span>
                </div>
        </div>
    )
}