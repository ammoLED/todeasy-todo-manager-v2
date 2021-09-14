import { MenuAddFoodAction, MenuDeleteFoodAction } from 'store/types/Menu'
import Food from 'types/Food'

// __TYPES__
enum MenuActionTypes {
   MENU_ADD_FOOD = 'MENU_ADD_FOOD',
   MENU_DELETE_FOOD = 'MENU_DELETE_FOOD'
}

export default MenuActionTypes

// __ACTIONS__
export const menuAddFood = (food: Food): MenuAddFoodAction => ({
   type: MenuActionTypes.MENU_ADD_FOOD,
   payload: {food}
})

export const menuDeleteFood = (id: string): MenuDeleteFoodAction => ({
   type: MenuActionTypes.MENU_DELETE_FOOD,
   payload: {id}
})
