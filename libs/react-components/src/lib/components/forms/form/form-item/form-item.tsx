import { ReactNode } from 'react';
import * as S from './form-item.styles';

export interface FormItemProps {
  children: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  layout?: 'inline' | 'inline-md-up';
}

export const FormItem = ({ layout, ...args }: FormItemProps) => {
  const contentProps = { layout };
  const { children, label, description, error } = args;
  return (
    <S.FormItem {...args}>
      <S.FormItemLabel>{label}</S.FormItemLabel>
      {description ? (
        <S.FormItemDescription>{description}</S.FormItemDescription>
      ) : null}
      <S.FormItemContent {...contentProps}>{children}</S.FormItemContent>
      {error ? <S.FormItemMessage>{error}</S.FormItemMessage> : null}
    </S.FormItem>
  );
};
