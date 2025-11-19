import React from "react";
import styles from "./Header.module.css";
import { useTyping } from "../utils/hooks";

export default function Header() {
  const typed = useTyping("Eu sou Seu Nome, Desenvolvedor Full Stack", 60);

  return (
    <header className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <span className={styles.type}>{typed}</span>
        </h1>
        <p className={styles.subtitle}>
          Construo aplicações web escaláveis — foco em React, Node.js e experiência de usuário.
        </p>

        <div className={styles.ctaRow}>
          <a className={`${styles.cta} ${styles.primary}`} href="#projects">Veja meus projetos</a>
          <a className={styles.cta} href="https://github.com/username" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div className={styles.meta}>
          <div>Estudante de Sistemas de Informação — foco em backend, arquitetura e UX.</div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.snippetTitle}>Principais Tecnologias</div>
          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>Express</span>
            <span className={styles.tag}>Postgres</span>
            <span className={styles.tag}>Docker</span>
          </div>
        </div>
      </div>
    </header>
  );
}
