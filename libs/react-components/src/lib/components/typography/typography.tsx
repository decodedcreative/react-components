import { HTMLAttributes, ReactNode } from 'react';
import * as S from './typography.styles';

/* eslint-disable-next-line */
export interface TypographyProps extends HTMLAttributes<HTMLUnknownElement> {
  children: ReactNode;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  weight?: 'light' | 'medium' | 'bold';
  italic?: boolean | undefined;
  marginBottom?: boolean | undefined;
}

export const Typography = ({ children, ...args }: TypographyProps) => (
  <S.Typography {...args}>{children}</S.Typography>
);
