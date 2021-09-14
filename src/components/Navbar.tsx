
import React from 'react'
import { Link } from 'react-router-dom'

import { MENU_ROUTE, OFFER_ROUTE } from 'pages/routes'

const Navbar: React.FC = () => {

   return (
      <nav>        
         <div className="container">
            <div className="nav-wrapper">
               <Link to={MENU_ROUTE} className="brand-logo right">
                  <i className="material-icons">cloud</i>
                  Infinite Cloud
               </Link>
               
               <ul id="nav-mobile" className="left">
                  <li><Link to={MENU_ROUTE}>Menu</Link></li>
                  <li><Link to={OFFER_ROUTE}>Offer</Link></li>
               </ul>
            </div>
         </div>
      </nav>
   )   
}

export default Navbar