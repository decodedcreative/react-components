import styled from 'styled-components';
import { FormTextFieldProps } from './form-textfield';

export const FormTextField = styled('div')<FormTextFieldProps>`
  width: 100%;
`;

export const FormTextFieldInput = styled('input')`
  appearance: none;
  width: 100%;
  box-sizing: border-box;
  padding: 11px 16px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.default};
  line-height: ${(props) => props.theme.typography.lineHeight};
  border: ${(props) => props.theme.general.borderWidth} solid
    ${(props) => props.theme.components.forms.borderColor};
`;
