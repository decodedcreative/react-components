import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { TextField, TextFieldProps } from './textfield';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const WithTheme = () => (
  <ThemeProvider theme={lightTheme}>
    <TextField />
  </ThemeProvider>
);

const createComponentJSX = ({}: TextFieldProps) => <WithTheme />;
const createComponentRender = ({}: TextFieldProps) => render(<WithTheme />);

describe('Form', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as TextFieldProps);
    expect(component).toBeTruthy();
  });
});
