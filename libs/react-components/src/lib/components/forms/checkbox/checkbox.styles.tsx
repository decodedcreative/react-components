import styled from 'styled-components';
import { CheckboxInputProps, CheckboxProps } from './checkbox';
import { Check } from '@styled-icons/bootstrap/';

export const Checkbox = styled('div')`
  position: relative;
  display: flex;
`;

export const CheckboxLabel = styled('label')`
  color: ${(props) => props.theme.colors.color70};
  font-size: ${(props) => props.theme.typography.sizes.default};
  font-family: ${(props) => props.theme.typography.fontFamily};
  line-height: ${(props) => props.theme.typography.lineHeight};
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: -1;
`;

export const CheckboxBackground = styled('div')`
  background-color: ${(props) => props.theme.colors.color10};
  border: ${(props) => props.theme.general.borderWidth} solid
    ${(props) => props.theme.colors.color50};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

export const CheckboxText = styled('span')`
  margin-left: ${(props) => props.theme.spacing.sm};
`;

export const CheckboxIcon = styled(Check)`
  color: ${(props) => props.theme.colors.interactive};
  width: 24px;
  height: 24px;
`;

export const CheckboxInput = styled('input').attrs<CheckboxInputProps>({
  type: 'checkbox',
})<CheckboxInputProps>`
  position: absolute;
  opacity: 0;
  width: 24px;
  height: 24px;
  border-radius: ${(props) => props.theme.general.borderRadius};

  &:focus ~ ${CheckboxLabel} ${CheckboxBackground} {
    box-shadow: ${(props) => props.theme.general.focusBoxShadow};
    border-color: ${(props) => props.theme.colors.color70};
    outline-width: ${(props) => props.theme.general.focusWidth};
  }

  &:checked::not(&:disabled) ~ ${CheckboxLabel} ${CheckboxBackground} {
    border-color: ${(props) => props.theme.colors.interactive};
  }

  &:disabled ~ ${CheckboxLabel} ${CheckboxBackground} {
    background-color: ${(props) => props.theme.colors.color30};
  }

  &:disabled ~ ${CheckboxLabel} ${CheckboxText} {
    color: ${(props) => props.theme.colors.color50};
  }

  &:disabled ~ ${CheckboxLabel} ${CheckboxIcon} {
    color: ${(props) => props.theme.colors.color50};
  }

  &[aria-invalid='true'] ~ ${CheckboxLabel} ${CheckboxBackground} {
    border-color: ${(props) => props.theme.colors.error};
  }

  &[aria-invalid='true'] ~ ${CheckboxLabel} ${CheckboxIcon} {
    color: ${(props) => props.theme.colors.error};
  }
`;

export const CheckboxIndicator = styled('div')`
  color: ${(props) => props.theme.colors.color10};
  transform: scale(0);
  transition: transform 0.05s ease-in;

  ${CheckboxInput}:checked ~ ${CheckboxLabel} & {
    transform: scale(1);
  }
`;
