import MenuPage from './MenuPage'
import OfferPage from './OfferPage'

export const MENU_ROUTE:  string = '/'
export const OFFER_ROUTE: string = '/offer'



// __Routes__
interface IRoute {
   path: string
   Component: React.FC
}

export const publicRoutes: IRoute[] = [
   {
      path: MENU_ROUTE,
      Component: MenuPage
   },
   {
      path: OFFER_ROUTE,
      Component: OfferPage
   }
]