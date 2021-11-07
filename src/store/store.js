
import { configureStore } from "@reduxjs/toolkit";

import monsterReducer from "./slices/monsterSlice";

const reducer = {
    monster: monsterReducer
};


const store = configureStore({
    reducer
});


export default store;