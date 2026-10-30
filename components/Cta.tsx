import { temWhatsApp } from "@/content/site";

// Botão de conversa que acompanha cada seção. Leva ao WhatsApp quando o
// número estiver em content/site.ts; até lá, ao Direct do Instagram.
export default function Cta({ href, children, variante = "cheio" }: {
  href: string;
  children?: React.ReactNode;
  variante?: "cheio" | "linha";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={variante === "cheio" ? "cta" : "cta cta-linha"}
      data-magnetic
      data-cursor="Conversar"
    >
      <span className="cta-icone" aria-hidden="true">
        {temWhatsApp ? (
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.6 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M4 5h16v11H8l-4 4V5Z" /></svg>
        )}
      </span>
      <span>{children ?? (temWhatsApp ? "Chamar no WhatsApp" : "Chamar no Direct")}</span>
      <span className="cta-seta" aria-hidden="true">→</span>
    </a>
  );
}
