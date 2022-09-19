import styled, { css } from 'styled-components';
import { TextFieldProps } from './textfield';

export const TextField = styled('div')<TextFieldProps>`
  width: 100%;
`;

export const TextFieldInput = styled('input')`
  appearance: none;
  width: 100%;
  box-sizing: border-box;
  padding: 11px 16px;
  color: ${(props) => props.theme.colors.color70};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.default};
  line-height: ${(props) => props.theme.typography.lineHeight};
  border: ${(props) => props.theme.general.borderWidth} solid
    ${(props) => props.theme.components.forms.borderColor};

  &:focus::not(&:focus-visible) {
    outline: 0;
    border-color: unset;
  }

  &:focus-visible {
    color: ${(props) => props.theme.colors.color60};
    border-color: ${(props) => props.theme.colors.interactive};
    outline: ${(props) => props.theme.general.focusWidth} solid transparent;
    outline-offset: ${(props) => props.theme.general.focusWidth};
    box-shadow: ${(props) => props.theme.general.focusBoxShadow};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.color50};
    cursor: not-allowed;
  }

  ${(props) =>
    props['aria-invalid'] &&
    css`
      border-color: ${(props) => props.theme.colors.error};
      color: ${(props) => props.theme.colors.error};
    `}
`;
