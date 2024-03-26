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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    const endpoint = '/api/contact.ts';

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
      <div className="flex flex-col gap-4 w-490 text-neutral-600">
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          onChange={handleChange}
          className="focus:outline-none"
        />
        <input
          type="text"
          name="company"
          placeholder="Empresa"
          onChange={handleChange}
          className="focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          className="focus:outline-none"
        />
        <textarea
          name="comment"
          placeholder="*Comente um pouco sobre como podemos te ajudar"
          onChange={handleChange}
          className="h-52 focus:outline-none"
        />
        <button>Enviar</button>
      </div>
    </form>
  );
}
