import Link from 'next/link';

interface GenericButtonProps {
  path: string;
  children: React.ReactNode;
  buttonClass?: string;
}

export default function GenericButton(props: GenericButtonProps) {
  return (
    <Link href={props.path}>
      <button
        className={`${props.buttonClass} w-72 h-10 bg-gray hover:bg-slate-400 font-bold uppercase xl:w-96 xl:h-20`}
      >
        {props.children}
      </button>
    </Link>
  );
}
