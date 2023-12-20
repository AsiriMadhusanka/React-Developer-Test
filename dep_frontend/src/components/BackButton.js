import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
 const navigate = useNavigate();

 const goBack = () => {
   navigate(-1);
 };

 return (
   <button
   style={{
    backgroundColor: '#0e7dff',
    color: 'white',
    padding: '10px',
    borderRadius: '0px',
    cursor: 'pointer',
    width: '1375px',
    border: 'none',
    textAlign: 'left',
    paddingLeft: '10px',
  }} 
   
   onClick={goBack} className='back-button'>
     Back
   </button>
 );
};

export default BackButton;
