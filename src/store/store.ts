import { configureStore } from "@reduxjs/toolkit";

import { navSlice } from "./nav-slice";
import { authSlice } from "./auth-slice";

export const store = configureStore({
    reducer: {
        navSlice: navSlice.reducer,
        authSlice: authSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
