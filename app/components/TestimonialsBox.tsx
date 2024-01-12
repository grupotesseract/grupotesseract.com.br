import Image from 'next/image';

interface TestimonialsBoxProps {
  image: string;
  description: string;
  user: string;
  userClass?: string;
  name: string;
  nameClass?: string;
  key?: unknown;
}

export default function TestimonialsBox(props: TestimonialsBoxProps) {
  return (
    <article className="flex pt-8">
      <div className="box-depositions flex items-center">
        <Image
          src={props.image}
          alt="icons"
          width={500}
          height={500}
          className="flex mr-8 ml-8 rounded-full"
        />
        <div className="flex flex-col gap-8">
          <span className="text-xl">{props.description}</span>
          <div className="flex gap-2">
            <h3 className={`text-2xl uppercase pb-10 ${props.userClass}`}>{props.user}</h3>
            <span className="text-2xl">/</span>
            <h3 className={`text-2xl font-black uppercase pb-10 ${props.nameClass}`}>{props.name}</h3>
          </div>
        </div>
      </div>
    </article>
  );
}
