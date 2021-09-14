import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectorTyped } from 'hooks'
import { menuAddFood } from 'store/actions/menuActions'

const MenuPage: React.FC = () => {

   const dispatch = useDispatch()
   const menu = useSelectorTyped(state => state.menu.menu)

   useEffect(() => {
      dispatch(menuAddFood({
         id: 'dfdf',
         callories: 345,
         isVegan: true,
         name: 'dfdf',
         price: 4343
      }))


      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   
   return (
      <>
         <h1>Menu</h1>

         {menu.map(food => {
            return (
               
               <div className="col s12 m7">
                  <div className="card">
                     <div className="card-image">
                     <img src="images/sample-1.jpg" alt={food.name}/>
                     <span className="card-title">{food.name}</span>
                     </div>
                     <div className="card-content">
                        <p>Callories: {food.callories}</p>
                        <p>Vegan: {food.isVegan}</p>
                     </div>
                     <div className="card-action">
                        Price: {food.price}
                     </div>
                  </div>
               </div>
            )
         })}
      </>
   )   
}

export default MenuPage
