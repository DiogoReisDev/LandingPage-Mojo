import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
//import freightRoutes from "./routes/freight.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
//app.use("/api/freight", freightRoutes);

// Formata e valida número brasileiro
function formatPhone(phone) {
  let cleaned = phone.replace(/\D/g, "");

  // Se começa com 55 → Brasil válido
  if (cleaned.startsWith("55")) {
    return { valid: true, phone: cleaned };
  }

  // Se parece um número brasileiro sem o 55 (DDD + número)
  if (cleaned.length === 10 || cleaned.length === 11) {
    return { valid: true, phone: "55" + cleaned };
  }

  // Qualquer outra coisa é tratado como número estrangeiro
  return { valid: false, phone: cleaned };
}

app.post("/send-message", async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      error: "Nome e telefone são obrigatórios"
    });
  }

  const { valid, phone: formattedPhone } = formatPhone(phone);

  // Se não for número brasileiro, nem tenta mandar mensagem
  if (!valid) {
    return res.status(200).json({
      success: false,
      foreign: true,
      message: "Número com identificação internacional detectado",
      userMessage:
        "Detectamos que seu número possui uma bandeira estrangeira. No momento não conseguimos enviar mensagens automáticas para números fora do Brasil. Por favor, clique em 'Tirar Dúvidas' para falar diretamente com nossa equipe."
    });
  }

  try {
    const message = `Olá ${name}! Recebemos seu interesse no Mojo Dojo Tattoo. Em breve entraremos em contato com você.`;

    const response = await axios.post(
      `https://api.z-api.io/instances/${process.env.ZAPI_INSTANCE}/token/${process.env.ZAPI_INSTANCE_TOKEN}/send-text`,
      {
        phone: formattedPhone,
        message: message
      },
      {
        headers: {
          "client-token": process.env.ZAPI_CLIENT_TOKEN,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      success: true,
      phoneOriginal: phone,
      phoneFormatted: formattedPhone,
      apiResponse: response.data
    });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({
      success: false,
      error: "Erro ao enviar mensagem",
      details: err.response?.data || err.message
    });
  }
});

app.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
