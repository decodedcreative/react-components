import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes';
import Link, { LinkProps } from './link';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const createComponentJSX = ({
  children = 'Button text',
  decoration = false,
  variant,
}: LinkProps) => (
  <ThemeProvider theme={lightTheme}>
    <Link decoration={decoration} variant={variant}>
      {children}
    </Link>
  </ThemeProvider>
);

const createComponentRender = ({
  children = 'Link text',
  variant,
  decoration,
}: LinkProps) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Link decoration={decoration} variant={variant}>
        {children}
      </Link>
    </ThemeProvider>
  );

describe('Link', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as LinkProps);
    expect(component).toBeTruthy();
  });
  describe('Link - Variants', () => {
    it('should match the secondary link snapshot', () => {
      const secondaryLink = createComponentJSX({} as LinkProps);
      const secondaryLinkJSON = renderer.create(secondaryLink).toJSON();
      expect(secondaryLinkJSON).toMatchSnapshot();
    });
    it('should match the inverse link snapshot', () => {
      const inverseLink = createComponentJSX({
        variant: 'inverse',
      } as LinkProps);
      const inverseLinkJSON = renderer.create(inverseLink).toJSON();
      expect(inverseLinkJSON).toMatchSnapshot();
    });
  });
  describe('Link - Options', () => {
    it('should match the link with no text decoration snapshot', () => {
      const noDecorationLink = createComponentJSX({
        decoration: false,
      } as LinkProps);
      const noDecorationLinkJSON = renderer.create(noDecorationLink).toJSON();
      expect(noDecorationLinkJSON).toMatchSnapshot();
    });
  });
});
