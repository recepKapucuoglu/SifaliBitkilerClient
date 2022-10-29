import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getAllBitkiReducer } from "./adminBitkiReducers";
import { getAllEtkiReducer } from "./adminEtkiReducers";

const composeErhancers = composeWithDevTools({});
const finalReducers = combineReducers({
  getAllEtkiReducer: getAllEtkiReducer,
  getAllBitkiReducer: getAllBitkiReducer,
});
const store = createStore(
  finalReducers,
  composeErhancers(applyMiddleware(thunk))
);

export default store;
