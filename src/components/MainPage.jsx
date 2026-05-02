import React from 'react';
import '../CSS/MainPage.css';
import { SquareTerminal } from 'lucide-react';
import MC_Logo from '../assets/mc_logo.png';
import UC_Logo from '../assets/UC-V2.png';
import YDS_Logo from '../assets/yds-logo.png';
import Matrix from '../assets/matrix.png';

const MainPage = () => {

  // Lista atualizada com o novo repositório Python
  const reposList = [
    {
      name: "YSC-Diffusion-Stock",
      link: "https://github.com/yannickcruz/YSC-Diffusion-Stock",
      lang: "HTML",
      stars: 0,
      desc: "Workflows e assets focados na geração e otimização de imagens com IA para plataformas de banco de imagens.",
      wide: false
    },
    {
      name: "ComfyUI - YSC HighResFix",
      link: "https://github.com/yannickcruz/ComfyUI_YSC_HighResFix",
      lang: "Python",
      stars: 0,
      desc: "Node/Workflow customizado para o ComfyUI focado em melhoria de resolução e qualidade de imagens geradas por IA.",
      wide: false
    },
    {
      name: "Calculadora-de-Matriz",
      link: "https://github.com/yannickcruz/Calculadora-de-Matriz",
      lang: "JavaScript",
      stars: 0,
      desc: "Calculadora matemática interativa para realizar operações complexas envolvendo matrizes.",
      wide: false
    },
    {
      name: "Conversor-de-Unidades",
      link: "https://github.com/yannickcruz/Conversor-de-Unidades",
      lang: "JavaScript",
      stars: 0,
      desc: "Ferramenta utilitária web para conversão rápida e precisa entre diferentes unidades de medida.",
      wide: false
    },
    {
      name: "Mendes-Cassim",
      link: "https://github.com/yannickcruz/Mendes-Cassim",
      lang: "JavaScript",
      stars: 0,
      desc: "Projeto web dinâmico desenvolvido focado em interatividade no lado do cliente.",
      wide: true
    },
    {
      name: "gerenciador-servicos",
      link: "https://github.com/yannickcruz/gerenciador-servicos",
      lang: "JavaScript",
      stars: 0,
      desc: "Sistema web voltado para o controle, organização e gerenciamento de ordens de serviço.",
      wide: true
    }
  ];

  // Nova lista para os sites em Deploy
  const deployList = [
    {
      name: "Calculadora de Matriz",
      link: "https://yannickcruz.github.io/Calculadora-de-Matriz/",
      icon: Matrix,
      desc: "Ferramenta online para cálculos complexos com matrizes matemáticas."
    },
    {
      name: "YSC Diffusion Stock",
      link: "https://yannickcruz.github.io/YSC-Diffusion-Stock/",
      icon: YDS_Logo,
      desc: "Plataforma de otimização e geração de imagens de IA para Adobe Stock e derivados."
    },
    {
      name: "Conversor de Unidades",
      link: "https://yannickcruz.github.io/Conversor-de-Unidades/",
      icon: UC_Logo,
      desc: "Utilitário rápido para conversão de diversas grandezas e unidades de medida."
    },
    {
      name: "Mendes Cassim",
      link: "https://mendes-cassim.vercel.app/",
      icon: MC_Logo,
      desc: "Página web moderna, responsiva e dinâmica desenvolvida para cliente."
    }
  ];

  return (
    <div className="main-wrapper">
      
      {/* Ambient Grid Background */}
      <div className="ambient-bg"></div>
      
      {/* Scanlines Overlay */}
      <div className="scanlines"></div>
      
      {/* TopAppBar (Desktop) */}
      <header className="top-header">
        <div className="header-logo">
          <SquareTerminal />
          <span>YSC_TERMINAL_V1.0</span>
        </div>
        
        <button className="btn-primary" onClick={() => window.location.href = '/resume'}>
          CURRICULO.EXE
        </button>
      </header>
      
      <main className="container">
        
        {/* Hero Section */}
        <section className="section hero-section" id="root">
          <div className="hero-content">
            <div className="location-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>location_on</span>
              <span>Tombos, MG</span>
            </div>
            
            <h1 className="hero-title">
              Yannick Soares Cruz
            </h1>
            
            <div className="terminal-prompt">
              &gt; @yannickcruz <span className="blinking-cursor"></span>
            </div>
            
            <p className="hero-description">
              Desenvolvedor Full-Stack em formação, focado em criar aplicações web modernas e funcionais, buscando sempre aprender novas tecnologias e aprimorar minhas habilidades.
            </p>
            
            {/* Stats */}
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-label">Followers</span>
                <span className="stat-value">11</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Following</span>
                <span className="stat-value">13</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Repos</span>
                <span className="stat-value">12</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Stars</span>
                <span className="stat-value tertiary">7</span>
              </div>
            </div>
          </div>
          
          {/* Image/Avatar Terminal Window */}
          <div className="hero-image-wrapper">
            <div className="window-controls">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="image-container">
              <img 
                alt="Coding setup with neon lights" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIQ80Z_BKcEo37pK3XS9zIdICK0-nDpllBdsm9c1mPsWNZjLhpA4QjVk0ByLkKoxVqrICgNtXpdd_FvuZashiny4J3of1Z2110JvZcVJVhm_onZR1toK0pX6uutO8UTTMJ1FXKCTATf4gambzTOQyE33ajfJA0H7Lt1SlqV17Y6kNwEfJmKbhFd-1R1gfil15wl0NNgK2KKwd6UxENBFkwvKIJ_ebpHWha3XEZhJitfIPHACr0uARWNsO2NOHq1TbMR19sS2eLVbU"
              />
            </div>
          </div>
        </section>
        
        {/* Tech Stack */}
        <section className="section" id="data">
          <h2 className="section-title secondary">
            SYS.STACK
          </h2>
          <div className="chip-container">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Git', 'GitHub', 'Python'].map(tech => (
              <div key={tech} className="tech-chip">
                {tech}
              </div>
            ))}
          </div>
        </section>
        
        {/* Repositories */}
        <section className="section" id="code">
          <h2 className="section-title tertiary">
            EXE.REPOS
          </h2>
          <div className="repo-grid">
            
            {reposList.map((repo, index) => (
              <a 
                key={index}
                href={repo.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`repo-card ${repo.wide ? 'wide' : ''}`}
              >
                <div className="repo-header">
                  <h3 className="repo-title">{repo.name}</h3>
                  <div className="repo-stars">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>star</span> {repo.stars}
                  </div>
                </div>
                <p className="repo-desc">
                  {repo.desc}
                </p>
                <div className="repo-footer">
                  <span className="lang-badge">{repo.lang}</span>
                </div>
              </a>
            ))}

          </div>
        </section>

        {/* Sites em Deploy */}
        <section className="section" id="deploy">
          <h2 className="section-title primary">
            WWW.DEPLOY
          </h2>
          <div className="site-grid">
            
            {deployList.map((site, index) => (
              <a 
                key={index} 
                href={site.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="site-card"
              >
                <div className="site-logo">
                  <img src={site.icon} alt="" className="website-logo" />
                </div>
                <div className="site-content">
                  <h3 className="site-title">{site.name}</h3>
                  <p className="site-desc">{site.desc}</p>
                </div>
              </a>
            ))}

          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="footer" id="signal">
        <div className="footer-copy">
          © 2026 YSC // SYSTEM_INITIATED
        </div>
        <div className="footer-links">
          <a className="footer-link" href="https://github.com/yannickcruz" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a className="footer-link" href="https://www.linkedin.com/in/yannick-soares-cruz-44290123b/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a className="footer-link" href="https://github.com/yannickcruz/Portfolio" target="_blank" rel="noopener noreferrer">SOURCE_CODE</a>
        </div>
      </footer>
      
      {/* BottomNavBar (Mobile Only) */}
      <nav className="mobile-nav">
        <a className="mobile-nav-item active" href="#root">
          <span className="material-symbols-outlined" style={{ marginBottom: '4px' }}>home</span>
          ROOT
        </a>
        <a className="mobile-nav-item" href="#data">
          <span className="material-symbols-outlined" style={{ marginBottom: '4px' }}>analytics</span>
          DATA
        </a>
        <a className="mobile-nav-item" href="#code">
          <span className="material-symbols-outlined" style={{ marginBottom: '4px' }}>database</span>
          CODE
        </a>
        <a className="mobile-nav-item" href="#deploy">
          <span className="material-symbols-outlined" style={{ marginBottom: '4px' }}>public</span>
          DEPLOY
        </a>
        <a className="mobile-nav-item" href="#signal">
          <span className="material-symbols-outlined" style={{ marginBottom: '4px' }}>contact_mail</span>
          SIGNAL
        </a>
      </nav>
      
    </div>
  );
};

export default MainPage;