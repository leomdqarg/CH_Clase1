import NavBar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/ItemCount/ItemCount.js'
import './App.css'
import 'bootstrap'
function App() {
  const handleOnAdd = () => console.log('se agrego al carrito')
  return (
    <div id="App">
      <NavBar />
      <ItemListContainer greetings={`próximamente listado de los productos`} />
      <ItemCount initial={2} stock={5} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
