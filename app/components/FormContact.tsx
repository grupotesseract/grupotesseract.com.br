'use client';

import { FormEvent, useState } from 'react';
interface FormContactProps {
  name: string;
  placeholder?: string;
  company?: string;
  email: string;
  comment: string;
  mesageError?: string;
  mesageSuccess?: string;
}

export default function FormContact() {
  const [formData, setFormData] = useState<FormContactProps>({
    name: '',
    email: '',
    company: '',
    comment: '',
    mesageError: '',
    mesageSuccess: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(formData);

    const endpoint = '/api/contact';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Falha no envio do formulário');

      setFormData((prevState) => ({
        ...prevState,
        messageError: '',
        messageSuccess: 'Formulário enviado com sucesso!',
      }));
    } catch (error) {
      console.error(error);
      setFormData((prevState) => ({
        ...prevState,
        messageError:
          'Erro ao enviar o formulário. Por favor, tente novamente.',
        messageSuccess: '',
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center lg:items-end gap-4">
        <input
          type="text"
          name="name"
          placeholder="*Nome Completo"
          onChange={handleChange}
          className="bg-gray focus:outline-none"
        />
        <input
          type="text"
          name="company"
          placeholder="Empresa"
          onChange={handleChange}
          className="bg-gray focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="*E-mail"
          onChange={handleChange}
          className="bg-gray focus:outline-none"
        />
        <textarea
          name="comment"
          placeholder="*Comente um pouco sobre como podemos te ajudar"
          onChange={handleChange}
          className="coment bg-gray focus:outline-none"
        />
        <button
          type="submit"
          className="button-submit flex self-end mt-6 text-2xl font-normal uppercase hover:bg-slate-400 lg:mt-12"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
