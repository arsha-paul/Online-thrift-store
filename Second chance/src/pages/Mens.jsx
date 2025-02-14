import React from 'react'
import '../components/Popular/Popular.css'
import data_product2 from '../components/assets/data2'
import Item from '../components/Item/Item'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
function Mens() {
  return (
    <>
    <Navbar />
    <div className='popular mt-5'>
        
<h1>BEST OFF ALL</h1> 
<h4>ENJOY 40% OFF | USE CODE: VACAY40</h4>
<hr />
<div className="popular-item">
    {data_product2.map((item,i)=>{
        return( 

          <div key={i}>
              <Item
                ide={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
       
            </div>




            
        )

    })}
</div>
    </div>

    
    <Link to={'/'} >
        
            <p className='para'>CLICK HERE</p>
        
     </Link>
    </>
  )
}

export default Mens