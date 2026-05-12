import emailjs from "@emailjs/browser";

export const sendContactEmail = async (user_name, user_email, message) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        sender_name: user_name,
        sender_email: user_email,
        message: message,
        data: new Date().toLocaleString("it-IT"),
      },
      PUBLIC_KEY,
    );

    return response;
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    throw error;
  }
};
