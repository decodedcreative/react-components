import styled from 'styled-components';
import { RadioInputProps, RadioProps } from './radio';

export const Radio = styled('div')<RadioProps>`
  position: relative;
  display: flex;
`;

export const RadioLabel = styled('label')`
  color: ${(props) => props.theme.colors.color70};
  font-size: ${(props) => props.theme.typography.sizes.default};
  font-family: ${(props) => props.theme.typography.fontFamily};
  line-height: ${(props) => props.theme.typography.lineHeight};
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: -1;
`;

export const RadioBackground = styled('div')`
  background-color: ${(props) => props.theme.colors.color10};
  border: ${(props) => props.theme.general.borderWidth} solid
    ${(props) => props.theme.colors.color50};
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

export const RadioText = styled('span')`
  margin-left: ${(props) => props.theme.spacing.sm};
`;

export const RadioInput = styled('input').attrs<RadioInputProps>({
  type: 'Radio',
})<RadioInputProps>`
  position: absolute;
  opacity: 0;
  width: 24px;
  height: 24px;
  border-radius: ${(props) => props.theme.general.borderRadius};

  &:focus ~ ${RadioLabel} ${RadioBackground} {
    box-shadow: ${(props) => props.theme.general.focusBoxShadow};
    border-color: ${(props) => props.theme.colors.color70};
    outline-width: ${(props) => props.theme.general.focusWidth};
  }

  &:checked ~ ${RadioLabel} ${RadioBackground} {
    border-color: ${(props) => props.theme.colors.interactive};
  }

  &:checked:disabled ~ ${RadioLabel} ${RadioBackground} {
    border-color: ${(props) => props.theme.colors.color50};
  }

  &:disabled ~ ${RadioLabel} ${RadioBackground} {
    background-color: ${(props) => props.theme.colors.color30};
  }

  &:disabled ~ ${RadioLabel} ${RadioText} {
    color: ${(props) => props.theme.colors.color50};
  }

  &[aria-invalid='true'] ~ ${RadioLabel} ${RadioBackground} {
    border-color: ${(props) => props.theme.colors.error};
  }
`;

export const RadioIndicator = styled('div')`
  color: ${(props) => props.theme.colors.color10};
  transform: scale(0);
  transition: transform 0.05s ease-in;
  border-width: calc(16px / 2);
  border-style: solid;
  border-color: ${(props) => props.theme.colors.interactive};
  border-radius: 50%;

  ${RadioInput}:checked ~ ${RadioLabel} & {
    transform: scale(1);
  }
`;
