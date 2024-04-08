import FormContact from '../components/FormContact';
import TextPageContact from '../components/TextPageContact';

export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center mt-48 pl-36">
        <div>
          <h3 className="flex text-lightBlue text-4xl font-bold uppercase">
            Vamos comversar
          </h3>
        </div>
        <h1 className="title-contact flex">Quando é a nossa reunião?</h1>
      </div>
      <div className="box-form flex items-baseline gap-32">
        <TextPageContact />
        <FormContact />
      </div>
    </>
  );
}
