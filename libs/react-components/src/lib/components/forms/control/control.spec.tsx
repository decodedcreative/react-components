import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes';
import { Control, ControlProps } from './control';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const WithTheme = () => (
  <ThemeProvider theme={lightTheme}>
    <Control>
      <p>Form content here</p>
    </Control>
  </ThemeProvider>
);

const createComponentJSX = ({}: ControlProps) => <WithTheme />;
const createComponentRender = ({}: ControlProps) => render(<WithTheme />);

describe('Control', () => {
  it('should render successfully', () => {
    const component = createComponentRender({} as ControlProps);
    expect(component).toBeTruthy();
  });
});
