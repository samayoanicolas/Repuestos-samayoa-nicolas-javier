
import './App.css';
import CardList from './components/Card/CardList';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

  

function App() {
  return (
    <div className="App">

       <NavBar />
       <h1>"Repuestos"</h1> 
       <div><CardList/></div> 
       <hr></hr>
       <ItemDetailContainer/>
   
      
    </div>
   
  )
}

export default App;
