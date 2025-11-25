import React, { useEffect, useState } from "react"; // Importe useState
import styles from "./Projects.module.css";
import ProjectModal from "./ProjectModal"; // Novo componente


import painelformLoc from "../../img/Captura de tela 2025-11-21 173431.png";
import painelAdminImg from  "../../img/Captura de tela 2025-11-24 170239.png";
import aviaoSimulador from "../../img/Captura de tela 2025-11-24 170600.png";
import geradorcert from "../../img/Captura de tela 2025-11-25 150835.png";


const PROJECTS = [
  {
    id: 1,
    title: "FORM-LOCALIZACAO",
    desc: "Formulario de Resposta para gerenciamento Eventos",
    tech: ["React", "Node.js", "Redis"],
    github: "https://github.com/Gui-2903/formLocRedis",
    demo: "https://form-loc.vercel.app/",
    imgUrl: painelformLoc, // Adicionado imgUrl
    fullDesc: "Este sistema digital de Geo-Check-in utiliza a localização do seu dispositivo para validar sua presença física no evento. Apenas após a confirmação de que você está dentro do raio permitido (Geofence), o formulário de resposta será liberado. É obrigatório habilitar o GPS para registrar sua participação e garantir a autenticidade dos dados.", // Adicionado fullDesc
  },
  {
   id: 2,
    title: "Painel ADM - FORM-LOCALIZACAO",
    desc: "Painel de Controle para gerenciamento Eventos do FORM-LOCALIZACAO",
    tech: ["React", "Node.js", "Redis"],
    github: "https://github.com/Gui-2903/formLocRedis",
    demo: "https://form-loc.vercel.app/adm",
    imgUrl: painelAdminImg, // Adicionado imgUrl
    fullDesc: "A Área ADM é o painel de controle restrito, acessível com as credenciais 'admin' em usuario e senha, dedicado à gestão do evento. Aqui o administrador define o local exato (Lat/Long), o raio de validação (Geofence) e personaliza as perguntas do formulário. A seção permite ainda a visualização e exportação de relatórios de presença confirmada.", // Adicionado fullDesc
  },
  
  {
    id: 3,
    title: "Aviao Simulador",
    desc: "Jogo de simulador de Avião com controles básicos e física simplificada.",
    tech: ["HTML", "JavaScript", "3D"],
    github: "https://github.com/Gui-2903/aviao-simulador",
    demo: "https://gui-2903.github.io/aviao-simulador/",
    imgUrl: aviaoSimulador, // Adicionado imgUrl
    fullDesc: "Simulador de Avião (Nome da Linguagem/Framework). Focado na implementação da lógica de movimento 3D, controles básicos da aeronave (pitch, roll, yaw) e física simplificada. Ideal para estudar a programação de ambientes interativos.", // Adicionado fullDesc
  },
  {
    id: 4,
    title: "Gerador de Certificados - ONLINE",
    desc: "GERADOR DE CERTIFICADOS ONLINE",
    tech: ["HTML", "JavaScript", "React"],
    github: "https://github.com/Gui-2903/MailMerge",
    demo: "https://github.com/Gui-2903/MailMerge",
    imgUrl: geradorcert, // Adicionado imgUrl
    fullDesc: "Este é um projeto que implementa a funcionalidade de mala direta (Mail Merge), permitindo a leitura de dados de uma planilha (como um arquivo CSV ou Excel) e sua subsequente substituição em um documento de texto base. O objetivo é gerar múltiplos documentos personalizados de forma eficiente, Observação: O projeto ainda não está totalmente funcional, pois está em processo de finalização e novas funcionalidades estão sendo adicionadas.", // Adicionado fullDesc
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