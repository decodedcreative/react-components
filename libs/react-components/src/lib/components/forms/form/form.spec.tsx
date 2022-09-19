import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { Form, FormProps } from './form';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const WithTheme = () => (
  <ThemeProvider theme={lightTheme}>
    <Form>
      <p>Form content here</p>
    </Form>
  </ThemeProvider>
);

const createComponentJSX = ({}: FormProps) => <WithTheme />;
const createComponentRender = ({}: FormProps) => render(<WithTheme />);

describe('Form', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as FormProps);
    expect(component).toBeTruthy();
  });
});
