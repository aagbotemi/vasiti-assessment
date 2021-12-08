import Header from './components/header'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SecondHeader from './components/secondHeader';

function App() {
  return (
    <Router>
      <Header />
      <SecondHeader />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
