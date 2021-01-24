import React from 'react'

class KomponentWarunkowy extends React.Component {
    constructor(props) {
      super(props);
      this.state = { flag: true }
    }
    componentDidMount(){
        console.log('Komponent zostal zamontowany')
    }
    componentWillUnmount(){
        console.log('Komponent zaraz zniknie')
    }
    render() { 
      return (<div>To jest komponent warunkowy </div>);
      
    }
  }
  
  export default KomponentWarunkowy