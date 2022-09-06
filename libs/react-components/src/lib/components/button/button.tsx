import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import * as S from './button.styles';
export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  type: 'button' | 'reset' | 'submit';
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...args }, ref) => (
    <S.Button {...args} ref={ref}>
      {children}
    </S.Button>
  )
);
