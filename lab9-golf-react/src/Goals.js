import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Goals = () => {

    const [month, setMonth] = useState('• ')
    const [year, setYear] = useState('• ');
    const [life, setLife] = useState('• ');

    const history = useHistory();

    const goBack = (e) => {
        let back = '/Experts';
        history.push(back);
    }

    return ( 
        <div className="goals">
            <h2>Your Goals</h2>
            <div className="month">
                <h3>Goals for This Month</h3>

                <div id="button">
                    <button className="save">Save</button>
                </div>
                {/* <button onClick = {(e) => localStorage.setItem('month', month)}>Save</button> */}
                <textarea name = "text1"
                required
                value={month}
                onChange={(e) => {setMonth(e.target.value)}}
                ></textarea>
                <br /><br /><br />
            </div>
            <div className="year">
                <h3>Goals for This Year</h3>
                <div id="button">
                    <button className="save">Save</button>
                </div>
                <textarea
                required
                value={year}
                onChange={(e) => {setYear(e.target.value)}}
                ></textarea>
                <br /><br /><br />
            </div>
            <div className="life">
                <h3>Lifetime Goals:</h3>
                <div id="button">
                    <button className="save">Save</button>
                </div>
                <textarea
                required
                value={life}
                onChange={(e) => {setLife(e.target.value)}}
                ></textarea>

            </div>
            <br />
            <br />
            <Button id = 'back' type = "submit" onClick = {goBack}>Back</Button>
        </div>
     );
}
 
export default Goals;