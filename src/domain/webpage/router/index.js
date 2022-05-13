import ContactRoute from "../contact/router";
import ProductsRoute from "../products/router";
import UsRoute from "../us/router";
import HomeRoute from "../home/router"


export default [
    ContactRoute,
    ...ProductsRoute,
    UsRoute,
    HomeRoute
]
