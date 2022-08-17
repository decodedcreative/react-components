import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from 'react';
import StyledLink from './link.styles';

/* eslint-disable-next-line */
export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
  decoration: boolean;
  variant: 'inverse' | 'secondary';
}

const Link = ({ decoration = true, variant, ...rest }: LinkProps) => (
  <StyledLink decoration={decoration} variant={variant} {...rest}>
    Welcome to Link!
  </StyledLink>
);

export default Link;
