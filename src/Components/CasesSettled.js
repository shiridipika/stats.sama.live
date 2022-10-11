
import { useState } from 'react';
import '../index.css';

function CasesSettled(props) {

    const [casesSettled, setCasesSettled] = useState(false);

    
    return (
        <div className={`panel ${props.act ? "active" : ""}`}  onClick={() => props.click(casesSettled)}>
            <div className='row'>
            {!props.act && (<div className='col-sm-1 side2 sides'>
            <p className="sidetext" style={{marginTop: '78.6vh'}}>CASES SETTLED</p>
                </div>)}
            {/* <div className='col-sm-1 side2 sides'>
                    <p className="sidetext" >CASES SETTLED</p>
                </div> */}
                {console.log(props.act)}
                {props.act  && (<>
                    <div className='sides' style={{backgroundColor: '#737373', color: '#f2f2f2', flex: '0 0 auto', width: '4.55%'}}>
                    <p className="sidetext" style={{marginTop: '78.7vh'}}>CASES SETTLED</p>
                </div>
                    <div className='fill' style={{flex: '0 0 auto', width: '95.45%', backgroundColor: '#e5e5e5'}}>
                    <p className="header">CASES SETTLED</p>
                    <p className="stats">25,10,500+</p>
                </div> 
                </>)}
                {/* <div className='col-sm-11 fill'>
                    <p className="header">CASES SETTLED</p>
                    <p className="stats">25,10,500+</p>
                </div> */}
                
            </div>
        </div>
        )
    
}

export default CasesSettled;