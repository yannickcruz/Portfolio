import React from 'react';
import '../CSS/Resume.css'; 

const Resume = () => {
  return (
    <div className="main-wrapper">
      
      {/* Ambient Grid Background (Mesmo da MainPage) */}
      <div className="ambient-bg"></div>
      
      {/* Scanlines Overlay (Mesmo da MainPage) */}
      <div className="scanlines"></div>

      {/* Container Principal */}
      <main className="container relative z-10">
        
        {/* Título da Página de Currículo */}
        <div className="section">
          <div className="terminal-prompt" style={{ marginBottom: '32px' }}>
            &gt; ./view_resume.sh <span className="blinking-cursor"></span>
          </div>
        </div>

        <div className="resume-container">
          
          {/* EDUCAÇÃO */}
          <section className="resume-section">
            <h2 className="section-title primary">
              SYS.EDUCATION
            </h2>
            
            <div className="resume-card">
              <div className="resume-header">
                <h3 className="resume-title">Instituto Federal Fluminense – Campus Itaperuna</h3>
                <h4 className="resume-subtitle">Bacharelado em Sistemas de Informação</h4>
                <span className="resume-meta">Cursando 4º Período, previsão de formação: 2028</span>
              </div>
              <ul className="resume-list">
                <li>Vencedor do evento 'HACKATON DE PROGRAMAÇÃO' na 12º Semana Acadêmica do IFF Itaperuna</li>
              </ul>
            </div>
          </section>

          {/* EXPERIÊNCIAS E PROJETOS PESSOAIS */}
          <section className="resume-section">
            <h2 className="section-title secondary">
              EXE.EXPERIENCE
            </h2>
            
            <div className="resume-card">
              <div className="resume-header">
                <h3 className="resume-title">Desenvolvimento FrontEnd com React.js</h3>
                <span className="resume-meta">Projeto Pessoal</span>
              </div>
              <ul className="resume-list">
                <li>Criação de aplicações Single Page modernas com React.js</li>
                <li>Desenvolvimento de interfaces responsivas e acessíveis</li>
                <li>Versionamento completo de projetos com Git e Github</li>
              </ul>
            </div>

            <div className="resume-card">
              <div className="resume-header">
                <h3 className="resume-title">Projetos pessoais com HTML, CSS, e JavaScript Vanilla</h3>
                <span className="resume-meta">Projeto Pessoal</span>
              </div>
              <ul className="resume-list">
                <li>Desenvolvimento de sites e landing pages totalmente responsivos usando apenas HTML5, CSS3 e JavaScript puro.</li>
                <li>Manipulação do DOM, eventos e animações sem dependências externas.</li>
                <li>Criação de componentes reutilizáveis e interativos com JavaScript modular.</li>
                <li>Versionamento e hospedagem pública dos projetos no GitHub.</li>
              </ul>
            </div>
          </section>

          {/* HABILIDADES E INTERESSES */}
          <section className="resume-section">
            <h2 className="section-title tertiary">
              DATA.SKILLS_AND_INTERESTS
            </h2>
            
            <div className="resume-card">
              <div className="skills-wrapper">
                
                <div className="skill-group">
                  <span className="skill-label">Habilidades</span>
                  <div className="skill-items">
                    {['HTML/CSS', 'Javascript', 'ReactJS', 'Inglês Intermediário'].map((skill, index) => (
                      <span key={index} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-group">
                  <span className="skill-label">Interesses</span>
                  <div className="skill-items">
                    {['Desenvolvimento de aplicações Web (Full-stack)', 'Machine Learning'].map((interest, index) => (
                      <span key={index} className="skill-chip" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Resume;