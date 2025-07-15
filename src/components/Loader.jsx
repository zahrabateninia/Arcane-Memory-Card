 import React from 'react'
 import './Loader.css'
 import { CircleLoader } from 'react-spinners';
 
 const Loader = () => {
   return (
    <div className="loader-container">
      <CircleLoader color="#F4E1D2" size={120} />
      <p>Loading...</p>
    </div>
   )
 }
 
 export default Loader
 