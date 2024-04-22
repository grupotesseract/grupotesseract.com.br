import { NextResponse } from 'next/server';

export async function POST(){
    return NextResponse.json({ message: 'Dados recebidos com sucesso!', test: 'Teste' });
}
