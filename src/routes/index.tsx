import { createFileRoute } from "@tanstack/react-router";

import "../portfolio.css";

const stats = [
  { label: "Followers", value: "11" },
  { label: "Following", value: "13" },
  { label: "Repos", value: "12" },
  { label: "Stars", value: "7" },
];

const stack = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "PostgreSQL", "Git", "GitHub"];

const repos = [
  {
    name: "YSC-Diffusion-Stock",
    url: "https://github.com/yannickcruz/YSC-Diffusion-Stock",
    description: "Repositório no GitHub de Yannick Soares Cruz.",
  },
  {
    name: "Calculadora-de-Matriz",
    url: "https://github.com/yannickcruz/Calculadora-de-Matriz",
    description: "Repositório no GitHub de Yannick Soares Cruz.",
  },
  {
    name: "Conversor-de-Unidades",
    url: "https://github.com/yannickcruz/Conversor-de-Unidades",
    description: "Repositório no GitHub de Yannick Soares Cruz.",
  },
  {
    name: "Mendes-Cassim",
    url: "https://github.com/yannickcruz/Mendes-Cassim",
    description: "Repositório no GitHub de Yannick Soares Cruz.",
  },
  {
    name: "gerenciador-servicos",
    url: "https://github.com/yannickcruz/gerenciador-servicos",
    description: "Repositório no GitHub de Yannick Soares Cruz.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yannick Soares Cruz | Developer Portfolio" },
      {
        name: "description",
        content: "Portfólio terminal de Yannick Soares Cruz, desenvolvedor full-stack em formação.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <div className="scanlines" aria-hidden="true" />
      <aside className="side-rail" aria-label="Navegação principal">
        <span className="material-symbols-outlined">home</span>
        <span className="material-symbols-outlined">database</span>
        <span className="material-symbols-outlined">analytics</span>
        <span className="material-symbols-outlined">contact_mail</span>
      </aside>

      <section className="terminal-shell" aria-labelledby="portfolio-title">
        <header className="terminal-topbar">
          <div className="window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>terminal</p>
          <strong>YSC_TERMINAL_V1.0</strong>
        </header>

        <div className="terminal-grid">
          <section className="profile-panel panel-card">
            <p className="run-command blinking-cursor">RESUME.EXE</p>
            <p className="location"><span className="material-symbols-outlined">location_on</span>Tombos, MG</p>
            <h1 id="portfolio-title">Yannick Soares Cruz</h1>
            <p className="handle">&gt; @yannickcruz</p>
            <p className="bio">
              Desenvolvedor Full-Stack em formação, focado em criar aplicações web modernas e funcionais,
              buscando sempre aprender novas tecnologias e aprimorar minhas habilidades.
            </p>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="stack-panel panel-card" aria-labelledby="stack-title">
            <h2 id="stack-title">SYS.STACK</h2>
            <div className="stack-list">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="repos-panel panel-card" aria-labelledby="repos-title">
            <h2 id="repos-title">EXE.REPOS</h2>
            <div className="repo-list">
              {repos.map((repo) => (
                <a className="repo-card" href={repo.url} target="_blank" rel="noreferrer" key={repo.name}>
                  <div>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                  </div>
                  <span className="stars"><span className="material-symbols-outlined">open_in_new</span></span>
                </a>
              ))}
            </div>
          </section>
        </div>

        <footer className="portfolio-footer">
          <p>© 2024 YSC // SYSTEM_INITIATED</p>
          <nav aria-label="Links sociais">
            <a href="https://github.com/yannickcruz" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="https://www.linkedin.com/in/yannick-soares-cruz-44290123b/" target="_blank" rel="noreferrer">LINKEDIN</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}