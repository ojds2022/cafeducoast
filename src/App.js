import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Departments from './pages/Departments';
import About from './pages/About';
import Contact from './pages/Contact';
import Add from './pages/Add';
import DepartmentInfo from './components/DepartmentInfo';
import TeamInfo from './components/TeamInfo';
import EmployeeList from './pages/EmployeeList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/departments" element={<Departments />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/departments/:id" element={<DepartmentInfo />}/>
          <Route path="/teams/:id" element={<TeamInfo />}/>
          <Route path="/employees" element={<EmployeeList />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
