import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "../component/Admin/Dashboard";
import ProductList from "../component/Admin/ProductList";
import OrderList from "../component/Admin/OrderList";
import UpdateProduct from "../component/Admin/UpdateProduct";
import ProcessOrder from "../component/Admin/ProcessOrder";
import UpdateUser from "../component/Admin/UpdateUser";
import NewProduct from "../component/Admin/NewProduct";
import ProductReviews from "../component/Admin/ProductReviews";
import PrivateRoute from "../component/Route/PrivateRoute";
import UserList from "../component/Admin/UserList";
import UpdateNews from "../component/Admin/NewsFeed";
import CreateUser from "../component/Admin/CreateUser";

const Admin = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />

        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={ProductList}
        />

        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/product/:id"
          component={UpdateProduct}
        />

        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/reviews"
          component={ProductReviews}
        />
        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/news"
          component={UpdateNews}
        />

        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/orders"
          component={OrderList}
        />
        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/order/:id"
          component={ProcessOrder}
        />

        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/new/product"
          component={NewProduct}
        />

        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={UserList}
        />
        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/createuser"
          component={CreateUser}
        />
        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />
      </Switch>
    </Router>
  );
};
export default Admin;
