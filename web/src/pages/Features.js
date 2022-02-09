import React from 'react';
import { Col, Row } from 'react-bootstrap'
import FeaturesLeftsection from '../components/FeaturesLeftsection'
import FeaturesRightSection from '../components/FeaturesRightSection'

const Features = () => {
    return <div>
        <Row>
            <Col sm={true}>
                <FeaturesLeftsection />
            </Col>
            <Col>
                <FeaturesRightSection />
            </Col>
        </Row>
    </div>;
};

export default Features;
