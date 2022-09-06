import styled from 'styled-components';
import { FormItemProps } from './form-item';

export const FormItem = styled('div')<FormItemProps>`
  display: grid;
  border: 0;
  margin: 0;
  padding: 0;
  row-gap: ${(props) => props.theme.spacing.sm};
`;

export const FormItemLabel = styled('label')`
  color: ${(props) => props.theme.colors.color70};
`;

export const FormItemDescription = styled('div')`
  margin-top: calc(${(props) => props.theme.spacing.sm * -1});
`;

export const FormItemMessage = styled('div')`
  margin-top: calc(${(props) => props.theme.spacing.xs * -1});
`;

export const FormItemContent = styled('div')`
  display: grid;
  gap: ${(props) => props.theme.spacing.md};
`;
