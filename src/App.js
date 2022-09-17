import NavBar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import Counter from './components/Counter/Counter.js'
import './App.css'
import 'bootstrap'
function App() {
  return (
    <div id="App">
      <NavBar />
      <ItemListContainer greetings={`Bienvenidos... próximamente listado de los productos`} />
      <Counter />
    </div>
  );
}

export default App;
