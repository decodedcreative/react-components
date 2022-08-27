import { ComponentPropsWithoutRef, ReactNode } from 'react';
import StyledLink from './link.styles';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
  decoration: boolean;
  variant: 'inverse' | 'secondary';
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Link = ({ children, ...args }: LinkProps) => (
  <StyledLink {...args}>{children}</StyledLink>
);

export default Link;
