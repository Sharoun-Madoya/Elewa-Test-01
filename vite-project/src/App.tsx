
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invest from './components/sections/Invest'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/" element={<SocialInvest />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
