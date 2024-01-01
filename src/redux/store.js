import {configureStore, combineReducers} from "@reduxjs/toolkit";
import authReducer from "./slice/Slice";

const rootRrducers = combineReducers({
    auth: authReducer

});
const store = configureStore({
    reducer : rootRrducers
});

export default store;