import NotFound from "./NotFound"
import Sections      from "./Sections"
import SectionsTodos from "./SectionsTodos"


// Endpoints
export const SECTIONS_ROUTE       = '/'
export const SECTIONS_TODOS_ROUTE = '/:sectionTitle'
export const NOT_FOUND_ROUTE      = ''



// __Routes__
interface IRoute {
   path: string
   Component: React.FC
}

const routes: IRoute[] = [
   {
      path: SECTIONS_ROUTE,
      Component: Sections
   },
   {
      path: SECTIONS_TODOS_ROUTE,
      Component: SectionsTodos
   },
   {
      path: NOT_FOUND_ROUTE,
      Component: NotFound
   }
]

export default routes