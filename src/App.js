import logo from './logo.svg';


import './App.css';
import { HashRouter, Switch } from "react-router-dom";
import { useEffect } from 'react';
import Create from './Components/Create';
import Home from './Components/Home';


import MembersList from './Components/MembersList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './Components/Edit';
import  Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <header>
        <h2>Members Dashboard</h2>
      </header>
      <section>
        <div className="container-fluid">
          <article>
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path='/about' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
              </Routes>
            </Router>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
