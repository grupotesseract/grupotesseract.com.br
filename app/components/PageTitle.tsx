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
    <div className="box-title flex w-11/12">
      <div className="flex flex-col justify-center pl-2 pr-4 md:pl-8 lg:pl-32">
        <div className={`flex gap-2 mb-8 ${props.subtitleClass} md:gap-4`}>
          <h3 className="text-base font-bold text-lightBlue uppercase md:text-xl">
            {props.subtitle1}
          </h3>
          <h3 className="text-base font-bold text-lightBlue uppercase text-center md:text-xl md:text-start">
            {props.subtitle2}
          </h3>
          <h3 className="text-base font-bold text-lightBlue uppercase md:text-xl">
            {props.subtitle3}
          </h3>
        </div>
        <h1
          className={`font-extrabold uppercase text-white text-center ${props.titleClass} md:text-start lg:text-7xl`}
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
}
