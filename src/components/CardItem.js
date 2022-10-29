import React from "react";
import { Link } from "react-router-dom";
export default function CardItem(props){
  
         return(

            <>
              <li className="card_item">
                <Link className="card_item_link" to={props.path}>
                    <figure className="card_item_pic-wrap" data-category={props.label}>

                        <img src={props.src} alt="Travel Imge" className="cards_item_img" />
                      

                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards_items_text" >
                          {props.texts||props.text}
                            </h5>
                        
                      
                    </div>
                </Link>
              </li>
              
              
              </>

         );
}