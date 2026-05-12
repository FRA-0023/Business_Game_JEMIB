export const create_subscription_checkout = async (price_id, nome, livello, dedica="") => {
  
  try {
    const res = await fetch(
      import.meta.env.VITE_SUPABASE_CREATE_SUBSCRIPTION_CHECKOUT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "subscription",
          priceId: price_id,
          nome: nome, 
          prodotto: livello,
          dedica: dedica,
        }),
      }
    );

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error || "Checkout error");
    }

    return json; 
  } catch (err) {
    throw err;
  }
};


