import express from "express";
import axios from "axios";

console.log("🚚 freight.js CARREGADO – SuperFrete API");

const router = express.Router();

router.post("/calculate", async (req, res) => {
  try {
    const { cep, value } = req.body;

    if (!cep) {
      return res.status(400).json({ error: "CEP é obrigatório" });
    }

    const payload = {
      from: {
        postal_code: process.env.ORIGIN_CEP, // 06445570
      },
      to: {
        postal_code: cep,
      },
      shipment_type: "dropoff", // 🔥 ISSO MUDA TUDO
      services: "loggi",
      products: [
        {
          height: 15,
          width: 20,
          length: 30,
          weight: 2,
          insurance_value: value,
          quantity: 1,
        },
      ],
    };

    console.log("📦 Payload enviado para SuperFrete:", payload);

    const response = await axios.post(
      "https://api.superfrete.com/api/v0/calculator",
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.SUPERFRETE_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: 30000,
      }
    );

    console.log("✅ Resposta SuperFrete:", response.data);

    return res.status(200).json(response.data);

  } catch (err) {
    console.error("❌ Erro ao calcular frete:", err.response?.data || err.message);

    return res.status(500).json({
      error: "Erro ao calcular frete",
      details: err.response?.data || err.message,
    });
  }
});

export default router;
