// This component will be used for router level logic

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { AuthContext } from './contexts/AuthProvider'
import { store } from './redux/store'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
