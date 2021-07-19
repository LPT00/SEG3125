import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Video from "./Video";
import Putting from './images/putstroke.png';
import Iron from './images/Irons.jpg';

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

            <h3><u>Tip for:</u></h3> 
            <h3>{"• >"} 5 Lost balls</h3>
            <h3>{"• >"} 20 Shots hit left/right</h3>

            <div id = "content">
                <h4>Hit it STRAIGHTER and LOSE LESS BALLS</h4>
                <br />
                <div id = "ToDo">
                <Video embedId="qiCE1lm2PGU" />
                </div>
                <br />
            </div>
            <br />

            <h3><u>Tip for:</u></h3> 
            <h3>{"• >"} 80 Total Score</h3>

            <div id = "content">
                    <h4>SHOTS shots that will LOWER YOUR SCORE</h4>
                    <br />
                    <div id = "ToDo">
                    <Video embedId="EmgzbEtpZq0" />
                    </div>
            <br /> 
           </div>
            <br /> 

            <h3><u>Tip for:</u></h3> 
            <h3>{"• >"} 36 Puts</h3>

            <div id = "content">
                    <h4>How to have a PERFECT PUTTING STROKE</h4>
                    <br />
                    <div id = "ToDo">
                    <img src={Putting} alt="logo" style={{width:475}}/>
                    </div>
            <br /> 
            </div>
            <br />

            <h3><u>Tip for:</u></h3> 
            <h3>{"• >"} 10 Shots hit left/right with irons</h3>
            <h3>{"• "}Struggling with hitting irons solid</h3>

            <div id = "content">
                    <h4>A simple drill to HIT your IRONS BETTER</h4>
                    <br />
                    <div id = "ToDo">
                    <img src={Iron} alt="logo" style={{width:475}}/>
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