import { NewsProvider } from './providers/NewsContext'
import { RouterMain } from './routers/RouterMain'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {

  return (
    <>
      <GlobalStyle />
      <NewsProvider>
        <RouterMain />
      </NewsProvider>
    </>
  )
}

export default App
