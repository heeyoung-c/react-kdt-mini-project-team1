import { ThemeProvider } from 'styled-components'
import AppRouter from './routes/AppRouter'
import GlobalStyle from './styles/globalStyle'
import theme from './styles/theme'

import TheFooter from './components/TheFooter'

// 화살표 함수
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
      <TheFooter />
    </ThemeProvider>
  )
}

export default App
