import Comportamentos from "@/components/Comportamentos";
import HeroVideo from "@/components/HeroVideo";
import { canal, links } from "@/content/site";

const motos = ["Honda CB 400 Four", "CB 550", "CB 750", "CB 360", "Yamaha RD 200", "Puch 1950", "Horex", "Harley-Davidson"];

const bancada = [
  { ano: "1950", moto: "Puch", txt: "Funcionando de novo depois de muito tempo parada." },
  { ano: "1974", moto: "Honda CB 360", txt: "Linha CB, a especialidade da casa." },
  { ano: "1976", moto: "Honda CB 400 Four", txt: "Peça rara, muitas partes fabricadas.", destaque: true },
];

const servicos = [
  {
    n: "01",
    fig: "fig. 07 · Honda CB 400 Four",
    img: "/fotos/07-honda-cb400-roxa-oficina.jpg",
    alt: "Honda CB 400 Four roxa dentro da oficina",
    pos: "50% 62%",
    titulo: "Restauração de motos antigas",
    txt: "Para a clássica parada há anos ou que precisa voltar ao que era. A gente pesquisa o modelo, recupera a mecânica e corre atrás da peça certa, mesmo as difíceis de achar.",
    cod: "R",
    itens: ["Restauração completa", "Motor: câmbio, cabeçote e válvulas", "Carburação e elétrica", "Pesquisa de peças raras"],
    cta: "Agendar avaliação de restauração",
    href: links.restauracao,
  },
  {
    n: "02",
    fig: "fig. 06 · Honda Super Sport",
    img: "/fotos/06-honda-super-sport-vermelha.jpg",
    alt: "Motor e coletor de escape cromado de uma Honda Super Sport vermelha",
    pos: "50% 58%",
    titulo: "Manutenção e revisão",
    txt: "Para quem roda com a clássica no dia a dia ou vai pegar estrada. Revisão geral, manutenção preventiva e preparação para viagem, inclusive longa.",
    cod: "M",
    itens: ["Revisão geral", "Preparação para viagem", "Troca de óleo e preventiva", "Manutenção Harley-Davidson"],
    cta: "Agendar revisão",
    href: links.revisao,
  },
];

const galeria = [
  { img: "05-honda-cafe-racer-verde.jpg", alt: "Honda café racer verde na bancada hidráulica", cap: "Honda · café racer na bancada", cls: "g-grande", d: 0 },
  { img: "10-daniel-harley-estrada.jpg", alt: "Daniel pilotando uma Harley-Davidson na estrada", cap: "Harley-Davidson · na estrada", cls: "g-alta", pos: "40% 60%", d: 100 },
  { img: "09-chopper-preta-parede-tijolo.jpg", alt: "Chopper preta contra parede de tijolo", cap: "Chopper", d: 0 },
  { img: "04-oficina-mecanico-trabalhando.jpg", alt: "Mecânico trabalhando em moto desmontada na bancada", cap: "Na bancada", pos: "50% 45%", d: 80 },
  { img: "08-moto-classica-cromada.jpg", alt: "Detalhe do tanque cromado de uma clássica europeia", cap: "Clássica europeia · Horex", pos: "62% 30%", d: 160 },
];

const diferenciais = [
  ["Só clássicas e antigas", "Honda CB, Harley-Davidson, Yamaha e europeias raras. Não é oficina genérica."],
  ["Peça difícil não assusta", "Pesquisa de modelo raro e de peça que ninguém acha. Na CB 400 Four 1976, muitas partes foram fabricadas."],
  ["Pronta para a estrada", "Revisão para o dia a dia e para viagem longa. Já preparamos moto para dar a volta ao mundo."],
  ["O dono na oficina", "Daniel Alcantara, o Tininho, está na oficina no dia a dia. Você sabe com quem está falando."],
  ["Orçamento antes", "A moto é avaliada e o orçamento vem antes de qualquer serviço começar."],
  ["Comunidade de verdade", "Clientes marcam a oficina a cada entrega. Parceiros como Brandy Moto Peças e Oficina dos Tons."],
];

const passos = [
  ["Conversa", "Você conta qual é a moto e o que ela precisa."],
  ["Avaliação", "A moto vem para a oficina e é examinada de perto."],
  ["Orçamento", "Você sabe o que vai ser feito antes de começar."],
  ["Execução e entrega", "Mão na massa, e mais uma clássica de volta à rua."],
];

const Seta = ({ grande }: { grande?: boolean }) => <span className={grande ? "seta-g" : undefined}>→</span>;

export default function Home() {
  return (
    <>
      <Comportamentos />

      <header className="topo">
        <div className="topo-in">
          <a href="#topo" className="marca">
            <img src="/fotos/logo-old-biker-fundo-transparente.png" alt="Old Biker" width={46} height={46} />
            <span>Old Biker</span>
          </a>
          <nav className="nav">
            <a href="#servicos">Serviços</a>
            <a href="#oficina">Oficina</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
          </nav>
          <a href={links.geral} target="_blank" rel="noopener" className="btn-linha">Agendar meu serviço</a>
        </div>
      </header>

      <main>
        <HeroVideo />

        <div className="faixa">
          <div className="caixa faixa-in">
            <span className="faixa-rotulo">Já passaram pela bancada</span>
            {motos.map((m, i) => (
              <span key={m} className="faixa-item">
                {m}
                {i < motos.length - 1 && <span className="ponto">·</span>}
              </span>
            ))}
          </div>
        </div>

        <section id="oficina" className="sec sec-oficina">
          <div className="caixa oficina">
            <div data-reveal="0" className="oficina-fotos">
              <img src="/fotos/01-hero-oficina-ampla.jpg" alt="Galpão da Old Biker com mezanino de tijolo, ferramentas e motos" className="oficina-foto-a" />
              <figure className="oficina-foto-b">
                <img src="/fotos/02-daniel-capacete-sorrindo.jpg" alt="Daniel Alcantara, o Tininho, de capacete" />
                <figcaption className="mono-mini">Daniel “Tininho” Alcantara</figcaption>
              </figure>
              <span className="mono-mini oficina-leg">fig. 01 · o galpão</span>
            </div>
            <div className="coluna">
              <p data-reveal="0" className="eyebrow">01 · A oficina</p>
              <h2 data-reveal="80" className="h2">Do projeto parado à <em>entrega.</em></h2>
              <p data-reveal="140" className="corpo">Oficina de motos clássicas e antigas em Santa Efigênia, Belo Horizonte. O foco é a linha Honda CB, mas Harley-Davidson, Yamaha e raridades europeias também passam pela bancada.</p>
              <p data-reveal="180" className="corpo">Moto antiga pede paciência: peça difícil de achar, modelo raro, mecânica de outra época. E pede dono presente. Daniel Alcantara, o Tininho, está na oficina.</p>
              <div data-reveal="240" className="bancada">
                <span className="rotulo">Da bancada</span>
                <div className="bancada-grade">
                  {bancada.map((b) => (
                    <div key={b.ano} className={b.destaque ? "bancada-item destaque" : "bancada-item"}>
                      <span className="bancada-ano">{b.ano}</span>
                      <span className="bancada-moto">{b.moto}</span>
                      <span className="bancada-txt">{b.txt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="sec sec-alt">
          <div className="caixa pilha">
            <div className="cabeca">
              <div className="coluna-20">
                <p data-reveal="0" className="eyebrow">02 · Serviços</p>
                <h2 data-reveal="80" className="h2">O que sai da <em>bancada</em></h2>
              </div>
              <p data-reveal="140" className="corpo cabeca-txt">Duas frentes de trabalho. Em ambas, a moto é avaliada e o orçamento vem antes de qualquer serviço.</p>
            </div>
            <div className="servicos">
              {servicos.map((s, i) => (
                <article key={s.n} data-reveal={i * 120} className="servico">
                  <span className="rebite esq" />
                  <span className="rebite dir" />
                  <div className="servico-topo">
                    <span className="servico-n">{s.n}</span>
                    <span className="mono-mini">{s.fig}</span>
                  </div>
                  <div className="servico-foto">
                    <img src={s.img} alt={s.alt} style={{ objectPosition: s.pos }} />
                  </div>
                  <h3 className="h3">{s.titulo}</h3>
                  <p className="servico-txt">{s.txt}</p>
                  <div className="lista">
                    {s.itens.map((it, k) => (
                      <div key={it} className="lista-item">
                        <span>{s.cod}.0{k + 1}</span>
                        {it}
                      </div>
                    ))}
                  </div>
                  <a href={s.href} target="_blank" rel="noopener" className="link-cta">{s.cta} <Seta /></a>
                </article>
              ))}
            </div>
            <div data-reveal="0" className="cartao-cta">
              <div className="coluna-8">
                <span className="cartao-titulo">Não sabe o que a moto precisa?</span>
                <span className="cartao-txt">Comece pela avaliação: conte qual é a moto e o que está acontecendo.</span>
              </div>
              <a href={links.geral} target="_blank" rel="noopener" className="btn">Agendar meu serviço <Seta grande /></a>
            </div>
          </div>
        </section>

        <section id="galeria" className="sec">
          <div className="caixa pilha-galeria">
            <div className="cabeca">
              <div className="coluna-20">
                <p data-reveal="0" className="eyebrow">03 · Galeria</p>
                <h2 data-reveal="80" className="h2">Mais uma raridade saindo da <em>Old Biker.</em></h2>
              </div>
              <a data-reveal="140" href={links.instagram} target="_blank" rel="noopener" className="link-insta">Mais no Instagram <Seta /></a>
            </div>
            <div className="galeria">
              {galeria.map((g) => (
                <figure key={g.img} data-reveal={g.d} className={`g-item ${g.cls ?? ""}`}>
                  <img src={`/fotos/${g.img}`} alt={g.alt} style={{ objectPosition: g.pos }} />
                  <figcaption>{g.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="sec sec-alt">
          <div className="caixa pilha-dif">
            <div className="cabeca">
              <div className="coluna-20">
                <p data-reveal="0" className="eyebrow">04 · Por que a Old Biker</p>
                <h2 data-reveal="80" className="h2">Mão de quem <em>entende.</em></h2>
              </div>
              <p data-reveal="140" className="corpo cabeca-txt">Moto antiga não é moto qualquer. O que faz diferença na hora de escolher quem vai pôr a mão nela:</p>
            </div>
            <div className="difs">
              {diferenciais.map(([t, d], i) => (
                <div key={t} data-reveal={(i % 3) * 80} className="dif">
                  <span className="dif-n">0{i + 1}</span>
                  <div className="coluna-10">
                    <h3 className="h3-p">{t}</h3>
                    <p className="dif-txt">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-reveal="0" className="como">
              <span className="rotulo">Como funciona</span>
              <div className="passos">
                {passos.map(([t, d], i) => (
                  <div key={t} className="passo">
                    <span className={i === 0 ? "passo-ponto cheio" : "passo-ponto"} />
                    <span className="passo-n">0{i + 1}</span>
                    <span className="passo-t">{t}</span>
                    <span className="passo-d">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contato">
          <div className="contato-in">
            <div className="contato-col">
              <div className="contato-txt">
                <p data-reveal="0" className="eyebrow">05 · Agendamento</p>
                <h2 data-reveal="80" className="h2 h2-g">Sua moto tem história. <em>A gente cuida dela.</em></h2>
                <p data-reveal="140" className="corpo">Conte qual é a moto e o que ela precisa. A gente responde e marca a avaliação na oficina.</p>
                <div data-reveal="200" className="botoes">
                  <a href={links.geral} target="_blank" rel="noopener" className="btn btn-g">Agendar meu serviço <Seta grande /></a>
                  <a href={links.mapa} target="_blank" rel="noopener" className="btn-sec">Como chegar</a>
                </div>
                <div data-reveal="240" className="contato-end">
                  <span className="mono-mini">{canal}</span>
                  <span>Rua Lignito, 33 · Santa Efigênia · Belo Horizonte</span>
                </div>
              </div>
            </div>
            <div className="contato-foto">
              <img src="/fotos/03-daniel-ajustando-capacete.jpg" alt="Daniel ajustando o capacete" />
              <div className="contato-veu" />
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="caixa rodape-in">
          <div className="rodape-grade">
            <div className="coluna-16">
              <img src="/fotos/logo-old-biker-fundo-transparente.png" alt="Old Biker" width={72} height={72} />
              <span className="rodape-txt">Oficina de motocicletas clássicas e antigas em Belo Horizonte.</span>
            </div>
            <div className="coluna-12">
              <span className="rotulo">Endereço</span>
              <span>Rua Lignito, 33<br />Santa Efigênia · Belo Horizonte</span>
              <a href={links.mapa} target="_blank" rel="noopener" className="rodape-link">Como chegar →</a>
            </div>
            <div className="coluna-12">
              <span className="rotulo">Contato</span>
              <a href={links.geral} target="_blank" rel="noopener">Agendar meu serviço</a>
              <a href={links.instagram} target="_blank" rel="noopener">Instagram @oldbikerbh</a>
            </div>
            <div className="coluna-12">
              <span className="rotulo">Navegação</span>
              <a href="#servicos">Serviços</a>
              <a href="#oficina">Oficina</a>
              <a href="#galeria">Galeria</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
          <div className="rodape-base">
            <span>© 2026 Old Biker · Belo Horizonte</span>
            <span>Motos clássicas e antigas</span>
          </div>
        </div>
      </footer>

      <div className="barra-mobile">
        <a href={links.geral} target="_blank" rel="noopener">Agendar meu serviço <Seta /></a>
      </div>
    </>
  );
}
