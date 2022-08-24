import { ThemeProvider } from 'styled-components';
import AppRouter from './routes/AppRouter';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import TheButton from './components/UI/TheButton';
import TheFooter from './components/layout/TheFooter';
import Card from './components/UI/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

// 화살표 함수
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card></Card>
      <TheButton></TheButton>
      <AppRouter />
      <TheFooter />
    </ThemeProvider>
  );
};

export default App;
