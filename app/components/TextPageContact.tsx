export default function TextPageContact() {
  return (
    <div className="flex flex-col items-center w-screen mt-16 gap-12 md:w-480 lg:mt-24 xl:mt-48 md:gap-24">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl font-bold uppercase text-lightBlue">
          Entre em contato
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-white">
          contato@grupotesseract.com.br
        </p>
      </div>
      <div className="flex text-xl p-2 md:text-2xl font-normal text-white">
        Vamos unir forças para transformar seu negócio e inovar. Preencha o
        formulário para falar com nosso time de vendas e entender como nossos
        especialistas podem te ajudar a superar seus desafios.
      </div>
    </div>
  );
}
