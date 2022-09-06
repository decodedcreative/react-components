import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {
  lightTheme,
  darkTheme,
} from '../../../../libs/react-components/src/lib/themes';
import NxWelcome from './nx-welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forms from './forms/forms';
import FormikForms from './forms/formik-forms';
import Home from './home/home';

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/," element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/forms/formik" element={<FormikForms />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
