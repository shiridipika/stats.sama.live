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
                    <p className="samaHeader" style={{animation: 'fadeIn 1.05s', color: '#f2f2f2'}}>WHAT DOES SAMA DO?</p>
                    <p className="samaParagraph" style={{animation: 'fadeIn 1.05s', color: '#f2f2f2'}}>If you have a legal problem today, can you be sure of getting timely justice?<br/><br/>
                        In a country where more than 4.5 crore cases are pending in the courts, timely justice can seem like a distant dream. Sama is a startup working towards alleviating this problem. <br/><br/>
                        With Sama, you can resolve your legal problems while sitting at home, through the internet! Our motto is Suljhao, Magar Pyaar Se, which means 'to resolve with compassion'. We practice empathy, prize efficiency and deeply value the power of collaboration.<br/><br/>
                        Another core value we hold dear is Transparency. By sharing with you live our case statistics, you can hold us accountable to be the best at resolving conflict, we know we will.</p>
                </div> 
                </>
                    )}
            </div>
        </div>
    )
}

export default AboutSama;