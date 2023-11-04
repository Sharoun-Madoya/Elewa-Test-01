// Renders invest / social impact and about pages
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invest from './components/sections/Invest'
import About from './components/sections/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Invest />} />
          <Route path="/social-impact" element={<SocialImpact />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
