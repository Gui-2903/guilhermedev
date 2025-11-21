import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useRef();
  useEffect(() => {
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
      { threshold: 0.12 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`reveal ${styles.container}`} ref={ref}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.lead}>Quer trabalhar comigo ou só falar sobre tecnologia? Me ache nas redes abaixo ou envie uma mensagem.</p>

      <div className={styles.content}>
        <div className={styles.links}>
          <a href="https://github.com/Gui-2903" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/guilherme-fs29?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="guilhermefs2903@gmail.com">guilhermefs2903@gmail.com</a>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label>
            Nome
            <input placeholder="Seu nome" />
          </label>
          <label>
            Email
            <input placeholder="seu.email@exemplo.com" />
          </label>
          <label>
            Mensagem
            <textarea placeholder="Escreva aqui..." rows="6" />
          </label>

          <div className={styles.formActions}>
            <button className={styles.btn} type="submit">Enviar (visual)</button>
            <button className={`${styles.btn} ${styles.ghost}`} type="button">Limpar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
