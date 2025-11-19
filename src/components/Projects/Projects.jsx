import React, { useEffect } from "react";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    id: 1,
    title: "Painel Administrativo",
    desc: "Dashboard para controle de usuários, logs e métricas.",
    tech: ["React", "Node.js", "Postgres", "Docker"],
    github: "https://github.com/username/painel",
    demo: ""
  },
  {
    id: 2,
    title: "API RESTful",
    desc: "API de autenticação e gerenciamento de recursos com JWT.",
    tech: ["Node.js", "Express", "JWT"],
    github: "https://github.com/username/api-rest",
    demo: ""
  },
  {
    id: 3,
    title: "Projeto de Visualização",
    desc: "Visualizações interativas de dados com gráficos dinâmicos.",
    tech: ["React", "Recharts", "D3"],
    github: "https://github.com/username/visualizacao",
    demo: "https://demo.example.com"
  }
];

export default function Projects() {
  useEffect(() => {
    const els = document.querySelectorAll(`.${styles.card}`);
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
    <div className={`${styles.container} reveal`}>
      <h2 className={styles.title}>Projetos</h2>
      <p className={styles.lead}>Alguns projetos com os quais trabalhei — código aberto e experimentos.</p>

      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.cardHead}>
              <h3>{p.title}</h3>
              <div className={styles.tags}>
                {p.tech.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>

            <p className={styles.desc}>{p.desc}</p>

            <div className={styles.actions}>
              <a href={p.github} target="_blank" rel="noreferrer" className={styles.btn}>Código</a>
              {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.primary}`}>Demo</a> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
