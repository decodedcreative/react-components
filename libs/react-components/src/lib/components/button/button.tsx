import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import StyledButton from './button.styles';
export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  type: 'button' | 'reset' | 'submit';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, variant, type }, ref) => (
    <StyledButton disabled={disabled} variant={variant} type={type} ref={ref}>
      {children}
    </StyledButton>
  )
);

export default Button;
