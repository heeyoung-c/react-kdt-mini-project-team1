import { ThemeProvider } from 'styled-components';
import AppRouter from './routes/AppRouter';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import TheHeader from './components/layout/TheHeader';
import TheFooter from './components/layout/TheFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
// 화살표 함수
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TheHeader />
      <AppRouter />
      <TheFooter />
    </ThemeProvider>
  );
};

export default App;
