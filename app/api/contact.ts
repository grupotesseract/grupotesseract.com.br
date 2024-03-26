import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    console.log('Dados recebidos:', req.body);

    res.status(200).json({ message: 'Dados recebidos com sucesso!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
