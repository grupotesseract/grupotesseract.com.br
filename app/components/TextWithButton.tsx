import GenericButton from '../components/GenericButton';

export default function TextWithButton() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-56 p-4 md:w-[90vw] md:pl-40 lg:flex-row">
      <h1 className="text-4xl text-gray font-black lg:pr-8 xl:text-5xl">
        Membros atuantes em vários lugares do Brasil e também no exterior
      </h1>
      <GenericButton path="/contato" buttonClass="button-team xl:text-2xl">
        Faça parte da equipe
      </GenericButton>
    </div>
  );
}
