import { useState } from 'react';
import '../index.css';

function AboutSama(props) {
    const [casesSettled] = useState(false);
    return (
        <div className={`panel ${props.act ? "active" : ""}`}  onClick={() => props.click(casesSettled)}>
            <div className='row'>
            {!props.act && (<div className='col-sm-1 side3 sides'>
                    <p className="sidetext" style={{animation: 'fadeIn 0.65s'}} >WHAT DOES SAMA DO?</p>
                </div>)}
                {props.act  && (<>
                    <div className='sides' style={{backgroundColor: '#404040', width: '4.55%'}}>
                    <p className="sidetext" >WHAT DOES SAMA DO?</p>
                </div>
                <div className='fill' style={{width: '95.45%', backgroundColor: '#404040'}}>
                    <p className="header" style={{animation: 'fadeIn 1.05s', color: '#f2f2f2'}}>SAMA</p>
                    <p className="stats" style={{animation: 'fadeIn 1.05s', color: '#f2f2f2'}}>25,10,500+</p>
                </div> 
                </>
                    )}
            </div>
        </div>
    )
}

export default AboutSama;