import { ComponentProps, ReactNode } from 'react';
import { StyledButton } from './button.styles';

/* eslint-disable-next-line */
export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  type: 'button' | 'reset' | 'submit';
}

const Button = ({ children, disabled, variant, type }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} variant={variant} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
