import NotFound      from './NotFound'
import Categories    from './Categories'
import CategoryTodos from './CategoryTodos'


// Endpoints
export const CATEGORIES_ROUTE       = '/'
export const CATEGORY_TODOS_ROUTE = '/:categoryTitle'
export const NOT_FOUND_ROUTE      = ''



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
   },
   {
      path: NOT_FOUND_ROUTE,
      Component: NotFound
   }
]

export default routes