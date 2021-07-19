import {Link} from "react-router-dom"

const Error = () => {
    return ( 
        <div className="error">
            <h1>Oops!</h1>
            <br />
            <h4>That page does not exist.</h4>
            <br />
            <Link to="/" id = 'backHome'>Click here to go back to the Home Page...</Link>
        </div>
     );
}
 
export default Error;