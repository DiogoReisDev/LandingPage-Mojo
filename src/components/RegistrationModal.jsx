import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
const API_URL = import.meta.env.VITE_API_URL;

const RegistrationModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 3) return `(${phoneNumber}`;
    if (phoneNumberLength < 8)
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;

    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      7
    )}-${phoneNumber.slice(7, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || phone.replace(/[^\d]/g, "").length < 10) {
      toast({
        title: "Campos incompletos",
        description: "Preencha corretamente seu nome e WhatsApp.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      toast({
        title: "Mensagem enviada!",
        description:
          "Recebemos seus dados e você receberá uma mensagem no WhatsApp.",
        className:
          "bg-[#f7ecd5] text-[#3c6932] border-2 border-[#3c6932] shadow-lg",
      });

      onClose();
      setName("");
      setPhone("");
    } catch (err) {
      toast({
        title: "Erro ao enviar",
        description: err.message || "Erro de conexão com o servidor",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-primary-beige rounded-2xl shadow-green w-full max-w-md m-4 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-primary-green hover:text-dark-green transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-primary-green">
                Inscreva-se Agora
              </h2>
              <p className="text-primary-green/80 mt-2">
                Garanta sua vaga na próxima turma!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-green/50" />
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border-2 border-primary-green/20 rounded-full text-primary-green placeholder:text-primary-green/50 focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-green/50" />
                <input
                  type="tel"
                  placeholder="(DDD) 99999-9999"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength="15"
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border-2 border-primary-green/20 rounded-full text-primary-green placeholder:text-primary-green/50 focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-green hover:bg-dark-green text-primary-beige px-8 py-4 rounded-full font-semibold text-lg shadow-green pulse-green group"
              >
                {loading ? "Enviando..." : "Enviar Inscrição"}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;
