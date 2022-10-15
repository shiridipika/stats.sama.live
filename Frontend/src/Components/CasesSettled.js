import axios from "axios";
import { useEffect, useState } from 'react';
import '../index.css';
import CountUp from 'react-countup';

function CasesSettled(props) {

    const [casesSettled] = useState(false);
    const [settled, setSettled] = useState(2226000);

    const getSettled = () => {
        axios.get('http://localhost:9000/settled')
        .then((response) => {
            const noSettled = response.data.settled;
            setSettled(noSettled+settled);
            console.log(response.data);
        })
        .catch(error => console.error(`Error: $(error)`));
    }

    useEffect(() => {
        getSettled();
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getSettled();
    //     }, 2000)
    // }, []);
    
    return (
        <div className={`panel ${props.act ? "active" : ""}`}  onClick={() => props.click(casesSettled)}>
            <div className='row'>
            {!props.act && (
                <div className='side2 sides col-sm-1'>
                    <p className="sidetext" style={{animation: 'fadeIn 0.65s'}}>CASES SETTLED</p>
                </div>)}
                {props.act  && (<>
                    <div className='sides' style={{backgroundColor: '#737373', color: '#f2f2f2', width: '4.55%'}}>
                    <p className="sidetext">CASES SETTLED</p>
                </div>
                    <div className='fill' style={{width: '95.45%', backgroundColor: '#737373'}}>
                    <p className="header" style={{animation: 'fadeIn 1.05s', color: '#f2f2f2'}}>CASES SETTLED</p>
                    <p className="stats" style={{animation: 'fadeIn 1.05s', color: '#f2f2f2'}}><CountUp preserveValue={true} end={settled}  formattingFn={(settled) => {return new Intl.NumberFormat('en-IN').format(settled)}} duration={1} /></p>
                </div> 
                </>)}
            </div>
        </div>
        )
    
}

export default CasesSettled;