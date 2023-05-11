import Navbar from './components/navbar';
import Footer from './components/footer';
import Menu from './pages/menu';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import DrinkInfo from './pages/drinkInfo';
import OrderPlaced from './components/orderPlaced';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './app.css';

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
