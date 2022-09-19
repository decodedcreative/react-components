import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './control.styles';

export interface ControlProps {
  children: ReactNode;
}

export interface ControlInputProps extends ComponentPropsWithoutRef<'input'> {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export interface ControlLabelProps {
  children: ReactNode;
  icon?: string;
}

export const Control = ({ children }: ControlProps) => (
  <S.Control>{children}</S.Control>
);

const Input = ({ id, name, type }: ControlInputProps) => (
  <S.ControlInput id={id} name={name} type={type} />
);

const Label = ({ children, icon }: ControlLabelProps) => (
  <S.ControlLabel>
    <S.ControlBackground>
      <S.ControlIndicator>
        {icon ? <S.CheckIcon size="24" /> : null}
      </S.ControlIndicator>
    </S.ControlBackground>
    <S.ControlText>{children}</S.ControlText>
  </S.ControlLabel>
);

Control.Input = Input;
Control.Label = Label;
