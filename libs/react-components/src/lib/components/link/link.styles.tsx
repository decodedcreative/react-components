import styled, { css } from 'styled-components';
import { LinkProps } from './link';

const StyledLink = styled('a')<LinkProps>`
  color: ${(props) => props.theme.colors.interactive};

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      color: ${props.theme.colors.color70};
    `}

  ${(props) =>
    props.variant === 'inverse' &&
    css`
      color: ${props.theme.colors.color10};
    `}

  ${(props) =>
    props.decoration === false &&
    css`
      text-decoration: none;
    `}
`;

export default StyledLink;
