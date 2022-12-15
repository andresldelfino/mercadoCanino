import React from 'react'
import Card from './Card'

const CardList = (props) => {
  return (
<section className='h-screen '>
  
  <ul className="flex flex-col flex-wrap content-center justify-center mx-auto md:flex-row md:w-4/12">
    {
      
      props.products.map(product=><Card key={product.id} product={product} alt={ product.alt}/> )
  
      
    }
  </ul>
</section>
  )
}

export default CardList
