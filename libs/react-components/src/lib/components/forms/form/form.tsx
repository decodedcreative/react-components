import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './form.styles';
import { FormSection } from './form-section/form-section';
import { FormItem } from './form-item/form-item';

export interface FormProps
  extends Omit<ComponentPropsWithoutRef<'form'>, 'className'> {
  children: ReactNode;
}

export const Form = ({ children, ...args }: FormProps) => (
  <S.Form>{children}</S.Form>
);

Form.Section = FormSection;
Form.Item = FormItem;
