import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  /**
   * Variant do botão
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Tamanho do botão
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Conteúdo do botão
   */
  children: React.ReactNode;
  /**
   * Evento de clique
   */
  onClick?: () => void;
  /**
   * Estado desabilitado
   */
  disabled?: boolean;
}

/**
 * Componente de botão reutilizável
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
