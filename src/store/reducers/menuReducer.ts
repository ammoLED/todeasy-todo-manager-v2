import { MenuState, MenuActions } from 'store/types/Menu'

import MenuActionTypes from "store/actions/menuActions";

const initialState: MenuState  = {
   menu: []
}

const menuReducer = (state = initialState, action: MenuActions): MenuState => {
   switch(action.type) {
      case MenuActionTypes.MENU_ADD_FOOD: {
         return {
            menu: [
               action.payload.food,
               ...state.menu
            ]
         }
      }

      case MenuActionTypes.MENU_DELETE_FOOD: {
         
         const foodIdx = state.menu.findIndex(food => food.id === action.payload.id)

         return {
            menu: [
               ...state.menu.slice(0, foodIdx),
               ...state.menu.slice(0, foodIdx)
            ]
         }
      }

      default: return state
   }
}

export default menuReducer