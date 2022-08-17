import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/lib/themes';

addDecorator(withThemesProvider([lightTheme, darkTheme], ThemeProvider));
