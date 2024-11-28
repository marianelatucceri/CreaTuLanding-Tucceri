import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App () {
  return (
    <>
     <Navbar />
     <ItemListContainer text='Hola Mundo, ¡pronto veremos el catálogo de productos!' />
    </>
  )
}

export default App
