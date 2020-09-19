import React from 'react'
import Navbar from '../Components/Navbar'
import ShoesList from '../data/ShoesList'

const Products = () => {
    return (
        <div>
            <Navbar ShoesList={ShoesList}/>
            
        </div>
    )
}

export default Products
