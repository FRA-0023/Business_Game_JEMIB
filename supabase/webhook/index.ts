import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@14.21.0";
import nodemailer from "npm:nodemailer";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"), {
  apiVersion: "2024-06-20",
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Deno.env.get("EMAIL_USER"),
    pass: Deno.env.get("EMAIL_PASS"),
  },
});

const cardStyle = `
  background: #f5f1e8;
  border: 1px solid rgba(114,33,33,0.1);
  border-radius: 12px;
  padding: 32px;
  font-family: Arial, sans-serif;
  color: #3b2a2a;
  max-width: 600px;
`;

const titleStyle = `
  font-size: 26px;
  font-weight: 300;
  font-family: Georgia, serif;
  color: #3b2a2a;
`;

const red = "#722121";

// Questo codice viene eseugito ogni volta che Stripe rileva un evento particolare (qui si gestiscono i pagamenti, le iscrizioni e i rinnovi degli abbonamenti)
Deno.serve(async (req) => {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) return new Response("Missing signature", { status: 400 });

    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      Deno.env.get("STRIPE_WEBHOOK_SECRET")
    );

    console.log("EVENT:", event.type);


    // in caso di successso del checkout prende email, totale pagamento ed eventualmente informazioni per il certificato.
    // se si tratta di un'abbonamento invia il certificato, altriment iuna mail di conferma 
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const email =
        session.customer_details?.email ||
        session.customer_email;

      const amount = (session.amount_total ?? 0) / 100;

      const nome = session.metadata?.nome || "Adottante";
      const livello = session.metadata?.prodotto || "Vigna";
      const dedica = session.metadata?.dedica || "";

      const isSubscription = session.mode === "subscription";

      if (isSubscription) {
        await transporter.sendMail({
          from: `Vite Libere <${Deno.env.get("EMAIL_USER")}>`,
          to: email,
          subject: "🎉 Certificato di Adozione Attivato",
          html: `
        <div style="${cardStyle}">
          
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:10px; letter-spacing:2px; text-transform:uppercase; color:${red}; font-weight:bold;">
              Certificato di Adozione
            </span>
            <span style="font-family: Georgia; font-style: italic; color:${red};">
              Vite Libere
            </span>
          </div>

          <hr style="border:0; border-top:1px solid rgba(114,33,33,0.1); margin:20px 0;" />

          <h1 style="${titleStyle}">${nome}</h1>

          <p style="font-size:16px; line-height:1.6;">
            ha adottato una vigna di livello 
            <strong>${livello}</strong> sul bene confiscato di Vite Libere — Trapani.
          </p>

          ${
            dedica
              ? `
            <div style="margin-top:20px; padding-left:15px; border-left:2px solid rgba(114,33,33,0.2); font-style:italic;">
              “${dedica}”
            </div>
          `
              : ""
          }

          <div style="margin-top:40px; display:flex; justify-content:space-between; font-size:11px; color:#777;">
            <span>Vendemmia 2026</span>
            <span style="color:${red}; font-style:italic;">VinLiber Soc. Coop.</span>
          </div>

          <hr style="margin:30px 0; border:0; border-top:1px solid rgba(114,33,33,0.1);" />

          <p style="font-size:12px; color:#777;">
            Email: ${email} · Importo: €${amount}
          </p>

        </div>
          `,
        });
      } else {
        await transporter.sendMail({
          from: `Vite Libere <${Deno.env.get("EMAIL_USER")}>`,
          to: email,
          subject: "🧾 Conferma acquisto ricevuta",
          html: `
            <div style="${cardStyle}">
              <h1 style="${titleStyle}">Grazie per il tuo acquisto 🧾</h1>

              <p>Abbiamo ricevuto correttamente il tuo pagamento.</p>

              <p>
                Importo: <strong>€${amount}</strong><br/>
                Email: <strong>${email}</strong>
              </p>

              <p style="margin-top:20px;">
                Ti invieremo presto ulteriori dettagli.
              </p>
            </div>
          `,
        });
      }
    }


    // Se viene rinnovano un abbonamento, viene inviata una mail di conferma
    if (event.type === "invoice.paid") {
      const invoice = event.data.object;

      const email = invoice.customer_email;
      const amount = invoice.amount_paid / 100;

      const isRenewal = invoice.billing_reason === "subscription_cycle";
      if (!isRenewal) return new Response("ignored", { status: 200 });

      await transporter.sendMail({
        from: `Vite Libere <${Deno.env.get("EMAIL_USER")}>`,
        to: email,
        subject: "🔄 Rinnovo Abbonamento",
        html: `
          <div style="${cardStyle}">
            <h2 style="${titleStyle}">Rinnovo completato 🔄</h2>

            <p>Il tuo abbonamento è stato rinnovato con successo.</p>
            <p>Importo: €${amount}</p>
          </div>
        `,
      });
    }

    return new Response("ok");
  } catch (err) {
    console.error("WEBHOOK ERROR:", err);
    return new Response("error", { status: 500 });
  }
});