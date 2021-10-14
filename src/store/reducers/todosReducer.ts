import { CategoriesAction } from "store/actions/categoriesActions"
import { Todo } from "types"

interface TodosState {
    all: Todo[]
}

const initialState: TodosState = {
    all: []
}

const todosReducer = (state = initialState, action: CategoriesAction): TodosState => {
    switch(action.payload) {
        
        default: return state
    }
}

export default todosReducer