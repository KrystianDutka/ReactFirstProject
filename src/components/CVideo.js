import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './CVideo.css'

class Video extends Component {
    render () {
        return (
            <div className='movie'>
                <ReactPlayer controls url='https://www.youtube.com/watch?v=JeHUHuIRXHo&t=3s'/>
            <br/> 
            <br/>
            </div>
           
        )
    }
}

export default Video