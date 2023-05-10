import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  return (
    <div className='container-portfolio'>
       <Header/>
       <Body/>   
       <Aside/>
       <Footer/>
    </div>
  )
}

export default App;
