import React from 'react'
import './Popular.css'
import data_product2 from '../assets/data2'
import Item from '../Item/Item'
function PopularMen() {
  return (
    <div className='popular mt-5'>
<h1>POPULAR FOR MENS</h1>
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



  )
}

export default PopularMen