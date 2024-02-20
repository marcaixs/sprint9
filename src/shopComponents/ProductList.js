import React from 'react'

export const ProductList = () => {
    return(
        <>
        <h1 className='title'>Products</h1>
        <div className='products'>
            <div className='product'>
                <img/>
            </div>
            <div className='product_footer'>
                <h1>Title</h1>
                <p>Description</p>
                <p className='price'>Price</p>
                <button className='btn'>Add to the cart</button>
            </div>
            
        
        </div>
     
        <a href='#'>View item</a>
        </>

    )
}