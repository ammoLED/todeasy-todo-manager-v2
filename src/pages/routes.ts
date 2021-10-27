import Categories from "pages/Categories"
import CategoryTodos from "pages/CategoryTodos"


// Endpoints
export const CATEGORIES_ROUTE = "/"
export const CATEGORY_TODOS_ROUTE = "/:categoryTitle"


// __Routes__
interface IRoute {
   path: string
   Component: React.FC
}

const routes: IRoute[] = [
   {
      path: CATEGORIES_ROUTE,
      Component: Categories
   },
   {
      path: CATEGORY_TODOS_ROUTE,
      Component: CategoryTodos
   }
]

export default routes