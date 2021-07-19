import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Video from "./Video";
import Putting from './images/putstroke.png'

const Tips = () => {

    const history = useHistory();

    const goNext = (e) => {
        let next = '/Experts';
        history.push(next);
    }
    const goBack = (e) => {
        let back = '/Stats';
        history.push(back);
    }
    
    return ( 
        <div className="tips">
            <h2>Your Tips</h2>
            <br />
            <div id = "tip">
            <div id = "content">
                <h3>Hit it STRAIGHTER and LOSE LESS BALLS</h3>
                <br />
                <div id = "ToDo">
                <Video embedId="qiCE1lm2PGU" />
                </div>
                </div>
            <br /> 
            <div id = "content">
                    <h3>How to have a PERFECT PUTTING STROKE</h3>
                    <br />
                    <div id = "ToDo">
                    <img src={Putting} alt="logo" style={{width:475}}/>
                    </div>
            <br /> 
            </div>
            <br />
            <div id = "content">
                    <h3>SHOTS shots that will LOWER YOUR SCORE</h3>
                    <br />
                    <div id = "ToDo">
                    <Video embedId="EmgzbEtpZq0" />
                    </div>
            <br /> 
           </div>
      </div>
            <br />
            <br />
            <Button id = 'next' type = "submit" onClick = {goNext}>Next</Button>
            <Button id = 'back' type = "submit" onClick = {goBack}>Back</Button>
        </div>
     );
}
 
export default Tips;