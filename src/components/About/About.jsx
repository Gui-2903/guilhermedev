import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";

export default function About() {
  const ref = useRef();
  useEffect(() => {
    // Scroll reveal class toggling
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`reveal ${styles.container}`} ref={ref}>
      <h2 className={styles.title}>Sobre</h2>
      <p className={styles.lead}>
        Sou estudante de Sistemas de Informação com foco em desenvolvimento web e engenharia de software. Gosto de projetar aplicações bem estruturadas, com atenção à performance e experiência do usuário.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Formação</h3>
          <p>Estudante de Sistemas de Informação — Universidade (UEMG), foco em backend, APIs e arquiteturas modernas.</p>
        </div>

        <div className={styles.card}>
          <h3>Habilidades</h3>
          <div className={styles.tags}>
            <span className={styles.tag}>JavaScript (ES6+)</span>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>SQL / Postgres</span>
            <span className={styles.tag}>Docker</span>
            <span className={styles.tag}>Banco de Dados</span>
          </div>
        </div>
      </div>
    </div>
  );
}
