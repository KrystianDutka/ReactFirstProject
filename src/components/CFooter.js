import React, {Component} from 'react';
import './CFooter.css'

class CFooter extends Component {
    render () {
        return (
            <div>
                <h5 className='fonts'>
                    Strona internetowa stworzona przez {this.props.name} {this.props.surname}
                </h5>
            </div>    
        );  
    }
}

export default CFooter