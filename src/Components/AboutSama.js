import { useState } from 'react';
import '../index.css';

function AboutSama(props) {
    const [casesSettled, setCasesSettled] = useState(false);
    return (
        <div className={`panel ${props.act ? "active" : ""}`}  onClick={() => props.click(casesSettled)}>
            <div className='row'>
            {!props.act && (<div className='col-sm-1 side3 sides'>
                    <p className="sidetext" style={{marginTop: '72vh'}} >WHAT DOES SAMA DO?</p>
                </div>)}
                {props.act  && (<>
                    <div className='sides' style={{backgroundColor: '#404040', flex: '0 0 auto', width: '4.55%'}}>
                    <p className="sidetext" style={{marginLeft: '18%', marginTop: '71.3vh'}} >WHAT DOES SAMA DO?</p>
                </div>
                <div className='fill' style={{flex: '0 0 auto', width: '95.45%', backgroundColor: '#737373'}}>
                    <p className="header">SAMA</p>
                    <p className="stats">25,10,500+</p>
                </div> 
                </>
                    )}
            </div>
        </div>
    )
}

export default AboutSama;