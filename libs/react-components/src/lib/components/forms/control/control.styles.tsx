import styled, { css } from 'styled-components';
import { ControlProps } from './control';
import { Check } from '@styled-icons/bootstrap/';

export const Control = styled('div')<ControlProps>`
  position: relative;
  display: flex;
`;

export const ControlLabel = styled('label')`
  color: ${(props) => props.theme.colors.color70};
  font-size: ${(props) => props.theme.typography.sizes.default};
  font-family: ${(props) => props.theme.typography.fontFamily};
  line-height: ${(props) => props.theme.typography.lineHeight};
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: -1;
`;

export const ControlBackground = styled('div')`
  background-color: ${(props) => props.theme.colors.color10};
  border-radius: 50%;
  border: ${(props) => props.theme.general.borderWidth} solid
    ${(props) => props.theme.colors.color50};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

export const ControlInput = styled('input')`
  position: absolute;
  opacity: 0;
  width: 24px;
  height: 24px;

  &[type='checkbox'] ~ ${ControlLabel} ${ControlBackground} {
    border-radius: ${(props) => props.theme.general.borderRadius};
  }

  &:focus ~ ${ControlLabel} ${ControlBackground} {
    box-shadow: ${(props) => props.theme.general.focusBoxShadow};
    border-color: ${(props) => props.theme.colors.color70};
    outline-width: ${(props) => props.theme.general.focusWidth};
  }

  &:checked ~ ${ControlLabel} ${ControlBackground} {
    border-color: ${(props) => props.theme.colors.interactive};
  }
`;

export const CheckIcon = styled(Check)`
  color: ${(props) => props.theme.colors.interactive};
`;

export const ControlIndicator = styled('span')`
  color: ${(props) => props.theme.colors.color10};
  transform: scale(0);
  transition: transform 0.05s ease-in;

  ${ControlInput}:checked ~ ${ControlLabel} & {
    transform: scale(1);
  }

  ${ControlInput}[type='radio'] ~ ${ControlLabel} & {
    border: calc(16px / 2) solid ${(props) => props.theme.colors.interactive};
    border-radius: 50%;
  }
`;

export const ControlText = styled('span')`
  margin-left: ${(props) => props.theme.spacing.sm};
`;
