import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routing from 'routes/Routing'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routing />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
