import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Home from './components/Home';
import DetailPage from './components/DetailPage';
import './App.css';
import "./style/landingpage.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SearchBar from './components/SearchBar';
import SearchPage from './components/SearchPages';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/detail" element={<DetailPage />} />
        {/* <Route path="/search" element={<SearchBar />} /> */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
