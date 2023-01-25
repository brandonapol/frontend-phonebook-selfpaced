// This component will be used for router level logic

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { store } from './redux/store'
import routes from './config/routes'
import AuthChecker from './auth/authChecker'

function App() {
  //! put about and dashboard inside gate
  // TODO create login page and routing

  return (
    <BrowserRouter>
      <Navbar/>
      <Provider store={store}>
        <Routes>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
