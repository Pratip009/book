import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { load_UserProfile } from "./actions/userAction";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CricketBallLoader from "./component/layouts/loader/Loader";
import PrivateRoute from "./component/Route/PrivateRoute";

import "./App.css";

import Header2 from "./component/layouts/Header1.jsx/Header2";
import Service from "./component/service/Service";
import Payment from "./component/Cart/Payment";
import Home from "./component/Home/Home";
import Footer from "./component/layouts/Footer/Footer";
import ProductDetails from "./component/Product/ProductDetails";
import Gallery from "./component/service/Gallery";
import Blog from "./component/Home/Blog.jsx";
import Career from "./component/Home/Career.jsx";
import Products from "./component/Product/Products";
import Signup from "./component/User/SignUp";
import Login from "./component/User/Login";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgetPassword from "./component/User/ForgetPassword";
import ResetPassword from "./component/User/ResetPassword";
import Shipping from "./component/Cart/Shipping";
import Cart from "./component/Cart/Cart";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrder from "./component/order/MyOrder";
import ContactForm from "./Terms&Condtions/Contact";
import AboutUsPage from "./Terms&Condtions/Aboutus";
import ReturnPolicyPage from "./Terms&Condtions/Return";
import TermsUse from "./Terms&Condtions/TermsAndUse";
import TermsAndConditions from "./Terms&Condtions/TermsCondtion";
import PrivacyPolicy from "./Terms&Condtions/Privacy";
import Training from "./component/Training/Training";
import School from "./component/SchoolManagement/School.jsx";
import DashboardUser from "./component/SpecialUser/DashboardSpecial.jsx";
import Packages from "./component/SpecialUser/Packages.jsx";
import Chat from "./component/SpecialUser/chat";
import DashboardStaff from "./component/Staff/DashboardStaff.jsx";
import DashboardStaffAddProduct from "./component/Staff/DashboardStaffAddProduct.jsx";
import DashboardStaffOrders from "./component/Staff/DashboardStaffOrders";
import StaffProcessOrder from "./component/Staff/StaffProcessOrder.jsx";
import StaffUserList from "./component/Staff/StaffUserList.jsx";
import StaffProductList from "./component/Staff/StaffProductsList.jsx";
import StaffUpdateProduct from "./component/Staff/StaffUpdateProductList.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

// const LazyPayment = React.lazy(() => import("./component/Cart/Payment"));
const LazyDashboard = React.lazy(() => import("./component/Admin/Dashboard"));
const LazyProductList = React.lazy(() =>
  import("./component/Admin/ProductList")
);
const LazyBlogPost = React.lazy(()=>import ("./component/Admin/BlogPost"));
const LazyOrderList = React.lazy(() => import("./component/Admin/OrderList"));
const LazyAddImage = React.lazy(()=>import("./component/Admin/AddImage.jsx"));
const LazyUserList = React.lazy(() => import("./component/Admin/UserList"));
const LazyAdminContact = React.lazy(() => import("./component/Admin/ContactForm.jsx"));
const LazyUpdateProduct = React.lazy(() =>
  import("./component/Admin/UpdateProduct")
);
const LazyUpdateNews = React.lazy(() => import("./component/Admin/NewsFeed"));
const LazyCreateUser = React.lazy(() => import("./component/Admin/CreateUser"));
const LazyProcessOrder = React.lazy(() =>
  import("./component/Admin/ProcessOrder")
);
const LazyUpdateUser = React.lazy(() => import("./component/Admin/UpdateUser"));
const LazyNewProduct = React.lazy(() => import("./component/Admin/NewProduct"));
const LazyProductReviews = React.lazy(() =>
  import("./component/Admin/ProductReviews")
);

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("test");

  const dispatch = useDispatch();

  // get STRIPE_API_KEY for payment from backend for connection to stripe payment gateway
  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");
      if (
        data.stripeApiKey !== undefined &&
        data.stripeApiKey !== null &&
        data.stripeApiKey !== ""
      ) {
        sessionStorage.setItem(
          "stripeApiKey",
          JSON.stringify(data.stripeApiKey)
        );
      }
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      // Handle error if the API call fails
      console.error("Error fetching Stripe API key:", error);
    }
  }

  useEffect(() => {
    const stripeApiKey = sessionStorage.getItem("stripeApiKey");
    if (stripeApiKey) {
      setStripeApiKey(stripeApiKey);
    } else {
      getStripeApiKey();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(load_UserProfile());

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route
            exact
            path="/staff/dashboardstaff"
            render={() => (
              <>
                <PrivateRoute
                  exact
                  path="/staff/dashboardstaff"
                  component={DashboardStaff}
                />
              </>
            )}
          />
          <Route path="/staff/addproduct">
            <DashboardStaffAddProduct />
          </Route>
          <Route path="/staff/orders">
            <DashboardStaffOrders />
          </Route>
          <Route path="/staff/order/:id">
            <StaffProcessOrder />
          </Route>
          <Route path="/staff/users">
            <StaffUserList />
          </Route>
          <Route path="/staff/products">
            <StaffProductList />
          </Route>
          <Route path="/staff/product/:id">
            <StaffUpdateProduct />
          </Route>
          <Route
            exact
            path="/"
            render={() => (
              <>
                {<Header2 />}
                <Home />
                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/product/:id"
            render={() => (
              <>
                {<Header2 />}
                <ProductDetails />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/products"
            render={() => (
              <>
                {<Header2 />}
                <Products />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/service"
            render={() => (
              <>
                {<Header2 />}
                <Service />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/gallery"
            render={() => (
              <>
                {<Header2 />}
                <Gallery />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/blog"
            render={() => (
              <>
                {<Header2 />}
                <Blog />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/career"
            render={() => (
              <>
                {<Header2 />}
                <Career />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/products"
            render={() => (
              <>
                {<Header2 />}
                <Products />

                {<Footer />}
              </>
            )}
          />

          <Route
            path="/products/:keyword"
            render={() => (
              <>
                {<Header2 />}
                <Products />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/signup"
            render={() => (
              <>
                {<Header2 />}
                <Signup />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/login"
            render={() => (
              <>
                {<Header2 />}
                <Login />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/password/forgot"
            render={() => (
              <>
                {<Header2 />}
                <ForgetPassword />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/password/reset/:token"
            render={() => (
              <>
                {<Header2 />}
                <ResetPassword />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/cart"
            render={() => (
              <>
                {<Header2 />}
                <Cart />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/policy/return"
            render={() => (
              <>
                {<Header2 />}
                <ReturnPolicyPage />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/policy/Terms"
            render={() => (
              <>
                {<Header2 />}
                <TermsUse />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/policy/privacy"
            render={() => (
              <>
                {<Header2 />}
                <PrivacyPolicy />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/terms/conditions"
            render={() => (
              <>
                {<Header2 />}
                <TermsAndConditions />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/contact"
            render={() => (
              <>
                {<Header2 />}
                <ContactForm />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/training"
            render={() => (
              <>
                {<Header2 />}
                <Training />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/school"
            render={() => (
              <>
                {<Header2 />}
                <School />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/about_us"
            render={() => (
              <>
                {<Header2 />}
                <AboutUsPage />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/account"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute exact path="/account" component={Profile} />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/profile/update"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute
                  exact
                  path="/profile/update"
                  component={UpdateProfile}
                />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/specialuser/dashboarduser"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute
                  exact
                  path="/specialuser/dashboarduser"
                  component={DashboardUser}
                />
              </>
            )}
          />
          <Route
            exact
            path="/specialuser/packages"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute
                  exact
                  path="/specialuser/packages"
                  component={Packages}
                />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/specialuser/chat"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute exact path="/specialuser/chat" component={Chat} />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/password/update"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute
                  exact
                  path="/password/update"
                  component={UpdatePassword}
                />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/orders"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute exact path="/orders" component={MyOrder} />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/shipping"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute exact path="/shipping" component={Shipping} />

                {<Footer />}
              </>
            )}
          />
          <Route
            exact
            path="/specialuser"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute
                  exact
                  path="/specialuser"
                  component={DashboardUser}
                />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/order/confirm"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute
                  exact
                  path="/order/confirm"
                  component={ConfirmOrder}
                />

                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/success"
            render={() => (
              <>
                {<Header2 />}
                <PrivateRoute exact path="/success" component={OrderSuccess} />

                {<Footer />}
              </>
            )}
          />
        </Switch>

        {/* Admin Switch */}
        <Suspense fallback={<CricketBallLoader />}>
          <Switch>
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/dashboard"
              component={LazyDashboard}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/contact"
              component={LazyAdminContact}
            />
            <PrivateRoute
            isAdmin={true}
            path="/admin/blog"
            component={LazyBlogPost}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/products"
              component={LazyProductList}
            />

            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/product/:id"
              component={LazyUpdateProduct}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/reviews"
              component={LazyProductReviews}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/news"
              component={LazyUpdateNews}
            />

            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/createuser"
              component={LazyCreateUser}
            />

            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/orders"
              component={LazyOrderList}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/order/:id"
              component={LazyProcessOrder}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/new/product"
              component={LazyNewProduct}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/users"
              component={LazyUserList}
            />
            <PrivateRoute
              isAdmin={true}
              exact
              path="/admin/user/:id"
              component={LazyUpdateUser}
            />
          </Switch>
        </Suspense>

        <Elements stripe={loadStripe(stripeApiKey)}>
          <Route exact path="/process/payment">
            {<Header2 />}
            <PrivateRoute exact path="/process/payment" component={Payment} />
          </Route>
        </Elements>
      </Router>
    </>
  );
}

export default App
