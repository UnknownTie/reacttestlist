import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/Haeder';
import Nav from './components/common/nav/NavSide';
import BtcAPI from './components/common/main/contents/BtcAPI'
import TestAjax from './components/common/main/contents/TestAjax'
import { Router , Routes, Route , Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="header"> <Header/></header>
      
      <main className="main">
        <div className="nav"> <Nav/> </div>
        <div className="nav">
        <Routes>
          <Route path="/BtcAPI" element={<BtcAPI />} />
          <Route path="/TestAjax" element={<TestAjax />} />
        </Routes> 
        </div>
        
      </main>
    </div>
  );
}

export default App;
