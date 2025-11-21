import React, { useEffect, useCallback } from 'react';

// Use o Portal para renderizar o modal no body e evitar problemas de z-index
// Se você não quiser usar 'react-dom/client' (que é para projetos modernos de React), 
// pode usar o básico de CSS, mas o portal é a melhor prática para modais.
// Para simplificar, vamos manter a implementação sem o Portal, mas o CSS fará 
// com que ele se comporte como um modal.

export default function ProjectModal({ project, onClose, styles }) {
    
    // Função para fechar com a tecla ESC
    const handleKeydown = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);
        // Desativa o scroll do corpo da página
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.body.style.overflow = 'unset'; // Reativa o scroll
        };
    }, [handleKeydown]);

    if (!project) return null; // Não renderiza se não houver projeto

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {/* Cabeçalho do Modal */}
                <div className={styles.modalHeader}>
                    <h3 className={styles.modalTitle}>{project.title}</h3>
                    <button className={styles.modalCloseBtn} onClick={onClose}>&times;</button>
                </div>

                {/* Tags de Tecnologia */}
                <div className={styles.modalTags}>
                    {project.tech.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </div>

                {/* Imagem/Preview (href que leva para o demo) */}
                <a href={project.demo || project.github} target="_blank" rel="noreferrer" className={styles.modalImageLink}>
                    {/* Imagem do Projeto - ajustável via CSS */}
                    <img src= {project.imgUrl} alt="" className={styles.modalImage} />
                                    </a>
                
                {/* Descrição Completa */}
                <p className={styles.modalFullDesc}>{project.fullDesc}</p>

                {/* Ações (Links) */}
                <div className={styles.modalActions}>
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.btn}>Ver Código</a>
                    {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.accent}`}>Ver Demo</a> : null}
                </div>
            </div>
        </div>
    );
}