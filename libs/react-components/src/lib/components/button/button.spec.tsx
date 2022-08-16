import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme/';
import Button, { ButtonProps } from './button';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const createComponentJSX = ({
  children = 'Button text',
  variant,
  disabled,
  type = 'button',
}: ButtonProps) => (
  <ThemeProvider theme={lightTheme}>
    <Button variant={variant} type={type} disabled={disabled}>
      {children}
    </Button>
  </ThemeProvider>
);

const createComponentRender = ({
  children = 'Button text',
  variant,
  disabled,
  type = 'button',
}: ButtonProps) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Button variant={variant} type={type} disabled={disabled}>
        {children}
      </Button>
    </ThemeProvider>
  );

describe('Button', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as ButtonProps);
    expect(component).toBeTruthy();
  });

  describe('Button - Variants', () => {
    it('should match the secondary button snapshot', () => {
      const secondaryButton = createComponentJSX({} as ButtonProps);
      const secondaryButtonJSON = renderer.create(secondaryButton).toJSON();
      expect(secondaryButtonJSON).toMatchSnapshot();
    });
    it('should match the primary button snapshot', () => {
      const primaryButton = createComponentJSX({
        variant: 'primary',
      } as ButtonProps);
      const primaryButtonJSON = renderer.create(primaryButton).toJSON();
      expect(primaryButtonJSON).toMatchSnapshot();
    });
  });

  describe('Button - Disabled', () => {
    it('should become disabled if a disabled prop is supplied', () => {
      const component = createComponentRender({
        children: 'Disabled button',
        disabled: true,
      } as ButtonProps);
      const button = component.getByText(/Disabled button/i);
      expect(button).toHaveAttribute('disabled');
    });
    it('should match the disabled button snapshot', () => {
      const disabledButton = createComponentJSX({
        children: 'Disabled button',
        disabled: true,
      } as ButtonProps);
      const disabledButtonJSON = renderer.create(disabledButton).toJSON();
      expect(disabledButtonJSON).toMatchSnapshot();
    });
  });
});
