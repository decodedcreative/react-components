import { ReactNode } from 'react';
import * as S from '../form.styles';

export interface FormSectionProps {
  children: ReactNode;
  head?: ReactNode;
}

export const FormSection = ({ children, ...args }: FormSectionProps) => {
  const { head } = args;
  return (
    <S.FormSection>
      {head ? <S.FormHead>{head}</S.FormHead> : null}
      <S.FormBody>{children}</S.FormBody>
    </S.FormSection>
  );
};
