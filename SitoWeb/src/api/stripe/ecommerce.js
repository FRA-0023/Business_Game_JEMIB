export const create_ecommerce_checkout = async (data) => {
  try {
    const res = await fetch(
      import.meta.env.VITE_SUPABASE_CREATE_CHECKOUT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "payment",
          items: [...data],
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


