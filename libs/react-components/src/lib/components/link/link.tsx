import { ComponentPropsWithoutRef, ReactNode } from 'react';
import StyledLink from './link.styles';

/* eslint-disable-next-line */
export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
  decoration: boolean;
  variant: 'inverse' | 'secondary';
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Link = ({ children, decoration = true, variant, ...rest }: LinkProps) => (
  <StyledLink decoration={decoration} variant={variant} {...rest}>
    {children}
  </StyledLink>
);

export default Link;
