export default function TextWithBox() {
  return (
    <>
      <div className="flex justify-around mt-20 mb-20 lg:mt-44">
        <div className="box-service-2 hidden lg:flex lg:relative"></div>
        <div className="text-box-service flex items-center absolute w-screen p-4 text-justify lg:p-0 lg:text-start">
          <p className="text-2xl text-white lg:text-2lg">
            <strong>
              Nosso foco é construir, junto com os clientes, a melhor solução.
            </strong>{' '}
            Somamos conhecimentos e não ficamos com a propriedade intelectual.
          </p>
        </div>
      </div>
    </>
  );
}
