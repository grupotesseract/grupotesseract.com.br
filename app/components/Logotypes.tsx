import Image from 'next/image';

interface LogotypesProps {
  logo: string;
  logoClass?: string;
  width: number;
  height: number;
  size?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Logotypes(props: LogotypesProps) {
  const logoBig = props.size ? 'w-52 h-28' : 'w-24 h-28';

  return (
    <div
      className={`flex justify-center bg-grayScale ${props.logoClass} ${logoBig}`}
    >
      <Image
        src={props.logo}
        alt={'props.logo'}
        width={props.width}
        height={props.height}
        className={`${props.logoClass}`}
      />
    </div>
  );
}
