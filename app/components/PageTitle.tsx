'use client';
interface PageTitleProps {
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitleClass?: string;
  title?: string;
  titleClass?: string;
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <div className="box-title flex">
      <div className="flex flex-col justify-center pl-8 lg:pl-32">
        <div className={`flex gap-4 mb-8 lg:mb-0 ${props.subtitleClass}`}>
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
        <h1
          className={`font-extrabold uppercase text-white ${props.titleClass} lg:text-7xl`}
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
}
