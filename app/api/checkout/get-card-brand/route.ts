import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const bin = url.searchParams.get("bin");

  if (!bin) {
    return NextResponse.json({ error: 'BIN inválido' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/payment_methods/search?bin=${bin}&site_id=MPE`, {
      headers: {
        'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: 'Fallo al consultar Mercado Pago', response: errorData }, { status: 500 });
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const method = data.results[0];
      return NextResponse.json({ method_id: method.id }); // ej: visa, master, amex
    }

    return NextResponse.json({ error: 'Método no encontrado' }, { status: 404 });

  } catch (error) {
    return NextResponse.json({ error: `Error interno del servidor: ${error} `, }, { status: 500 });
  }
}
