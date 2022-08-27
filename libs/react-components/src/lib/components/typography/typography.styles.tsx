import styled, { css } from 'styled-components';
import { TypographyProps } from './typography';

const StyledTypography = styled('p')<TypographyProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  line-height: ${(props) => props.theme.typography.lineHeight};
  margin: 0;
  font-size: ${(props) => props.theme.typography.sizes.default};
  font-weight: ${(props) => props.theme.typography.weights.default};

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.theme.spacing.spacingMd};
    `};

  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `};

  ${(props) =>
    props.size === 'xs' &&
    css`
      font-size: ${props.theme.typography.sizes.xs};
    `};

  ${(props) =>
    props.size === 'sm' &&
    css`
      font-size: ${props.theme.typography.sizes.sm};
    `};

  ${(props) =>
    props.size === 'md' &&
    css`
      font-size: ${props.theme.typography.sizes.md};
    `};

  ${(props) =>
    props.size === 'lg' &&
    css`
      font-size: ${props.theme.typography.sizes.lg};
    `};

  ${(props) =>
    props.size === 'xl' &&
    css`
      font-size: ${props.theme.typography.sizes.xl};
    `};

  ${(props) =>
    props.size === 'xxl' &&
    css`
      font-size: ${props.theme.typography.sizes.xxl};
    `};

  ${(props) =>
    props.size === 'xxxl' &&
    css`
      font-size: ${props.theme.typography.sizes.xxxl};
    `};

  ${(props) =>
    props.weight === 'light' &&
    css`
      font-weight: ${props.theme.typography.weights.light};
    `};

  ${(props) =>
    props.weight === 'medium' &&
    css`
      font-weight: ${props.theme.typography.weights.medium};
    `};

  ${(props) =>
    props.weight === 'bold' &&
    css`
      font-weight: ${props.theme.typography.weights.bold};
    `};
`;

export default StyledTypography;
