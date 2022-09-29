import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as S from './checkbox.styles';

export interface CheckboxInputProps extends ComponentPropsWithoutRef<'input'> {}

export interface CheckboxProps extends CheckboxInputProps {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    const wrapperProps = {
      label,
    };
    const inputProps = {
      ...props,
    };
    return (
      <S.Checkbox {...wrapperProps}>
        <S.CheckboxInput {...inputProps} ref={ref} />
        <S.CheckboxLabel>
          <S.CheckboxBackground>
            <S.CheckboxIndicator>
              <S.CheckboxIcon />
            </S.CheckboxIndicator>
          </S.CheckboxBackground>
          <S.CheckboxText>{label}</S.CheckboxText>
        </S.CheckboxLabel>
      </S.Checkbox>
    );
  }
);
