import { Routes,Route } from 'react-router-dom'
import './App.css'
import Landing from './Pages/landing'
import './bootstrap.min.css'
import Home from './Pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App