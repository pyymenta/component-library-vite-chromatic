import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  /**
   * Título do card
   */
  title?: string;
  /**
   * Conteúdo do card
   */
  children: React.ReactNode;
  /**
   * Variante visual do card
   */
  variant?: 'default' | 'elevated' | 'outlined';
  /**
   * Evento de clique (torna o card clicável)
   */
  onClick?: () => void;
}

/**
 * Componente de card para organizar conteúdo
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  onClick,
}) => {
  const isClickable = Boolean(onClick);

  return (
    <div
      className={`${styles.card} ${styles[variant]} ${
        isClickable ? styles.clickable : ''
      }`}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
