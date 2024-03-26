import FormContact from '../components/FormContact';
import TextPageContact from '../components/TextPageContact';

export default function Contact() {
  return (
    <>
      <div className="flex items-baseline gap-32">
        <TextPageContact />
        <FormContact />
      </div>
    </>
  );
}
