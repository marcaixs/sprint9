import React from 'react'

export const Header = () => {
    return(
       <header>
        <div className='menu'>
            <box-icon name='menu'></box-icon>
        </div>
        <ul>
            <li>
                <a href='#'>HOME</a>
            </li>
            <li>
                <a href='#'>Products</a>
            </li>
        </ul>
        <div className='cart'>
            <box-icon name='cart'></box-icon>
            <span className='item_total'>0</span>
        </div>
       </header>
    )
}