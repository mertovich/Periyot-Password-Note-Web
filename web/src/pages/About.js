import React from 'react';
import { Row, Col } from 'react-bootstrap'
import AboutLeftSection from '../components/AboutLeftSection';
import AboutRightSection from '../components/AboutRightSection';


const About = () => {
    return <div>
        <Row>
            <Col sm={true} >
                <AboutLeftSection />
            </Col>
            <Col>
                <AboutRightSection />
            </Col>
        </Row>
    </div>;
};

export default About;
