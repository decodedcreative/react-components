import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes';
import { Typography, TypographyProps } from './typography';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const createComponentJSX = ({
  children = 'Some text here',
  ...args
}: TypographyProps) => (
  <ThemeProvider theme={lightTheme}>
    <Typography {...args}>{children}</Typography>
  </ThemeProvider>
);

const createComponentRender = ({
  children = 'Some text',
  ...args
}: TypographyProps) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Typography {...args}>{children}</Typography>
    </ThemeProvider>
  );

describe('Typography', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as TypographyProps);
    expect(component).toBeTruthy();
  });

  describe('Typography - Sizes', () => {
    let sizes = Object.entries(lightTheme.typography.sizes);

    it.each(sizes)('should render typography in %s size', (key, value) => {
      const typographySize = createComponentJSX({
        size: key !== 'default' ? key : null,
      } as TypographyProps);
      const typographyJSON = renderer.create(typographySize).toJSON();
      expect(typographyJSON).toHaveStyleRule('font-size', value);
    });
  });

  describe('Typography - Weights', () => {
    let weights = Object.entries(lightTheme.typography.weights);

    it.each(weights)('should render typography in %s weight', (key, value) => {
      const typographySize = createComponentJSX({
        weight: key !== 'default' ? key : null,
      } as TypographyProps);
      const typographyJSON = renderer.create(typographySize).toJSON();
      expect(typographyJSON).toHaveStyleRule('font-weight', value);
    });
  });
});
