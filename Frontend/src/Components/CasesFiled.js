import { useEffect, useState } from 'react';
import '../index.css';
import axios from "axios";
import CountUp from 'react-countup';
import inrformat from 'inrformat';

function CasesFiled(props) {
    const [casesSettled] = useState(false);
    const [filed, setFiled] = useState(11955000);

    const getFiled = () => {
        axios.get('http://localhost:9000/filed')
        .then((response) => {
            const noFiled = response.data.filed;
            setFiled(noFiled+filed);
            console.log(response.data);
        })
        .catch(error => console.error(`Error: $(error)`));
    }

    useEffect(() => {
        getFiled();
    }, []);

    const num =new Intl.NumberFormat('en-us').format(filed);

    return (
        <div className={`panel ${props.onemoreprop || props.act ? "active" : ""}`}  onClick={() => props.click(casesSettled)}>
            <div className='row'>
            {!props.act || !props.onemoreprop ? (<div className='col-sm-1 side1 sides'>
                    <p className="sidetext"  style={{color: '#000' ,animation: 'fadeIn 0.65s'}}>CASES FILED</p>
                </div>) : null}
                {props.onemoreprop || props.act  ? (<>
                <div className='fill' style={{width: '100%', backgroundColor: '#F2F2F2'}}>
                    <p className="header" style={{animation: 'fadeIn 1.05s'}}>CASES FILED</p>
                    <p className="stats" style={{animation: 'fadeIn 1.05s'}}><CountUp preserveValue={true} end={filed} duration={1} formattingFn={(filed) => {return new Intl.NumberFormat('en-IN').format(filed)}} /></p>
                </div>
                </> ) : null}
            </div>
        </div>
    )
}

export default CasesFiled;