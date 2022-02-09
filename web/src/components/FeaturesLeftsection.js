import React from 'react';
import Shining from '../images/shining.png'

const FeaturesLeftsection = () => {
  return <div>
    <div style={{
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '25%',
    }} >
      <div style={{display: 'flex',}} >
          <img src={Shining} height='30px' width='30px' alt='img'/>
          <p style={{
            fontSize: '1.2rem',
            marginLeft: '3%'
            }} > 
            Your data is safe on your own device
            </p>
      </div>
      <div style={{display: 'flex',}} >
          <img src={Shining} height='30px' width='30px' alt='img'/>
          <p style={{
            fontSize: '1.2rem',
            marginLeft: '3%'
            }} > 
            Keep your passwords organized
            </p>
      </div>
      <div style={{display: 'flex',}} >
          <img src={Shining} height='30px' width='30px' alt='img'/>
          <p style={{
            fontSize: '1.2rem',
            marginLeft: '3%'
            }} > 
            User friendly with a simple and convenient interface
            </p>
      </div>

    </div>
  </div>;
};

export default FeaturesLeftsection;
