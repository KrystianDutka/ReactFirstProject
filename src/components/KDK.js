//2.3. Wyświetlanie komponentów warunkowo (np. można w kodzie umieścić zmienną sterującą, zależnie od której wyświetla odpowiednie komponenty) 
//3.2 klasa dziedziczaca po innej klasie
// 3.3 Oprogramować cykl życia dla wybranego komponentu
// So What About Inheritance?
// At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
// Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
// If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.
import React from 'react';
import CKomponentwarunkowy from './CKomponentwarunkowy'

export class KlasowyKomponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: true }
  }
  render() { 
    return (null);
  }
}
 
// export KlasowyKomponent1;

class KlasowyKomponent2 extends KlasowyKomponent1 {
    constructor(props) {
      super(props);
      this.state = { flag: true }
  
}
 handleshowcomponent=()=>{
    this.setState(prevState =>{
        return{
             flag : !prevState.flag
        }
     })   
  }
    render() { 
      return (  <div>
        <button onClick={this.handleshowcomponent}>Kliknij mnie zeby pokaz/zamknac komponent</button>
        { this.state.flag && <CKomponentwarunkowy/>}
    </div>);
    
    }
  }


   
  export default KlasowyKomponent2;