import styles from './Button.module.less';
import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;
interface ButtonProps extends NativeButtonProps {
  type?: 'primary' | 'default' | 'danger';
  nativeType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = 'default',
  nativeType = 'button',
  disabled = false,
  loading = false,
  children,
  ...rest
}) => {
  const buttonClass = `${styles['prime-button']} ${styles[`prime-button--${type}`]} ${
    loading ? styles['prime-button--loading'] : ''
  }`;

  return (
    <button className={buttonClass} type={nativeType} disabled={disabled || loading} {...rest}>
      {loading && <span className={styles['prime-button__loading']}>⏳</span>}
      {children}
    </button>
  );
};

export default Button;
