import styled, { css } from 'styled-components';
import { LinkProps } from './link';

export const Link = styled('a')<LinkProps>`
  color: ${(props) => props.theme.colors.interactive};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  line-height: ${(props) => props.theme.typography.lineHeight};
  cursor: pointer;

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
    `};

  ${(props) =>
    props.as === 'button' &&
    css`
      background-color: transparent;
      border: 0;
      text-decoration: underline;
      padding: 0;

      &:focus-visible {
        outline: 2px solid transparent;
        outline-offset: 2px;
        box-shadow: 0 0 0 2px ${props.theme.colors.color10},
          0 0 0 4px ${props.theme.colors.interactive};
      }
    `};
`;
