// Número do WhatsApp da oficina, só dígitos com DDI (ex.: "5531999999999").
// Vazio: os botões levam ao Direct do Instagram.
export const WHATSAPP = "";

const numero = WHATSAPP.replace(/\D/g, "");

function wa(msg: string) {
  return numero
    ? `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
    : "https://ig.me/m/oldbikerbh";
}

export const links = {
  geral: wa("Olá, Old Biker! Quero agendar um serviço para a minha moto."),
  restauracao: wa("Olá, Old Biker! Quero agendar uma avaliação para restaurar a minha moto."),
  revisao: wa("Olá, Old Biker! Quero agendar uma revisão da minha moto."),
  instagram: "https://instagram.com/oldbikerbh",
  mapa: "https://www.google.com/maps/search/?api=1&query=Rua%20Lignito%2C%2033%2C%20Santa%20Efig%C3%AAnia%2C%20Belo%20Horizonte%2C%20MG",
};

export const canal = numero
  ? "Atendimento pelo WhatsApp"
  : "Atendimento pelo Direct do Instagram · @oldbikerbh";
