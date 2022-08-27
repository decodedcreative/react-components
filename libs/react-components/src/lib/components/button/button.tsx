import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import StyledButton from './button.styles';
export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  type: 'button' | 'reset' | 'submit';
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...args }, ref) => (
    <StyledButton {...args} ref={ref}>
      {children}
    </StyledButton>
  )
);

export default Button;
