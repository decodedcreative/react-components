import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { Checkbox, CheckboxProps } from './checkbox';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const WithTheme = ({ label, ...props }: CheckboxProps) => (
  <ThemeProvider theme={lightTheme}>
    <Checkbox label={label} {...props} />
  </ThemeProvider>
);

const createComponentJSX = ({ label, ...props }: CheckboxProps) => (
  <WithTheme label={label} {...props} />
);
const createComponentRender = ({ label, ...props }: CheckboxProps) =>
  render(<WithTheme label={label} {...props} />);

describe('Checkbox', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as CheckboxProps);
    expect(component).toBeTruthy();
  });

  it('should match the default snapshot', () => {
    const defaultCheckbox = createComponentJSX({} as CheckboxProps);
    const defaultCheckboxJSON = renderer.create(defaultCheckbox).toJSON();
    expect(defaultCheckboxJSON).toMatchSnapshot();
  });

  describe('Checkbox - States', () => {
    describe('Checkbox - States - Error', () => {
      it('should have an aria-invalid attribute on its input if in an error state', () => {
        const component = createComponentRender({
          label: 'Checkbox label',
          'aria-invalid': true,
          'data-testid': 'checkbox-input',
        } as CheckboxProps);
        const input = component.getByTestId('checkbox-input');
        expect(input).toHaveAttribute('aria-invalid');
      });
      it('should match the Checkbox With Error snapshot', () => {
        const errorCheckbox = createComponentJSX({
          'aria-invalid': true,
        } as CheckboxProps);
        const errorCheckboxJSON = renderer.create(errorCheckbox).toJSON();
        expect(errorCheckboxJSON).toMatchSnapshot();
      });
    });
    describe('Checkbox - States - Disabled', () => {
      it('should disable its input if a disabled prop is supplied', () => {
        const component = createComponentRender({
          label: 'Checkbox label',
          disabled: true,
          'data-testid': 'checkbox-input',
        } as CheckboxProps);
        const input = component.getByTestId('checkbox-input');
        expect(input).toBeDisabled();
      });
      it('should match the Disabled Checkbox snapshot', () => {
        const disabledCheckbox = createComponentJSX({
          disabled: true,
        } as CheckboxProps);
        const disabledCheckboxJSON = renderer.create(disabledCheckbox).toJSON();
        expect(disabledCheckboxJSON).toMatchSnapshot();
      });
    });
  });

  it('should display its label', () => {
    const component = createComponentRender({
      label: 'Checkbox label 2',
    } as CheckboxProps);
    expect(component.getByText('Checkbox label 2')).toBeTruthy();
  });
});
