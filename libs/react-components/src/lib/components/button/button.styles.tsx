import styled, { css } from 'styled-components';
import { ButtonProps } from './button';

const StyledButton = styled('button')<ButtonProps>`
  background-color: ${(props) => props.theme.colors.color10};
  border: ${(props) => props.theme.components.button.borderWidth} solid
    ${(props) => props.theme.colors.interactive};
  color: ${(props) => props.theme.colors.interactive};
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.components.button.fontSize};
  word-break: break-word;
  user-select: none;
  border-radius: ${(props) => props.theme.general.borderRadius};
  padding: ${(props) => props.theme.components.button.padding};
  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.theme.colors.interactive};
      color: ${props.theme.colors.color10};
    `};
  &:disabled,
  &:disabled:hover,
  &[aria-disabled='true'],
  &[aria-disabled='true']:hover {
    background-color: ${(props) => props.theme.colors.color30};
    color: ${(props) => props.theme.colors.color50};
    border-color: ${(props) => props.theme.colors.color50};
  }
`;

export default StyledButton;
