import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ALBOOM_LOAD_START,
    ALBOOM_LOAD_SUCCESS,
    FOTOS_DELETE,
    FOTOS_LOAD_START,
    FOTOS_LOAD_SUCCESS
} from "./Constants/Constant";

const initialState={
    fotos:[],
    albooms:[],
    foto_loaded:false,
    alb_loaded:false
};
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case `FOTOS_LOAD_START`:
            return {...state,foto_loaded: true}
        case `FOTOS_LOAD_SUCCESS`:
            return {...state,fotos: action.payload,foto_loaded: false}
        case `ALBOOM_LOAD_START`:
            return {...state,alb_loaded: true}
        case `ALBOOM_LOAD_SUCCESS`:
            return {...state,albooms: action.payload,alb_loaded: false}
        case `FOTOS_DELETE`:
            return {...state,fotos: state.fotos.filter(item=>{
                if(item.id===action.payload){
                    return false
                }
                return true
                })}
        default:return state
    }
};
const store=createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

