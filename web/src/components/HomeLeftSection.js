import React from 'react';
import { Container } from 'react-bootstrap'
import '../App.css'
import StarImg from '../images/star.png'
import {Link} from 'react-router-dom'

export const HomeLeftSection = () => {
    return <div>
        <Container>
            <div style={{
                marginTop: '10%',
                paddingLeft: '20%',
                paddingRight: '20%',
            }} >
                <h1>Password Notes</h1>
                <p style={{
                    marginTop: '3%',
                    fontSize: '1.1rem',
                    marginBottom: '10%',
                    textAlign: 'justify'
                }} >
                    Tired of wasting your time searching for your passwords in a sea of emails and notes? Password Notes lets you securely store your passwords in one place for free.</p>
                <Link to='About' className='home-left-section-read-more-button' >Read More</Link>
            </div>
            <div style={{
                marginTop: '30%',
                paddingLeft: '20%',
                paddingRight: '20%',
            }}>
                <h4>Application Rate</h4>
                <img src={StarImg} height='50px' width='50px' alt='img' />
                <img src={StarImg} height='50px' width='50px' alt='img' />
                <img src={StarImg} height='50px' width='50px' alt='img' />
                <img src={StarImg} height='50px' width='50px' alt='img' />
                <img src={StarImg} height='50px' width='50px' alt='img' />
            </div>
        </Container>
    </div>;
};
