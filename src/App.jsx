import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Builds from "./pages/Builds";
import NotFound from "./pages/404/NotFound";
import Layout from "./pages/Layout";
import ObjectPage from "./pages/Residential";
import Main from "./pages/Main/Main";
import Rewiew from "./pages/Review/Rewiew";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import MyAds from "./pages/MyAds";
import AddEstate from "./pages/AddEstate/AddEstate";
import AddEstate1 from "./pages/AddEstates/AddEstate";
import CardsOutlet from "./pages/MyAds/CardsOutlet";
import Support from "./pages/SupportPage/Support";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="catalog">
            <Route path="hotel" element={<Builds name="отели" type={1} />} />
            <Route
              path="appartment"
              element={<Builds name="квартиры" type={2} />}
            />
            <Route path="house" element={<Builds name="дома" type={3} />} />
          </Route>
          <Route path="property/add" element={<AddEstate />} />
          <Route path="property/add321" element={<AddEstate1 />} />
          <Route path="property/add" element={<AddEstate />} />
          <Route path="property/:id" element={<ObjectPage />} />
          <Route path="review" element={<Rewiew />} />
          <Route path="personal_account" element={<MyAds />}>
            <Route path="ads" element={<CardsOutlet />} />
            <Route path="change-password" element={<p>change-password</p>} />
            <Route path="subscription" element={<p>subscription</p>} />
            <Route path="support" element={<Support />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
