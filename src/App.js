import React, {Component} from 'react';
import './App.css';
import CHeader from './components/CHeader.js';
import CMain from './components/CMain';
import CVideo from './components/CVideo.js';
import CEvents from './components/CEvents';
import CEvents2 from './components/CEvents2';
import CCWC from './components/CCWC.js';
import KDK from './components/KDK.js'
import CFormularz from './components/CFormularz.js'
import CFooter from './components/CFooter.js';


function App() {
return (
    <div className="App">
    <CHeader  info1="Strona główna" info2="Kategorie wagowe" info3="Historia boksu" info4="Mistrzowie" />
    <CMain/>  
    <CVideo/>
    <CEvents/>
    <CEvents2/>
    <CCWC/>
    <KDK/>
    <CFormularz/>
    <CFooter name="Krystiana" surname="Dutka"/> 
      </div>
    );
  }


export default App;
