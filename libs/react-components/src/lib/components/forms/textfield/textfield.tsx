import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as S from './textfield.styles';

export interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  disabled?: boolean;
  wrapperProps?: ComponentPropsWithoutRef<'div'>;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      'aria-invalid': ariaInvalid,
      required,
      type = 'text',
      wrapperProps,
      ...props
    },
    ref
  ) => (
    <S.TextField {...wrapperProps}>
      <S.TextFieldInput
        aria-invalid={ariaInvalid}
        aria-required={required}
        ref={ref}
        type={type}
        {...props}
      />
    </S.TextField>
  )
);
