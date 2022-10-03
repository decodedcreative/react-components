import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { TextField, TextFieldProps } from './textfield';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const WithTheme = ({ ...props }) => (
  <ThemeProvider theme={lightTheme}>
    <TextField {...props} />
  </ThemeProvider>
);

const createComponentJSX = ({ ...props }: TextFieldProps) => (
  <WithTheme {...props} />
);
const createComponentRender = ({ ...props }: TextFieldProps) =>
  render(<WithTheme {...props} />);

describe('Textfield', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as TextFieldProps);
    expect(component).toBeTruthy();
  });

  it('should match the default snapshot', () => {
    const defaultTextField = createComponentJSX({} as TextFieldProps);
    const defaultTextFieldJSON = renderer.create(defaultTextField).toJSON();
    expect(defaultTextFieldJSON).toMatchSnapshot();
  });

  describe('TextField - States', () => {
    describe('TextField - States - Error', () => {
      it('should have an aria-invalid attribute on its input if in an error state', () => {
        const component = createComponentRender({
          'aria-invalid': true,
          'data-testid': 'textfield-input',
        } as TextFieldProps);
        const input = component.getByTestId('textfield-input');
        expect(input).toHaveAttribute('aria-invalid');
      });
      it('should match the TextField With Error snapshot', () => {
        const errorTextField = createComponentJSX({
          'aria-invalid': true,
        } as TextFieldProps);
        const errorTextFieldJSON = renderer.create(errorTextField).toJSON();
        expect(errorTextFieldJSON).toMatchSnapshot();
      });
    });
    describe('TextField - States - Disabled', () => {
      it('should disable its input if a disabled prop is supplied', () => {
        const component = createComponentRender({
          disabled: true,
          'data-testid': 'textfield-input',
        } as TextFieldProps);
        const input = component.getByTestId('textfield-input');
        expect(input).toBeDisabled();
      });
      it('should match the Disabled TextField snapshot', () => {
        const disabledTextField = createComponentJSX({
          disabled: true,
        } as TextFieldProps);
        const disabledTextFieldJSON = renderer
          .create(disabledTextField)
          .toJSON();
        expect(disabledTextFieldJSON).toMatchSnapshot();
      });
    });
  });
});
