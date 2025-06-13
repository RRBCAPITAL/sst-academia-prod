import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log('📦 Body recibido en API:', JSON.stringify(body, null, 2));

    const payment = new Payment(client);

    // Crear el pago en MercadoPago
    const result = await payment.create({ body });

    console.log('✅ Pago procesado:', JSON.stringify(result, null, 2));

    // Verificar el estado del pago
    if (result.status === 'approved') {
      // Si el pago fue aprobado, retornamos un mensaje de éxito
      return NextResponse.json({
        message: 'Pago procesado correctamente',
        payment_status: 'approved',
        payment_id: result.id,
      });
    } else if (result.status === 'rejected') {
      // Si el pago fue rechazado, retornamos detalles del rechazo
      return NextResponse.json({
        message: 'Pago rechazado',
        payment_status: 'rejected',
        reason: result.status_detail || 'Razón no especificada',
        payment_id: result.id,
      }, { status: 400 });
    } else {
      // Si el pago tiene un estado no esperado
      return NextResponse.json({
        message: `Pago con estado desconocido: ${result.status}`,
        payment_status: result.status,
        payment_id: result.id,
      }, { status: 400 });
    }

  } catch (error: any) {
    console.error('❌ Error al procesar el pago:', error);

    // Si el error es de MercadoPago SDK, puede venir con `message`, `cause`, etc.
    if (error?.message) {
      console.error('🧠 Mensaje del error:', error.message);
    }
    if (error?.cause) {
      console.error('📚 Detalle del error (causa):', error.cause);
    }
    console.log('📦 Detalles del error:', JSON.stringify(error, null, 2));

   return NextResponse.json(
  {
    error: 'Error al procesar el pago',
    message: `Error al procesar el pago: ${error?.message || 'No message'}`,
    reason: error?.cause ? JSON.stringify(error.cause, null, 2) : 'No cause',
    stack: error?.stack || 'No stack trace',
  },
  { status: 500 }
);
  }
}
