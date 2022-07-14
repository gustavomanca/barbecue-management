import { BrowserRouter } from 'react-router-dom'

import Layout from 'components/Layout'
import Contexts from 'contexts'
import Routing from 'routes/Routing'
import GlobalStyles from 'styles/global'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Contexts>
          <Layout>
            <GlobalStyles />
            <Routing />
          </Layout>
        </Contexts>
      </BrowserRouter>
    </div>
  )
}

export default App
