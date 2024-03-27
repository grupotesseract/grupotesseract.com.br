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
        className={`${props.buttonClass} w-96 h-20 bg-gray hover:bg-slate-400 font-bold uppercase`}
      >
        {props.children}
      </button>
    </Link>
  );
}
