import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes';
import { Section, SectionProps } from './section';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const createComponentJSX = ({
  children = 'Section text here',
  as,
}: SectionProps) => (
  <ThemeProvider theme={lightTheme}>
    <Section as={as}>{children}</Section>
  </ThemeProvider>
);

const createComponentRender = ({
  children = 'Section text here',
  as,
}: SectionProps) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Section as={as}>{children}</Section>
    </ThemeProvider>
  );

describe('Section', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as SectionProps);
    expect(component).toBeTruthy();
  });

  describe('Section - Variants', () => {
    it('should match the primary section snapshot', () => {
      const primarySection = createComponentJSX({} as SectionProps);
      const primarySectionJSON = renderer.create(primarySection).toJSON();
      expect(primarySectionJSON).toMatchSnapshot();
    });
    it('should match the secondary section snapshot', () => {
      const secondarySection = createComponentJSX({
        variant: 'secondary',
      } as SectionProps);
      const secondarySectionJSON = renderer.create(secondarySection).toJSON();
      expect(secondarySectionJSON).toMatchSnapshot();
    });
  });
});
