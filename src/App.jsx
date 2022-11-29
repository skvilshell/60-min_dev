import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Builds from './components/Builds'
import Footer from './components/Footer'
import Header from './components/Header'
import NotFound from './pages/404/NotFound'
import Catalog from './pages/Catalog/Catalog'
import Main from './pages/Main/Main'

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/b' element={<Builds />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
