import GenericButton from '../components/GenericButton';

export default function TextWithButton() {
  return (
    <div className="flex justify-between items-center mt-56 pl-8">
      <h1 className="pr-8 text-7xl text-gray font-black">
        Membros atuantes em vários lugares do Brasil e também no exterior
      </h1>
      <GenericButton path="/contato" buttonClass="button-team">
        Faça parte da equipe
      </GenericButton>
    </div>
  );
}
