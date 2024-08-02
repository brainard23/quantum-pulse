import './App.css'
import AboutUs from './page/AboutUs';
import ContactUs from './page/ContactUs';
import Home from './page/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Add more routes as needed */}
      </Routes>
      </Router>
  )
}

export default App
