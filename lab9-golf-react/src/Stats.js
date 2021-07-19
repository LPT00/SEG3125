
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

import { useState } from "react";

import Progress from './Progress';

const Stats = () => {

    const [prg, setPrg] = useState('0');

    const [stats, setStats] = useState('Your Stats')
    const [lang, setLang] = useState('Choose your Preferred Language')
    const [score, setScore] = useState('Total Score')
    const [puts, setPuts] = useState('Total Puts')
    const [lost, setLost] = useState('Lost Balls')
    const [left, setLeft] = useState('Shots Hit Left')
    const [right, setRight] = useState('Shots Hit Right')
    const [save, setSave] = useState('Save')
    const [next, setNext] = useState('Next')
    const [back, setBack] = useState('Back')
    const history = useHistory();

    const goNext = (e) => {
        let next = '/Tips';
        history.push(next);
    }
    const goBack = (e) => {
        let back = '/';
        history.push(back);
    }

    return (  
        
        
        <div className="stats">
            <h2>{stats}</h2>
            <br />
            <div id = "language">
                <h3>{lang}</h3>
                
                <label>English</label>
                <input 
                type = "radio"
                name = "lang"
                selected = {true}
                onChange = {(e) => {setNext('Next'); setBack('Back'); setStats('Your Stats'); setSave('Save'); setScore('Total Score'); setPuts('Total Puts'); setLost('Lost Balls'); setLeft('Shots Hit Left'); setRight('Shots Hit Right'); setLang('Choose your Preferred Language')}}
                />
                
                <label>French</label>
                <input 
                type = "radio" 
                name = "lang"
                onChange = {(e) => {setNext('Suivant'); setBack('Dos'); setStats('Vos statistiques'); setSave('Sauvegarder'); setScore('Score total'); setPuts('Total des options de vente'); setLost('Boules perdues'); setLeft('Coups touchés à gauche'); setRight('Coups frappés à droite'); setLang('Choisissez votre langue préférée') }}
                />

                <label>Latvian</label>
                <input 
                type = "radio" 
                name = "lang"
                onChange = {(e) => {setNext('Nākamais'); setBack('Atpakaļ'); setStats('Jūsu Statistika'); setSave('Saglabāt'); setScore('Kopējais rezultāts'); setPuts('Kopā ieliek'); setLost('Zaudētās bumbas'); setLeft('Šāvieni trāpīja pa kreisi'); setRight('Šāvieni trāpīja pa labi'); setLang('Izvēlieties vēlamo valodu') }}
                />
            </div>
            <br />
            <Progress done = {prg} />
            <br />
            <h3>1: {score}</h3>
            <Form.Control type="number" placeholder= "0"/>
            <Button id = 'save' onClick = {(e) => setPrg('20')}> {save} </Button>
            <br />
            <br />
            <h3>2: {puts}</h3>
            <Form.Control type="number" placeholder= "0"/>
            <Button id = 'save' onClick = {(e) => setPrg('40')}> {save} </Button>
            <br />
            <br />
            <h3>3: {left}</h3>
            <Form.Control type="number" placeholder= "0"/>
            <Button id = 'save' onClick = {(e) => setPrg('60')}> {save} </Button>
            <br />
            <br />
            <h3>4: {right}</h3>
            <Form.Control type="number" placeholder= "0"/>
            <Button id = 'save' onClick = {(e) => setPrg('80')}> {save} </Button>
            <br />
            <br />
            <h3>5: {lost}</h3>
            <Form.Control type="number" placeholder= "0"/>
            <Button id = 'save' onClick = {(e) => setPrg('100')}> {save} </Button>
            <br />
            <br />
            <Button id = 'next' type = "submit" onClick = {goNext}>{next}</Button>
            <Button id = 'back' type = "submit" onClick = {goBack}>{back}</Button>
        </div>
    );
}
export default Stats;