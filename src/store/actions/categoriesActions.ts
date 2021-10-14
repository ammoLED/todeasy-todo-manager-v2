
import Category from "types/Category";

export enum CategoriesActionTypes {
    ADD_CATEGORY    = 'ADD_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY'
}

// ADD_CATEGORY
interface AddCategoryAction {
    type: CategoriesActionTypes.ADD_CATEGORY,
    payload: {
        category: Category
    }
}

export const addCategory = (category: Category): AddCategoryAction => ({
    type: CategoriesActionTypes.ADD_CATEGORY,
    payload: {
        category
    }
})
// /ADD_CATEGORY


// DELETE_CATEGORY
interface DeleteCategoryAction {
    type: CategoriesActionTypes.DELETE_CATEGORY,
    payload: {
        title: Category["title"]
    }
}

export const deleteCategory = (title: Category["title"]): DeleteCategoryAction => ({
    type: CategoriesActionTypes.DELETE_CATEGORY,
    payload: {
        title
    }
})
// /DELETE_CATEGORY


export type CategoriesAction = AddCategoryAction | DeleteCategoryAction

