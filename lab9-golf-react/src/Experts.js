import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Phil from './images/Phil.jpg';
import Tiger from './images/Tiger.jpg';
import Rory from './images/Rory.jpg';
import { CardGroup } from 'react-bootstrap';
// import Calendar from 'react-calendar';
import { useState } from "react";
import { useRef } from "react";
// import { getElementById } from 'domutils';
// import Tooltip from 'react-bootstrap/Tooltip'
// import Overlay from 'react-bootstrap/Overlay'
import { useHistory } from "react-router-dom";
import Confirm from './Confirm';

const Experts = () => {
    const [date1, newd1] = useState('Date 1');
    const [date2, newd2] = useState('Date 2');

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const history = useHistory();

    const goNext = (e) => {
        let next = '/Goals';
        history.push(next);
    }
    const goBack = (e) => {
        let back = '/Tips';
        history.push(back);
    }

    //confirmation 
    // const tmp = document.getElementById("expert").value;
    // const tmp2 = document.getElementById("booking").value;

    return ( 
        <div className="experts">
            <h2>Your Experts</h2>
            <CardGroup>
                <Card border = "dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src = {Tiger}/>
                <Card.Body>
                    <Card.Title><b>Tiger</b></Card.Title>
                    <br />
                    <Card.Text>
                    15 Time Major Champion, 82 Time PGA Tour Winner
                    </Card.Text>
                    <br />
                    <Card.Text>
                    <u>Strengths:</u> Putting (Putter), Approach Shots (Short Irons)
                    </Card.Text>
                    {/* <Button onClick = {(e) => getElementById('tiger')} variant="primary">Book a lesson with Tiger</Button> */}
                </Card.Body>
                </Card>

                <br />
                <br />

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {Phil} />
                <Card.Body>
                    <Card.Title><b>Phil</b></Card.Title>
                    <br />
                    <Card.Text>
                    6 Time Major Champion, 45 Time PGA Tour Winner 
                    </Card.Text>
                    <br />
                    <Card.Text>
                    <u>Strengths:</u> Hitting bombs (Driver), Chipping (Wedges)
                    </Card.Text>
                    {/* <Button variant="primary">Book a lesson with Phil</Button> */}
                </Card.Body>
                </Card>

                <br />
                <br />

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Rory} />
                <Card.Body>
                    <Card.Title><b>Rory</b></Card.Title>
                    <br />
                    <Card.Text>
                    4 Time Major Champion, 19 Time PGA Tour Winner 
                    </Card.Text>
                    <br />
                    <Card.Text>
                    <u>Strengths:</u> Breaking the sound barrier with his ball (Driver), Long Iron shots
                    </Card.Text>
                    {/* <Button variant="primary">Book a lesson with Rory</Button> */}
                </Card.Body>
                </Card>
            </CardGroup>
            <br />
            <br />
            <br />

            <h2>Book a Video Chat!</h2>
            <Form onSubmit = {(e) => {window.confirm('Thank you for booking a call with: ' + document.getElementById("expert").value + ' on ' + document.getElementById("booking").value 
    + '\n \n' + 'We will get back to you shortly at: ' + document.getElementById("email").value)}}>
                {/* <Form.Select>
                    <option>Choose an Expert</option>
                    <option value = "Tiger">Tiger</option>
                    <option value = "Phil">Phil</option>
                    <option value = "Rory">Rory</option>
                </Form.Select> */}
                <Form.Label><i>Select Your Expert:</i></Form.Label>
                <br />
                <p>Tiger</p>
                <input
                id = "expert"
                value = "Tiger Woods"
                type = "radio"
                name = "expert"
                onChange = {(e) => {newd1('July 24, 2021 5:00pm'); newd2('July 25, 2021 6:00pm')}}
                />
                <p> Phil </p>
                <input
                id = "expert"
                value = "Phil Mickelson"
                type = "radio"
                name = "expert"
                onChange = {(e) => {newd1('July 26, 2021 2:00pm'); newd2('July 27, 2021 3:00pm')}}
                />
                <p> Rory </p>
                <input
                id = "expert"
                value = "Rory Mcilroy"
                type = "radio"
                name = "expert"
                onChange = {(e) => {newd1('July 28, 2021 11:00am'); newd2('July 29, 2021 12:00pm')}}
                />
                <br />
                <br />

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><i>Email address:</i></Form.Label>
                <br />
                <Form.Control id = "email" type="email" placeholder="Enter email..." />
                <Form.Text className="text-muted">
                    Format: ( xxxx@xxxx.xxxx )
                </Form.Text>
                </Form.Group>
                <br />
                <br />
                <Form.Label><i>Select a Date:</i></Form.Label>
                <br />
                <p> {date1} </p>
                <input
                id = "booking"
                value = {date1}
                type = "radio"
                name = "date"
                selected = {true}
                />
                <p> {date2} </p>
                <input
                id = "booking"
                value = {date2}
                type = "radio"
                name = "date"
                selected = {true}
                />
                <br />
                <br />
                <Button id = "submit" type = "submit">
                    Submit
                </Button>
                {/* <h4>{thanks}</h4> */}
            </Form>
            <br />
            <br />
            <Button id = 'next' type = "submit" onClick = {goNext}>Next</Button>
            <Button id = 'back' type = "submit" onClick = {goBack}>Back</Button>
        </div>
     );
}
 
export default Experts;