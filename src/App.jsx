import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import NotFound from './pages/404/NotFound'
import Main from './pages/Main/Main'

function App() {


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
