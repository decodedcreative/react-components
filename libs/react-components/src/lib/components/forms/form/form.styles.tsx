import styled from 'styled-components';
import { FormProps } from './form';

export const Form = styled('form')<FormProps>``;

export const FormSection = styled('section')`
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const FormHead = styled('div')`
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const FormBody = styled('div')`
  display: grid;
  row-gap: ${(props) => props.theme.spacing.xl};
`;
