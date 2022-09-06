import { ReactNode } from 'react';
import * as S from './form-item.styles';

export interface FormItemProps {
  children: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const FormItem = ({ ...args }: FormItemProps) => {
  const { children, label, description, error } = args;
  return (
    <S.FormItem {...args}>
      <S.FormItemLabel>{label}</S.FormItemLabel>
      {description ? (
        <S.FormItemDescription>{description}</S.FormItemDescription>
      ) : null}
      <S.FormItemContent>{children}</S.FormItemContent>
      {error ? <S.FormItemMessage>{error}</S.FormItemMessage> : null}
    </S.FormItem>
  );
};
