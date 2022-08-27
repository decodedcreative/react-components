import { HTMLAttributes, ReactNode } from 'react';
import StyledTypography from './typography.styles';

/* eslint-disable-next-line */
export interface TypographyProps extends HTMLAttributes<HTMLUnknownElement> {
  children: ReactNode;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'strong' | 'span';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  weight?: 'light' | 'medium' | 'bold';
  italic?: boolean | undefined;
  marginBottom?: boolean | undefined;
}

const Typography = ({ children, ...args }: TypographyProps) => (
  <StyledTypography {...args}>{children}</StyledTypography>
);

export default Typography;
