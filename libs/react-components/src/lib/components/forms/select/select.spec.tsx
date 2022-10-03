import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { Select, SelectProps } from './select';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const WithTheme = ({ ...props }) => (
  <ThemeProvider theme={lightTheme}>
    <Select {...props}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  </ThemeProvider>
);

const createComponentJSX = ({ ...props }: SelectProps) => (
  <WithTheme {...props} />
);
const createComponentRender = ({ ...props }: SelectProps) =>
  render(<WithTheme {...props} />);

describe('Select', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as SelectProps);
    expect(component).toBeTruthy();
  });

  it('should match the default snapshot', () => {
    const defaultSelect = createComponentJSX({} as SelectProps);
    const defaultSelectJSON = renderer.create(defaultSelect).toJSON();
    expect(defaultSelectJSON).toMatchSnapshot();
  });

  describe('Select - States', () => {
    describe('Select - States - Error', () => {
      it('should have an aria-invalid attribute on its input if in an error state', () => {
        const component = createComponentRender({
          'aria-invalid': true,
          'data-testid': 'select-input',
        } as SelectProps);
        const input = component.getByTestId('select-input');
        expect(input).toHaveAttribute('aria-invalid');
      });
      it('should match the Select With Error snapshot', () => {
        const errorSelect = createComponentJSX({
          'aria-invalid': true,
        } as SelectProps);
        const errorSelectJSON = renderer.create(errorSelect).toJSON();
        expect(errorSelectJSON).toMatchSnapshot();
      });
    });
    describe('Select - States - Disabled', () => {
      it('should disable its input if a disabled prop is supplied', () => {
        const component = createComponentRender({
          disabled: true,
          'data-testid': 'select-input',
        } as SelectProps);
        const input = component.getByTestId('select-input');
        expect(input).toBeDisabled();
      });
      it('should match the Disabled Select snapshot', () => {
        const disabledSelect = createComponentJSX({
          disabled: true,
        } as SelectProps);
        const disabledSelectJSON = renderer.create(disabledSelect).toJSON();
        expect(disabledSelectJSON).toMatchSnapshot();
      });
    });
  });
});
