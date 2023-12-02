import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

import { NavLayout } from "./layouts/NavLayout";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MyPage from "./pages/MyPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import RestaurantPage from "./pages/RestaurantPage";
import ReservationPage from "./pages/ReservationListPage";

export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<NavLayout />}>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/auth/signin" element={<AuthPage.SignIn />} />
                    <Route path="/auth/signup" element={<AuthPage.SignUp />} />
                    <Route path="/auth/findid" element={<AuthPage.FindID />} />
                    <Route path="/auth/findpw" element={<AuthPage.FindPW />} />

                    <Route path="/mypage" element={<MyPage />} />

                    <Route path="/restaurant/list" element={<RestaurantListPage />} />
                    <Route path="/restaurant/:id" element={<RestaurantPage />} />

                    <Route path="/reservation/create" element={<ReservationPage />} />
                    <Route path="/reservation/find" element={<HomePage />} />
                </Route>
            </Routes>
        </Provider>
    );
}
