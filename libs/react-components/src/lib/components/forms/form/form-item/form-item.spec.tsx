import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { FormItem, FormItemProps } from './form-item';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const createComponentJSX = ({}: FormItemProps) => (
  <ThemeProvider theme={lightTheme}>
    <FormItem label="test">
      <p>Form content here</p>
    </FormItem>
  </ThemeProvider>
);

const createComponentRender = ({}: FormItemProps) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <FormItem label="test">
        <p>Form content here</p>
      </FormItem>
    </ThemeProvider>
  );

describe('Form Item', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as FormItemProps);
    expect(component).toBeTruthy();
  });
});
