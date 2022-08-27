import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/lib/themes';

const withPalette = (StoryFn, context) => {
  const palette = context.parameters.backgrounds.default;
  const storyPalette = palette === 'Light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={storyPalette}>
      <StoryFn />
    </ThemeProvider>
  );
};

// const withTheme = (StoryFn, context) => {
//   const theme = context.parameters;
//   const storyTheme = theme === 'theme1' ? theme1 : theme2;
// }

export const decorators = [withPalette];
