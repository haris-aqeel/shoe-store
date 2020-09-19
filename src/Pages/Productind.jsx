import React from 'react'
import Navbar1 from '../Components/Navbar1'
import ShoesDetails from '../data/ShoesDetails'
import ShoesList from '../data/ShoesList';

const Productind = () => {
    const link = window.location.href;
    
    for (let i = 0; i <link.length; i++){
         if (link.slice(i,i+9) === '/product/') {

            switch (link.slice(i+9,)[0]){
                case '1':
                    
                   var case1 = ShoesDetails.filter((curr)=>curr.id == link.slice(i+9,)[2] )
                   
                   break
                case '2':
                     
                    var case1 = ShoesList.filter((curr)=>curr.id == link.slice(i+9,)[2] )
                   break

            }
            
            } 
    }
         return (
        <div>
            <Navbar1 case={case1}/> 
            
        </div>
    )
}

export default Productind
