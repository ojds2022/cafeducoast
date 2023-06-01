import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DrinkInfo from './pages/drinkInfo';
import OrderPlaced from './components/orderPlaced';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/menu/:id" element={<DrinkInfo />}/>
          <Route path="/order/:id" element={<OrderPlaced />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
