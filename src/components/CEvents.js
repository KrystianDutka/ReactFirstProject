import React from 'react';
import './CEvents.css';

const handleClick = () => {
    console.log('1')
  }

const doubleClick = () => {
    console.log('2')
  }

const CaputreClick = () => {
    console.log('3')
 } 

 const AuxClick = () => {
    console.log('4')
 } 

 const DoubleCaptureClick = () => {
    console.log('5')
 } 

 const AuxCaptureClick = () => {
    console.log('6')
 }

 const MouseMove = () => {
    console.log('7')
 }

 const MouseDown = () => {
    console.log('8')
 }
 
 const MouseEnter = () => {
    console.log('9')
 }

 const MouseLeave = () => {
    console.log('10')
 }

 const MouseOut = () => {
    console.log('11')
 }

 const MouseOver = () => {
    console.log('12')
 }

 const MouseUp = () => {
    console.log('13')
 }

 const Focaus = () => {
    console.log('14')
 }

const Events = () => {
  return ( 
     <nav>
       <div className="Events">
            <div> <h1>Events</h1> </div>
      <ul>
    <li>    
      <button onClick={handleClick}>Zdarzenie1 kliknij mnie</button> 
    </li>  <br/>
    <li>  
      <button onDoubleClick={doubleClick}>Zdarzenie2 kliknij mnie dwa razy</button>
    </li> <br/>
    <li>    
      <button onClickCapture={CaputreClick}>Zdarzenie3 kliknij mnie lewym przyciskiem myszy</button>
    </li> <br/>
    <li>    
      <button onAuxClick={AuxClick}>Zdarzenie 4 kliknij mnie prawym przyciskiem myszy</button>
    </li> <br/>
    <li>      
      <button onDoubleClickCapture={DoubleCaptureClick}>Zdarzenie 5 kliknij mnie dwa razy prawym przyciskiem myszy</button>
    </li> <br/>
    <li>    
      <button onAuxClickCapture={AuxCaptureClick}>Zdarzenie 6 kliknij mnie prawym lub lewym przyciskiem myszy</button>
    </li> <br/>
    <li>    
      <button onMouseMove={MouseMove}>Zdarzenie7 najedz myszka na przycisk</button>
    </li> <br/>
    <li>    
      <button onMouseDown={MouseDown}>Zdarzenie8 Zdarzenie występuje, gdy użytkownik naciśnie przycisk myszy nad elementem</button>
    </li> <br/> 
    <li>  
      <button onMouseEnter={MouseEnter}>Zdarzenie9 Zdarzenie występuje, gdy wskaźnik zostanie przeniesiony na element </button>
    </li> <br/>   
    <li>  
      <button onMouseLeave={MouseLeave}>Zdarzenie10 Zdarzenie występuje, gdy wskaźnik zostanie przeniesiony poza element</button>
    </li> <br/>  
    <li>  
      <button onMouseOut={MouseOut}>Zdarzenie11 Zdarzenie występuje, gdy użytkownik przesunie wskaźnik myszy poza element lub jedno z jego elementów podrzędnych</button>
    </li> <br/>
    <li>  
      <button onMouseOver={MouseOver}>Zdarzenie12 Zdarzenie występuje, gdy wskaźnik zostanie przeniesiony na element lub na jedno z jego elementów podrzędnych</button>
    </li> <br/>
    <li>  
      <button onMouseUp={MouseUp}>Zdarzenie13 Zdarzenie występuje, gdy użytkownik zwolni przycisk myszy nad elementem</button>
    </li> <br/>
    <li>  
      <button onFocus={Focaus}>Zdarzenie14 Zdarzenie występuje, gdy element staje się aktywny</button>
    </li> <br/>
   
    
    
    </ul>
    </div>
    </nav>
    
   );
}
 
export default Events;

