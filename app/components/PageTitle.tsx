'use client';
interface PageTitleProps {
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitleClass?: string;
  title?: string;
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <div className="box-title flex">
      <div className="flex flex-col justify-center pl-32">
        <div className={`flex gap-4 ${props.subtitleClass}`}>
          <h3 className="text-xl font-bold text-lightBlue uppercase">
            {props.subtitle1}
          </h3>
          <h3 className="text-xl font-bold text-lightBlue uppercase">
            {props.subtitle2}
          </h3>
          <h3 className="text-xl font-bold text-lightBlue uppercase">
            {props.subtitle3}
          </h3>
        </div>
        <h1 className="title-page font-extrabold text-white">{props.title}</h1>
      </div>
    </div>
  );
}
