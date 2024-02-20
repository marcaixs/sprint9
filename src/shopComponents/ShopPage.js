import React from 'react';
import {Header} from './Header'
import {ProductList} from './ProductList'
import '../Shop.css'

export const ShopPage = () =>{
    return(
        <div>
            <Header/>
            <ProductList/>
        </div>
    )
}