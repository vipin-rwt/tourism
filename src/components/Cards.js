 import React from "react";
 import CardItem from "./CardItem";
 import './Cardsss.css';






export default function Cards(){
return(
 <div className="cards">
        
    <h1>Checkout these EPIC destinations !</h1>
      <div className="cards_container">
       <div className="cards_wrapper">
         <ul className="cards_items" >
           <CardItem  
            src="/img-9.jpg"
            texts="Explore the hidden waterfall deep iside amazon jungle" 
            label="adventure"
            path="/services"
  />

<CardItem
              src="/img-9.jpg"
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/img-5.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/img-9.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
       </ul>
     </div>
   </div>
 </div>

 )
 ;

 }