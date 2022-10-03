import styled, { css, ThemeProvider } from 'styled-components';
import { SelectProps } from './select';
import { ChevronDown } from '@styled-icons/boxicons-solid';

export const Select = styled('div')<SelectProps>`
  position: relative;
  width: 100%;
`;

export const SelectInput = styled('select')`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
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
  }

  ${(props) =>
    props['aria-invalid'] &&
    css`
      border-color: ${(props) => props.theme.colors.error};
      color: ${(props) => props.theme.colors.error};
    `}
`;

export const SelectMedia = styled('span')`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const SelectIcon = styled(ChevronDown)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.interactive};

  ${SelectInput}:disabled ~ ${SelectMedia} & {
    color: ${(props) => props.theme.colors.color50};
  }

  ${SelectInput}[aria-invalid="true"] ~ ${SelectMedia} & {
    color: ${(props) => props.theme.colors.error};
  }
`;
