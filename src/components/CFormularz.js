import React from 'react'

class BestBoxer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '*Nie dokonales wyboru*'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Według Ciebie najlepszy piesciarzem jest ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Wybierz najlepszego pięściarza wszechczasów:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Nie dokonales wyboru">Nie dokonales wyboru</option>
              <option value="Mike Tyson">Mike Tyson</option>
              <option value="Muhammad Ali">Muhammad Ali</option>
              <option value="Roberto Durán">Roberto Durán</option>
              <option value="Manny Pacquiao">Manny Pacquiao</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
// //   ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
//   );

export default BestBoxer
