import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useSelectorTyped } from 'hooks'

import Food from 'types/Food'

import Card, { Field } from 'components/Card'

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

         {menu.map((food: Food) => {
            return (
               <Card item={food} title={food.name} price={food.price}>
                  <Field<Food> field="callories" label="Callories" />
                  <Field<Food> field="isVegan" label="For Vegan" />
               </Card>
            )
         })}
      </>
   )   
}

export default MenuPage
