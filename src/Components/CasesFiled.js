import { useState } from 'react';
import '../index.css';

function CasesFiled(props) {
    const [casesSettled, setCasesSettled] = useState(false);
    return (
        <div className={`panel ${props.onemoreprop || props.act ? "active" : ""}`}  onClick={() => props.click(casesSettled)}>
            <div className='row'>
            {!props.act || !props.onemoreprop ? (<div className='col-sm-1 side1 sides'>
                    <p className="sidetext"  style={{color: '#000', marginTop: '81.5vh'}}>CASES FILED</p>
                </div>) : null}
                {props.onemoreprop || props.act  ? (<>
                    <div className='sides' style={{backgroundColor: '#D9D9D9', color:'#404040', flex: '0 0 auto', width: '4.55%'}}>
                    <p className="sidetext" style={{marginTop: '80.5vh'}} >CASES FILED</p>
                </div>
                <div className='fill' style={{flex: '0 0 auto', width: '95.45%', backgroundColor: '#F2F2F2'}}>
                    <p className="header">CASES FILED</p>
                    <p className="stats">1,10,10,500+</p>
                </div>
                </> ) : null}
            </div>
        </div>
    )
}

export default CasesFiled;