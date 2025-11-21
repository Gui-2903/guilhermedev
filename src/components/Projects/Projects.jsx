import React, { useEffect, useState } from "react"; // Importe useState
import styles from "./Projects.module.css";
import ProjectModal from "./ProjectModal"; // Novo componente


import painelAdminImg from "../../img/Captura de tela 2025-11-21 173431.png";


const PROJECTS = [
  {
    id: 1,
    title: "FORM-LOCALIZACAO",
    desc: "Formulario de Resposta para gerenciamento Eventos",
    tech: ["React", "Node.js", "Redis"],
    github: "https://github.com/Gui-2903/Full-stack-Sptyf",
    demo: "https://form-loc.vercel.app/",
    imgUrl: painelAdminImg, // Adicionado imgUrl
    fullDesc: "Um formulario que só é permitido responder, caso esteja no determinado local onde esta acontecendo o evento", // Adicionado fullDesc
  },
  {
    id: 2,
    title: "FORM-LOCALIZACAO, painel Admin",
    desc: "Formulario de Resposta para gerenciamento Eventos",
    tech: ["React", "Node.js", "Redis"],
    github: "https://github.com/Gui-2903/Full-stack-Sptyf",
    demo: "https://form-loc.vercel.app/adm",
    imgUrl: painelAdminImg, // Adicionado imgUrl
    fullDesc: "Um formulario que só é permitido responder, caso esteja no determinado local onde esta acontecendo o evento usuario e senha :admin", // Adicionado fullDesc
  },
  
  {
    id: 3,
    title: "Projeto de Visualização",
    desc: "Visualizações interativas de dados com gráficos dinâmicos.",
    tech: ["React", "Recharts", "D3"],
    github: "https://github.com/username/visualizacao",
    demo: "https://demo.example.com",
    imgUrl: "https://via.placeholder.com/600x400?text=Imagem+Visualizacao", // Adicionado imgUrl
    fullDesc: "Criação de um projeto frontend para visualização de dados complexos através de gráficos interativos e dinâmicos, utilizando as bibliotecas Recharts e D3.js para alta personalização.", // Adicionado fullDesc
  }
];

export default function Projects() {
  // Novo estado para controlar o modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const els = document.querySelectorAll(`.reveal`);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <> {/* Fragmento para poder adicionar o Modal fora da div.container */}
      <div className={`${styles.container} reveal`}>
        <h2 className={styles.title}>Projetos</h2>
        <p className={styles.lead}>Alguns projetos com os quais trabalhei — código aberto e experimentos.</p>

        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <article key={p.id} className={`${styles.card} reveal`}>
              <div className={styles.cardHead}>
                <h3>{p.title}</h3>
                <div className={styles.tags}>
                  {p.tech.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>

              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.actions}>
                {/* Botão de "Ver Detalhes" agora abre o modal */}
                <button onClick={() => openModal(p)} className={styles.btn}>
                  Detalhes / Ver Mais
                </button>
                {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.primary}`}>Demo</a> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* O componente ProjectModal é renderizado se modalOpen for true */}
      {modalOpen && selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
          styles={styles} 
        />
      )}
    </>
  );
}