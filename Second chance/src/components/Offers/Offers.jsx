import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/kds12.png'
function Offers() {
  return (
    <div className='offers'> 
<div className="offers-left">
<h1 className='exclusive'>Exclusive</h1>
<h1>Offers For KIDS</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
</div>
<div className="offers-right">
<img src={exclusive_image} alt="" />
</div>

    </div>
  )
}

export default Offers