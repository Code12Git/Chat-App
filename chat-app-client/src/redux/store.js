import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./auth/reducer";
  
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
  let rootReducer = combineReducers({
    auth:authReducer
  });
  
  let store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;