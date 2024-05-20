import GenericButton from '../components/GenericButton';

export default function TextWithButton() {
  return (
    <div className="flex flex-col justify-center items-center w-[90vw] mt-56 pl-40 lg:flex-row">
      <h1 className="pr-8 text-4xl text-gray font-black xl:text-5xl">
        Membros atuantes em vários lugares do Brasil e também no exterior
      </h1>
      <GenericButton path="/contato" buttonClass="button-team xl:text-2xl">
        Faça parte da equipe
      </GenericButton>
    </div>
  );
}
