import { ThemeProvider } from 'styled-components';
import AppRouter from './routes/AppRouter';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

import 'bootstrap/dist/css/bootstrap.min.css';
// 화살표 함수
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
