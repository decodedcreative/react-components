import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import * as S from './select.styles';

export interface SelectInputProps extends ComponentPropsWithoutRef<'select'> {
  children: ReactNode;
}
export interface SelectProps {}

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & SelectInputProps
>(({ 'aria-invalid': ariaInvalid, children, required, ...props }, ref) => {
  const wrapperProps = {};

  const inputProps = {
    ...props,
  };

  return (
    <S.Select {...wrapperProps}>
      <S.SelectInput
        aria-invalid={ariaInvalid}
        aria-required={required}
        ref={ref}
        {...inputProps}
      >
        {children}
      </S.SelectInput>
      <S.SelectMedia>
        <S.SelectIcon />
      </S.SelectMedia>
    </S.Select>
  );
});
