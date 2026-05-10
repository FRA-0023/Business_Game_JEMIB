# Vite Libere

Vite Libere è una piattaforma web sviluppata per promuovere un progetto di agricoltura sociale e valorizzazione di beni confiscati alla mafia nel territorio di Trapani.

Il sito permette agli utenti di:

- acquistare prodotti enologici tramite e-commerce;
- adottare una vigna attraverso un sistema di abbonamento annuale;
- prenotare esperienze di enoturismo solidale;
- contattare il team tramite form dedicati;
- ricevere certificati digitali e comunicazioni automatiche via email.

---

# Struttura del Sito

| Route | Pagina | Descrizione |
|---|---|---|
| `/` | Home | Landing page principale |
| `/adotta` | Adotta | Sistema di adozione vigne |
| `/shop` | Shop | E-commerce prodotti |
| `/esperienze` | Esperienze | Esperienze ed eventi |
| `/team` | Team | Presentazione del team |
| `/faq` | FAQ | Domande frequenti |
| `/contatti` | Contatti | Form contatti |
| `/email-conferma` | EmailConferma | Conferma invio email |
| `*` | Errore | Pagina fallback / 404 |

---

# Architettura del Progetto

```txt
vitelibere/
│
├── dist/                     # Build produzione
├── node_modules/
├── public/                   # File statici pubblici
│
├── src/
│   │
│   ├── api/                  # Logica API lato client
│   │   │
│   │   ├── email/
│   │   │   └── contact_email.js
│   │   │
│   │   └── stripe/
│   │       ├── checkout.js
│   │       └── webhook.js
│   │
│   ├── assets/               # Immagini, icone, media
│   │
│   ├── components/           # Componenti riutilizzabili
│   │   │
│   │   ├── Navbar/
│   │   │
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Spinner.jsx
│   │
│   ├── data/                 # Dati statici/configurazioni
│   │
│   ├── pages/                # Pagine del sito
│   │   │
│   │   ├── Home/
│   │   ├── Adotta/
│   │   ├── Shop/
│   │   ├── Esperienze/
│   │   ├── Team/
│   │   ├── FAQ/
│   │   ├── Contatti/
│   │   ├── EmailConferma/
│   │   └── Errore/
│   │
│   ├── App.jsx               # Router principale
│   ├── main.jsx              # Entry point React
│   ├── App.css
│   └── index.css
│
├── .env                      # Variabili ambiente
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# Funzionalità Principali

- Contatto tramite email
- Prenotazione via mail di esperienze:
  - Enoturismo Solidale
  - Vendemmia Aperta
  - Box Regalo Solidale
  - Partnership etiche
- Funzionalità e-commerce per acquisto vini
- Sistema di abbonamento annuale per adozione vigne
- Invio automatico certificati digitali
- Gestione pagamenti Stripe
- Invio email automatiche tramite webhook

---

# Tecnologie Utilizzate

## Front-End

- React (Vite)
- Tailwind CSS
- React Router

## Sistema di E-Mailing

- EmailJS
- Nodemailer

## Sistema di Pagamento

- Stripe
- Supabase Edge Functions

## Backend / Serverless

- Supabase

---

# Workflow Acquisto Prodotti E-Commerce

1. L'utente compone il carrello dal frontend.
2. Confermando l'acquisto viene inviata una richiesta a Supabase.
3. Una Edge Function Supabase invia una richiesta a Stripe per creare una pagina di pagamento.
4. L'utente inserisce email e dati della carta.
5. Stripe processa il pagamento.
6. In caso di successo:
   - viene mostrata la schermata di conferma;
   - l'utente viene reindirizzato al sito.
7. In caso di errore:
   - l'utente può riprovare;
   - oppure tornare al sito.
8. Stripe invia automaticamente la ricevuta di pagamento (non in fase di testing).
9. Una Edge Function Supabase intercetta il webhook Stripe e invia una mail di conferma acquisto personalizzata (diversa dalla ricevuta Stripe).

---

# Workflow Adozione Vigna

1. L'utente sceglie il piano di adozione.
2. Compila il form con:
   - nome;
   - email;
   - dedica personalizzata.
3. Il frontend invia una richiesta a Supabase.
4. Una Edge Function crea una sessione Stripe in modalità abbonamento annuale.
5. L'utente inserisce email e dati della carta.
6. Stripe processa il pagamento.
7. In caso di successo:
   - viene mostrata la schermata di conferma;
   - l'utente viene reindirizzato alla preview del certificato.
8. In caso di errore:
   - l'utente può riprovare;
   - oppure tornare al sito.
9. Stripe invia automaticamente la ricevuta di pagamento (non in fase di testing).
10. Una Edge Function Supabase intercetta il webhook Stripe e invia:
    - il certificato digitale;
    - la mail di conferma adozione.

---

# Workflow Prenotazione Esperienze

1. L'utente seleziona il tipo di esperienza.
2. Compila il form con le informazioni richieste.
3. Alla conferma:
   - viene inviata una mail all'utente;
   - viene inviata una mail al team di Vite Libere.
4. Il team analizza manualmente la richiesta.
5. Entro 24/48 ore viene proposta un'esperienza personalizzata via email.

---

# Gestione Email

## EmailJS

Utilizzato per:

- form contatti;
- richieste esperienze;
- comunicazioni rapide frontend.

## Nodemailer

Utilizzato lato server per:

- certificati digitali;
- conferme pagamento;
- rinnovi abbonamenti;
- email automatiche Stripe.

---

# Webhook Stripe

La piattaforma utilizza webhook Stripe tramite Supabase Edge Functions.

## Eventi Gestiti

### `checkout.session.completed`

Gestisce:

- acquisti singoli;
- abbonamenti annuali.

### `invoice.paid`

Gestisce:

- rinnovi automatici degli abbonamenti.

---

# Variabili Ambiente

## Frontend

```env
VITE_EMAILJS_SERVICE_ID= ...
VITE_EMAILJS_CONTACT_TEMPLATE_ID= ...
VITE_EMAILJS_ESPERIENZE_TEMPLATE_ID= ...
VITE_EMAILJS_PUBLIC_KEY= ...

VITE_SUPABASE_CREATE_CHECKOUT = ...
VITE_SUPABASE_CREATE_SUBSCRIPTION_CHECKOUT = ...
```

## Backend / Edge Functions

```env
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET=
EMAIL_USER=
EMAIL_PASS=
```

---

# Dati Test Stripe

In modalità test Stripe non permette di eseguire pagamenti con carte reali, né di inviare fatture automatiche.
E' necessario utilizzare dei dati appositi per testare il servizio.

## Carta Test Successo

```txt
4242 4242 4242 4242
```
Scadenza: qualsiasi data futura  
CVC: qualsiasi 3 cifre

---

# Possibili Estensioni Future

- Iscrizione newsletter
- Tracking ordini
- Sistema coupon/sconti
- Generazione PDF certificati
- Implementazione sistema gestione contenuti (articoli, post, video)
