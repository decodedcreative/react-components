import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './link.styles';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
  decoration: boolean;
  variant: 'inverse' | 'secondary';
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

export const Link = ({ children, ...args }: LinkProps) => (
  <S.Link {...args}>{children}</S.Link>
);
