import {BrowserRouter, Route} from 'react-router-dom'

import CryptocurrencyTracker from './components/CryptocurrencyTracker'

import './App.css'

const App = () => {
  ;<BrowserRouter>
    <Route exact component={CryptocurrencyTracker} />
  </BrowserRouter>
}

export default App
