import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import Shots from './images/Shot.jpg';
import Puts from './images/Put.jpg';
import OB from './images/Ob.jpg'
//This is the home page, which has the list of blogs
const Home = () => {

  const history = useHistory();

  const goNext = (e) => {
      let next = '/Stats';
      history.push(next);
  }

  return (
    <div className="home">
      <h2>Welcome to <i><u>VictoryGolfTracker.io!!</u></i></h2>
      <br />
      <div id = "About">
        <h3>About Us</h3>
        <br />
        <p>Our mission is to give people of <b>all skill levels </b>
          who play golf a simple website where they can <b>track
           down</b> their <b>strengths and weaknesses</b> and find <b>useful help</b> to better their game.</p> 
           <br /> 
      </div>
      <br />
      <div id = "About">
        <h3>What You Can do!</h3>
        <div id = "ToDo">
        <ListGroup variant = "flush">
          <ListGroup.Item><p><b>1. <u> Track In-Game Stats:</u></b></p>  
          <br />
            <p>Enter your in-game score, puts, shots hit left and right, and balls lost in the <u>'Stats'</u> section of our website.</p> </ListGroup.Item>
            <br />
            <ListGroup.Item><p><b>2. <u> Look at useful Tips:</u></b></p>  
          <br />
            <p>Based on your in-game stats, read through <u>'Tips'</u> section to try to improve your weaknesses.</p> </ListGroup.Item>
            <br />
            <ListGroup.Item><p><b>3. <u> Contact Golf Experts:</u></b></p>  
          <br />
            <p>Contact some of the world's best golfers in the <u>'Experts'</u>section. They will give you extremely useful advice 
            and will analyze your stats and tell you specific tips and secret to improve your game.</p> </ListGroup.Item>
            <br />
            <ListGroup.Item><p><b>4. <u> Make Goals:</u></b></p>  
          <br />
            <p>Write up some goals in the <u>'Goals'</u> section our website. You can make goals for this month, this year, and lifetime goals in order to monitor your improvements.</p> </ListGroup.Item>

        </ListGroup>

        </div>
        
        <br />
      </div>
      <br />
      <Button id = 'start' type = "submit" onClick = {goNext}>START TRACKING!</Button>
      <br />
      <br />
      <div id = "About">
        <h3>Commonly Used Golf Terms:</h3>
        <br />
        <div id = "ToDo">
        <img src={Shots} alt="logo" style={{width:475}}/>
        <br />
          <br />
          <p><b>Hit Left:</b> Pull hook, hook, pull (Orange icons on the left)</p> 
          <br />
          <p><b>Hit Right:</b> Push slice, clice, push (Orange icons on the right)</p> 
          <br />
          <p><b>Score:</b> Ever time you hit the ball + penalty strokes (additional strokes after you lose a ball) </p> 
          <br />
          </div>
          
          <br />
          <div id = "ToDo">
          <img src={OB} alt="logo" style={{width:475}}/>
          <br />
          <p><b>Lost balls:</b> When you hit a shot and can not find your ball so you have to hit a new one on the next shot</p> 
          <br />
          </div>
          <br />
          <div id = "ToDo">
          <img src={Puts} alt="logo" style={{width:475}}/>
          <p><b> Puts: </b>Hitting the ball on the 'green' near the hole</p> 
          <br />
          </div>
          <br />
      </div>
      <br />
      <div id = "Contact">
        <h3><u>Contact Us</u></h3>
        <p><b><i>Location: </i></b>100 Pine Drive </p>
        <p>Augusta, Georgia, M1M 1M1</p>   
        <br /> 
        <p><b><i>Phone: </i></b>(416) 000-0000</p>       
        <br />
        <p><b><i>Email: </i></b>info@vgt.ca</p> 
        <br />
      </div>
      <br />
      
    </div>
  );
}
 
export default Home;