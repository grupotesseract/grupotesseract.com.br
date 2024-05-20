import FormContact from '../components/FormContact';
import TextPageContact from '../components/TextPageContact';

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-16 xl:items-start md:mt-32 lg:mt-48 lg:pl-36">
        <h3 className="flex text-lightBlue text-2xl md:text-4xl font-bold uppercase">
          Vamos conversar
        </h3>
        <h1 className="title-contact flex p-4 text-4xl xl:p-0">
          Quando é a nossa reunião?
        </h1>
      </div>
      <div className="box-form flex flex-col items-center justify-center xl:flex-row 2xl:pl-16 xl:items-baseline 2xl:justify-around gap-32">
        <TextPageContact />
        <FormContact />
      </div>
    </>
  );
}
