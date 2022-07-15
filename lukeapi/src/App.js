import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Routes >
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard /> }/>
      </Routes>
    </fieldset>
  );
}

export default App;
