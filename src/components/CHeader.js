import React from 'react'
import Img from '../res/logo.png'
import './CHeader.css'

export const Header = (props) => {
    return (
        <div>
            <a href="/" ><img className='flex' src={Img} alt="LOGO"/></a>
            <hr/>
            <ul className='flex2'>
                <li className='flex3'>{props.info1}</li>
                <li className='flex3'>{props.info2}</li>
                <li className='flex3'>{props.info3}</li>
                <li className='flex3'>{props.info4}</li>
            </ul>
        </div>
        
    )

}

export default Header