import MenuActionTypes from '../actions/menuActions'
import Food from 'types/Food'


// __STATE__
export interface MenuState {
   menu: Food[]
}


// __ACTIONS__
export interface MenuAddFoodAction {
   type: MenuActionTypes.MENU_ADD_FOOD
   payload: {
      food: Food
   }
}

export interface MenuDeleteFoodAction {
   type: MenuActionTypes.MENU_DELETE_FOOD
   payload: {
      id: string
   }
}

export type MenuActions = MenuAddFoodAction | MenuDeleteFoodAction