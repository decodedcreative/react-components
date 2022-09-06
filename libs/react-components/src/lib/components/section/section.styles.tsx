import styled, { css } from 'styled-components';
import { SectionProps, SectionItemProps } from './section';

export const Section = styled('section')<SectionProps>`
  padding-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.lg};

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${(props) => props.theme.colors.color20};
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${(props) => props.theme.colors.color30};
    `}
`;

export const SectionContent = styled('div')<SectionProps>`
  padding-left: ${(props) => props.theme.general.gridGutter};
  padding-right: ${(props) => props.theme.general.gridGutter};
`;

export const SectionItem = styled('div')<SectionItemProps>``;

export const SectionItemContent = styled('div')`
  max-width: ${(props) => props.theme.general.gridMaxWidth};
  margin-left: auto;
  margin-right: auto;
`;
