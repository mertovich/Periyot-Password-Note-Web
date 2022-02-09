import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { HomeLeftSection } from '../components/HomeLeftSection';
import HomeRightSection from '../components/HomeRightSection';

const Home = () => {
  return <div>
    <Row>
      <Col sm={true} >
        <HomeLeftSection />
      </Col>
      <Col>
        <HomeRightSection />
      </Col>
    </Row>
  </div>;
};

export default Home;
