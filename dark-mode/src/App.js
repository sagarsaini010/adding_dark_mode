import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
   <Navbar title ="Dark Mode" about ="About Us "/>
   <div className="container my-4">
    <About/>
   </div>
   </>
  );
}

export default App;
