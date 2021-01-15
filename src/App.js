import React ,{useState} from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'

function App() {

  const [search , setSearch] = useState('')


  return (
    <div className="App">
     
      <Header search ={setSearch} />
     
      <Body search ={search}/>
      <Footer/>
    
    </div>
  );
}

export default App;
