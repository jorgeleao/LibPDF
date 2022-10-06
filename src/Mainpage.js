import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { version } from 'react';
import About from './about.js';
import Search from './search.js';
import Logout from './logout.js';
import Menubar from './menubar.js'
import Cataloging from './cataloging.js';
import './Mainpage.css';
import './i18n.js';


export default function Mainpage() {
  //console.log("=== React version: "+version);

  return (
    <div>
      <div className="mainpage_cardboard"></div>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route exact path="/" element={<Search />}></Route>
          <Route path="/catalog" element={<Cataloging />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

