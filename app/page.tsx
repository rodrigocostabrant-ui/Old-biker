import Comportamentos from "@/components/Comportamentos";
import Cta from "@/components/Cta";
import Cursor from "@/components/Cursor";
import HeroIntro from "@/components/HeroIntro";
import SequenciaMoto from "@/components/SequenciaMoto";
import { canal, links } from "@/content/site";

const motos = ["Honda CB 400 Four", "CB 550 Four", "CB 750", "CB 360", "Honda 400F", "Yamaha RD 200", "Puch 1950", "Horex", "Projeto Buell", "Projeto Virago", "Harley-Davidson"];

const cases = [
  { img: "07-honda-cb400-roxa-recorte.jpg", alt: "Honda CB 400 Four roxa dentro da oficina", ano: "1976", nome: "Honda CB 400 Four", txt: "A que tirou o sono: peça difícil de achar e mecânica japonesa complexa. Muitas partes foram fabricadas.", pos: "50% 62%", cls: "case-destaque" },
  { img: "05-honda-cafe-racer-verde.jpg", alt: "Honda café racer verde na bancada hidráulica", ano: "Honda", nome: "Café racer na bancada", txt: "Linha CB, a especialidade da casa.", pos: "50% 50%" },
  { img: "08-moto-classica-cromada.jpg", alt: "Clássica europeia com tanque cromado na oficina", ano: "Europeia", nome: "Horex", txt: "Raridade europeia, tanque cromado e mecânica de outra época.", pos: "62% 40%" },
  { img: "06-honda-super-sport-vermelha.jpg", alt: "Motor e coletor de escape cromado de uma Honda Super Sport vermelha", ano: "Honda", nome: "Super Sport", txt: "Motor e coletor cromado, de volta à rua.", pos: "50% 58%" },
  { img: "09-chopper-preta-parede-tijolo.jpg", alt: "Chopper preta contra parede de tijolo", ano: "Custom", nome: "Chopper", txt: "Customizada, preta e pronta para rodar.", pos: "50% 50%" },
];

const passos = [
  ["Conversa", "Você conta qual é a moto e o que ela precisa."],
  ["Avaliação", "A moto vem para a oficina e é examinada de perto."],
  ["Orçamento", "Você sabe o que vai ser feito antes de começar."],
  ["Execução e entrega", "Mão na massa, e mais uma clássica de volta à rua."],
];

const legendas = [
  { de: 0, ate: 0.22, titulo: "Avaliação", texto: "A moto inteira, olhada de perto antes de qualquer serviço." },
  { de: 0.22, ate: 0.48, titulo: "Desmontagem", texto: "Banco, para-lama, rodas: cada peça sai na ordem certa." },
  { de: 0.48, ate: 0.76, titulo: "Motor", texto: "Câmbio, cabeçote, válvulas, carburação e elétrica." },
  { de: 0.76, ate: 1.01, titulo: "Peça rara", texto: "O que não se acha, a gente pesquisa ou fabrica." },
];

export default function Home() {
  return (
    <>
      <Comportamentos />
      <Cursor />

      <header className="topo">
        <div className="topo-in">
          <a href="#topo" className="marca">
            <span className="marca-lugar" aria-hidden="true" />
            <span className="marca-nome">Old Biker</span>
          </a>
          <nav className="nav">
            <a href="#cases">Projetos</a>
            <a href="#daniel">O Tininho</a>
            <a href="#oficina">Oficina</a>
            <a href="#por-dentro">Peça por peça</a>
            <a href="#contato">Contato</a>
          </nav>
          <a href={links.geral} target="_blank" rel="noopener" className="btn-linha" data-magnetic>Agendar</a>
        </div>
      </header>

      <main>
        <HeroIntro />

        {/* 01 · Cases */}
        <section id="cases" className="sec">
          <div className="caixa">
            <div className="cabeca">
              <div className="coluna-20">
                <p data-reveal="0" className="eyebrow">01 · Projetos</p>
                <h2 data-reveal="80" className="h2">Mais uma raridade saindo da <em>Old Biker.</em></h2>
              </div>
              <p data-reveal="140" className="corpo cabeca-txt">Honda CB, Harley-Davidson, Yamaha e clássicas europeias. Cada moto chega com uma história, e sai pronta para a rua.</p>
            </div>

            <div className="cases">
              {cases.map((c, i) => (
                <figure key={c.img} data-reveal={(i % 3) * 90} className={`case ${c.cls ?? ""}`}>
                  <div className="case-foto" data-tilt data-cursor="Projeto">
                    <img src={`/fotos/${c.img}`} alt={c.alt} style={{ objectPosition: c.pos }} />
                    <span className="case-brilho" />
                  </div>
                  <figcaption>
                    <span className="case-ano">{c.ano}</span>
                    <strong>{c.nome}</strong>
                    <span className="case-txt">{c.txt}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div data-reveal="0" className="secao-cta">
              <p>Tem uma clássica parada na garagem?</p>
              <Cta href={links.cases}>Mostrar a minha moto</Cta>
            </div>
          </div>

          <div className="faixa" aria-label="Motos que já passaram pela bancada">
            <div className="faixa-trilho">
              {[0, 1].map((n) => (
                <div key={n} className="faixa-grupo" aria-hidden={n === 1}>
                  <span className="faixa-rotulo">Já passaram pela bancada</span>
                  {motos.map((m) => (
                    <span key={m} className="faixa-item">{m}<span className="ponto">✦</span></span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 · Daniel */}
        <section id="daniel" className="sec sec-alt">
          <div className="caixa daniel">
            <div className="daniel-fotos">
              <figure data-reveal="0" className="daniel-a" data-tilt data-cursor="Tininho">
                <img src="/fotos/02-daniel-capacete-sorrindo.jpg" alt="Daniel Alcantara, o Tininho, de capacete e óculos de proteção, sorrindo" />
                <span className="case-brilho" />
              </figure>
              <figure data-reveal="120" className="daniel-b" data-tilt>
                <img src="/fotos/03-daniel-ajustando-capacete.jpg" alt="Daniel ajustando o capacete" />
              </figure>
              <figure data-reveal="220" className="daniel-c" data-tilt data-cursor="Na estrada">
                <img src="/fotos/10-daniel-harley-estrada.jpg" alt="Daniel pilotando uma Harley-Davidson na estrada" />
                <figcaption className="mono-mini">Também na estrada</figcaption>
              </figure>
            </div>
            <div className="coluna">
              <p data-reveal="0" className="eyebrow">02 · Quem cuida da sua moto</p>
              <h2 data-reveal="80" className="h2">Daniel <em>“Tininho”</em> Alcantara</h2>
              <p data-reveal="140" className="corpo">O dono está na oficina, todo dia. Você sabe com quem está falando, e quem vai pôr a mão na sua moto.</p>
              <p data-reveal="180" className="corpo">Moto antiga pede paciência: peça difícil de achar, modelo raro, mecânica de outra época. É esse o trabalho que o Tininho gosta de resolver.</p>
              <blockquote data-reveal="220" className="citacao">
                “Dá trabalho, mas fica top.”
                <cite>Daniel, no Instagram da oficina</cite>
              </blockquote>
              <ul data-reveal="260" className="daniel-fatos">
                <li><strong>Só clássicas</strong><span>Honda CB, Harley, Yamaha e europeias raras.</span></li>
                <li><strong>Volta ao mundo</strong><span>Já preparou moto para dar a volta ao mundo.</span></li>
              </ul>
              <div data-reveal="300"><Cta href={links.daniel}>Falar com o Tininho</Cta></div>
            </div>
          </div>
        </section>

        {/* 03 · Oficina */}
        <section id="oficina" className="sec oficina-sec">
          <div className="caixa">
            <div className="cabeca">
              <div className="coluna-20">
                <p data-reveal="0" className="eyebrow">03 · A oficina</p>
                <h2 data-reveal="80" className="h2">Tijolo aparente, ferramenta na parede e <em>moto na bancada.</em></h2>
              </div>
              <p data-reveal="140" className="corpo cabeca-txt">Um galpão com mezanino em Santa Efigênia, BH. Bancada hidráulica, ferramenta à mão e espaço para a sua moto ficar o tempo que precisar.</p>
            </div>

            <div className="oficina-grade">
              <figure data-reveal="0" className="oficina-a luz" data-luz data-cursor="O galpão">
                <img src="/fotos/01-hero-oficina-ampla.jpg" alt="Galpão da Old Biker com mezanino de tijolo, ferramentas e motos" />
                <span className="luz-veu" />
                <figcaption className="mono-mini">fig. 01 · o galpão</figcaption>
              </figure>
              <figure data-reveal="120" className="oficina-b luz" data-luz data-cursor="A bancada">
                <img src="/fotos/04-oficina-mecanico-trabalhando.jpg" alt="Mecânico trabalhando em moto desmontada na bancada" />
                <span className="luz-veu" />
                <figcaption className="mono-mini">fig. 02 · na bancada</figcaption>
              </figure>
              <div data-reveal="200" className="oficina-info">
                <span className="rotulo">Como funciona</span>
                <ol className="passos">
                  {passos.map(([t, d], i) => (
                    <li key={t} className="passo">
                      <span className="passo-n">0{i + 1}</span>
                      <span className="passo-t">{t}</span>
                      <span className="passo-d">{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div data-reveal="0" className="secao-cta">
              <p>Rua Lignito, 33 · Santa Efigênia · Belo Horizonte</p>
              <div className="botoes">
                <Cta href={links.oficina}>Agendar visita</Cta>
                <a href={links.mapa} target="_blank" rel="noopener" className="btn-sec" data-magnetic data-cursor="Mapa">Como chegar</a>
              </div>
            </div>
          </div>
        </section>

        {/* 04 · Moto desmontando com a rolagem */}
        <SequenciaMoto legendas={legendas} />
        <div className="seq-depois">
          <div className="caixa secao-cta">
            <p>Depois, tudo volta pro lugar. <em>Pronta para a estrada.</em></p>
            <Cta href={links.restauracao}>Quero restaurar a minha</Cta>
          </div>
        </div>

        {/* 05 · Serviços */}
        <section id="servicos" className="sec sec-alt">
          <div className="caixa pilha">
            <div className="cabeca">
              <div className="coluna-20">
                <p data-reveal="0" className="eyebrow">05 · Serviços</p>
                <h2 data-reveal="80" className="h2">O que sai da <em>bancada</em></h2>
              </div>
              <p data-reveal="140" className="corpo cabeca-txt">Duas frentes de trabalho. Em ambas, a moto é avaliada e o orçamento vem antes de qualquer serviço.</p>
            </div>
            <div className="servicos">
              {[
                { n: "01", t: "Restauração de motos antigas", d: "Para a clássica parada há anos ou que precisa voltar ao que era. A gente pesquisa o modelo, recupera a mecânica e corre atrás da peça certa.", c: "R", itens: ["Restauração completa", "Motor: câmbio, cabeçote e válvulas", "Carburação e elétrica", "Pesquisa e fabricação de peças"], href: links.restauracao, cta: "Avaliar restauração" },
                { n: "02", t: "Manutenção e revisão", d: "Para quem roda com a clássica no dia a dia ou vai pegar estrada. Revisão geral, preventiva e preparação para viagem, inclusive longa.", c: "M", itens: ["Revisão geral", "Preparação para viagem", "Troca de óleo e preventiva", "Manutenção Harley-Davidson"], href: links.revisao, cta: "Agendar revisão" },
              ].map((s, i) => (
                <article key={s.n} data-reveal={i * 120} className="servico" data-cursor={s.n}>
                  <div className="servico-topo">
                    <span className="servico-n">{s.n}</span>
                  </div>
                  <h3 className="h3">{s.t}</h3>
                  <p className="servico-txt">{s.d}</p>
                  <ul className="lista">
                    {s.itens.map((it, k) => (
                      <li key={it} className="lista-item"><span>{s.c}.0{k + 1}</span>{it}</li>
                    ))}
                  </ul>
                  <Cta href={s.href} variante="linha">{s.cta}</Cta>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 06 · Contato */}
        <section id="contato" className="contato" data-luz>
          <span className="luz-veu luz-contato" />
          <div className="caixa contato-in">
            <img data-reveal="0" className="contato-logo" src="/fotos/logo-old-biker.png" alt="" />
            <p data-reveal="60" className="eyebrow">06 · Agendamento</p>
            <h2 data-reveal="120" className="h2 h2-g">Sua moto tem história. <em>A gente cuida dela.</em></h2>
            <p data-reveal="180" className="corpo">Conte qual é a moto e o que ela precisa. A gente responde e marca a avaliação na oficina.</p>
            <div data-reveal="240" className="botoes">
              <Cta href={links.geral}>Agendar meu serviço</Cta>
              <a href={links.mapa} target="_blank" rel="noopener" className="btn-sec" data-magnetic data-cursor="Mapa">Como chegar</a>
            </div>
            <span data-reveal="280" className="mono-mini">{canal}</span>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="caixa rodape-in">
          <div className="rodape-grade">
            <div className="coluna-16">
              <img src="/fotos/logo-old-biker.png" alt="Old Biker" width={72} height={72} />
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
              <a href="#cases">Projetos</a>
              <a href="#daniel">O Tininho</a>
              <a href="#oficina">Oficina</a>
              <a href="#servicos">Serviços</a>
            </div>
          </div>
          <div className="rodape-base">
            <span>© 2026 Old Biker · Belo Horizonte</span>
            <span>Motos clássicas e antigas</span>
          </div>
        </div>
      </footer>

      <div className="barra-mobile">
        <a href={links.geral} target="_blank" rel="noopener">Agendar meu serviço <span>→</span></a>
      </div>
    </>
  );
}
