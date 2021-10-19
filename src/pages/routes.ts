import NotFound      from "./NotFound"
import Dashboard     from "./Dashboard"
import Projects      from "./Projects"
import ProjectTasks  from "./ProjectTasks"


// Endpoints
export const DASHBOARD_ROUTE      = "/dashboard"
export const PROJECTS_ROUTE       = "/projects"
export const PROJECT_TASKS_ROUTE  = "/projects/:projectTitle"
export const NOT_FOUND_ROUTE      = ""



// __Routes__
interface IRoute {
   path: string
   Component: React.FC
}

const routes: IRoute[] = [
   {
      path: DASHBOARD_ROUTE,
      Component: Dashboard
   },
   {
      path: PROJECTS_ROUTE,
      Component: Projects
   },
   {
      path: PROJECT_TASKS_ROUTE,
      Component: ProjectTasks
   },
   {
      path: NOT_FOUND_ROUTE,
      Component: NotFound
   }
]

export default routes