import { ReactNode } from 'react';
import * as S from './section.styles';

export interface SectionProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

export interface SectionItemProps {
  children: ReactNode;
}

export const Section = ({ children, ...args }: SectionProps) => (
  <S.Section {...args}>
    <S.SectionContent>{children}</S.SectionContent>
  </S.Section>
);

const SectionItem = ({ children }: SectionItemProps) => (
  <S.SectionItem>
    <S.SectionItemContent>{children}</S.SectionItemContent>
  </S.SectionItem>
);

Section.Item = SectionItem;
