import React from 'react';
import { Container } from 'react-bootstrap'
import Key from '../images/key.png'
import DataBase from '../images/database.png'
import Shield from '../images/shield.png'

const AboutRightSection = () => {
    return <div>
        <Container className='text-center'>
            <div style={{
                paddingLeft: '20%',
                paddingRight: '20%',
            }} >
                <h2 style={{ marginTop: '25%', }}>Password Notes</h2>
                <p style={{ marginTop: '5%', fontSize: '1.5rem',textAlign: 'justify' }}>
                    Often, we forget passwords because we can't remember them all.
                    Even worse, some sites require you to use different passwords for different logins. The password manager,
                    Password Notes solves the problem! It's open source and secure. Just do a quick search for the site you want
                    to log in to and copy the password from the Password Notes list.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10%' }} >
                <img src={Key} height='100px' width='100px' alt='img' />
                <img src={DataBase} height='100px' width='100px' alt='img' />
                <img src={Shield} height='100px' width='100px' alt='img' />
            </div>
            </div>
        </Container>
    </div>;
};

export default AboutRightSection;
