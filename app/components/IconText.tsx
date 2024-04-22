import Image from 'next/image';

interface IconTextProps {
  icon: string;
  iconName: string;
  iconClass?: string;
  text: string;
  textClass?: string;
  width: number;
  height: number;
}

export default function IconText(props: IconTextProps) {
  const { icon, iconName, iconClass, text, textClass, width, height } = props;

  return (
    <div className="flex flex-col items-center mt-52 gap-8">
      <div
        className={`flex flex-wrap content-center justify-center rounded-full bg-zinc-800 ${iconClass}`}
      >
        <Image
          src={icon}
          alt={iconName}
          width={width}
          height={height}
          className="rounded-full"
        />
      </div>
      <h2 className={`${textClass}`}>{text}</h2>
    </div>
  );
}
