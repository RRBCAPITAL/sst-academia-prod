import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { yape_token, amount, payer_email } = body;

    if (!yape_token || !amount || !payer_email) {
      return new Response(JSON.stringify({ error: 'Faltan parámetros requeridos' }), {
        status: 400,
      });
    }

    const idempotencyKey = uuidv4();
    const transactionAmount = parseFloat('3.00');

    const mercadoPagoResponse = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({
        token: yape_token,
        transaction_amount: transactionAmount,
        payment_method_id: 'yape',
        installments: 1, // ✅ Obligatorio pago unico
        payer: {
          email: payer_email,
        },
      }),
    });

    const data = await mercadoPagoResponse.json();
    console.log("API Response:", data);

    if (!mercadoPagoResponse.ok) {
      return new Response(JSON.stringify(data), {
        status: mercadoPagoResponse.status,
      });
    }

    // Verificar el estado de la transacción
    if (data.status === 'rejected') {
      // Si el pago fue rechazado, verificar el detalle del rechazo
      let errorMessage = 'Pago rechazado por error desconocido';

      // Mensaje más específico según el detalle del rechazo
      if (data.status_detail === 'cc_rejected_bad_filled_security_code') {
        errorMessage = 'OTP inválido o mal ingresado';
      } else if (data.status_detail === 'cc_rejected_invalid_security_code') {
        errorMessage = 'Código de seguridad (OTP) inválido';
      } else if (data.status_detail === 'cc_rejected_other_reason') {
        errorMessage = 'Pago rechazado por error desconocido: cc_rejected_other_reason';
      }

      return NextResponse.json({
        message: 'Error al procesar el pago',
        payment_status: data.status,
        reason: errorMessage,
        payment_id: data.id,
      });
    }

    return NextResponse.json({
      message: 'Pago procesado correctamente',
      payment_status: 'approved',
      payment_id: data.id,
    });
  } catch (err) {
    console.error('❌ Error en backend:', err);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
    });
  }
}
