import React from 'react'
import Navbar from '../Components/Navbar'
import ShoesDetails from '../data/ShoesDetails'


const Home = () => {
    return (
        <div>
            <Navbar data={ShoesDetails}/>
        </div>
    )
}

export default Home
