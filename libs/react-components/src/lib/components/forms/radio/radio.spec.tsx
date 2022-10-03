import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { Radio, RadioProps } from './radio';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const WithTheme = ({ label = 'Radio label', ...props }: RadioProps) => (
  <ThemeProvider theme={lightTheme}>
    <Radio label={label} {...props} />
  </ThemeProvider>
);

const createComponentJSX = ({ label, ...props }: RadioProps) => (
  <WithTheme label={label} {...props} />
);
const createComponentRender = ({ label, ...props }: RadioProps) =>
  render(<WithTheme label={label} {...props} />);

describe('Radio', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as RadioProps);
    expect(component).toBeTruthy();
  });

  it('should match the default snapshot', () => {
    const defaultRadio = createComponentJSX({} as RadioProps);
    const defaultRadioJSON = renderer.create(defaultRadio).toJSON();
    expect(defaultRadioJSON).toMatchSnapshot();
  });

  describe('Radio - States', () => {
    describe('Radio - States - Error', () => {
      it('should have an aria-invalid attribute on its input if in an error state', () => {
        const component = createComponentRender({
          label: 'Radio label',
          'aria-invalid': true,
          'data-testid': 'radio-input',
        } as RadioProps);
        const input = component.getByTestId('radio-input');
        expect(input).toHaveAttribute('aria-invalid');
      });
      it('should match the Radio With Error snapshot', () => {
        const errorRadio = createComponentJSX({
          'aria-invalid': true,
        } as RadioProps);
        const errorRadioJSON = renderer.create(errorRadio).toJSON();
        expect(errorRadioJSON).toMatchSnapshot();
      });
    });
    describe('Radio - States - Disabled', () => {
      it('should disable its input if a disabled prop is supplied', () => {
        const component = createComponentRender({
          label: 'Radio label',
          disabled: true,
          'data-testid': 'radio-input',
        } as RadioProps);
        const input = component.getByTestId('radio-input');
        expect(input).toBeDisabled();
      });
      it('should match the Disabled Radio snapshot', () => {
        const disabledRadio = createComponentJSX({
          disabled: true,
        } as RadioProps);
        const disabledRadioJSON = renderer.create(disabledRadio).toJSON();
        expect(disabledRadioJSON).toMatchSnapshot();
      });
    });
  });

  it('should display its label', () => {
    const component = createComponentRender({
      label: 'Radio label 2',
    } as RadioProps);
    expect(component.getByText('Radio label 2')).toBeTruthy();
  });
});
