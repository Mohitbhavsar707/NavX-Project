import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="main-header">
        <h1>NavX Software Manager</h1>
      </div>
      <div className="Hello">
        <a href="https://www.studica.com/" target="_blank" rel="noreferrer">
          <button type="button">Open Device Manager</button>
        </a>
        <a
          href="https://github.com/Studica-Robotics/DeviceSoftware"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">More Info about device</button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
