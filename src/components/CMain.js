import React from 'react';
import Text from '../res/text.json';
import ImgL1 from '../res/photo1.jpg';
import ImgM1 from '../res/photo2.png';
import ImgS1 from '../res/photo3.png';
import ImgL2 from '../res/photo4.jpg';
import ImgM2 from '../res/photo5.jpg';
import ImgS2 from '../res/photo6.jpg'
import './CMain.css'



export const Main = () => {
    return (
        <div>
            <hr/>
            <br/>
            <br/>
            <h2>Moj ulubiony pięściarz</h2>
            <br/>
            <br/>
        <p>
            <picture>
            <source
                className='position'
                srcset={ImgS1}
                type="image/jpg"
                media="all and (max-width:600px)"
            />
            <source
                className='position'
                srcset={ImgM1}
                type="image/jpg"
                media="all and (min-width:601px) and (max-width:1200px)"
            />
            <source
                className='position'
                srcset={ImgL1}
                type="image/jpg"
                media="all and (min-width:1201px)"
            />
            <img src={ImgM1} alt="boks" />
            </picture>
    </p>
    
        {Text.map((Detail, index) => {
            return <h4 className='textoption'>{Detail.text1}</h4>
        })}
        <br/>
        <p>
        <h2>Ostania walka</h2>
            <picture>
            <source
                className='position'
                srcset={ImgS2}
                type="image/jpg"
                media="all and (max-width:600px)"
            />
            <source
                className='position'
                srcset={ImgM2}
                type="image/jpg"
                media="all and (min-width:601px) and (max-width:1200px)"
            />
            <source
                className='position'
                srcset={ImgL2}
                type="image/jpg"
                media="all and (min-width:1201px)"
            />
            <img src={ImgM2} alt="boks" />
            </picture>
    </p>
        {Text.map((Detail, index) => {
            return <h4 className='textoption'>{Detail.text2}</h4>
        })}
        <hr/>
        <br/>
        <br/>

        

        
        </div>
    )
       
}

export default Main