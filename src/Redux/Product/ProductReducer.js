import React from 'react'
import { CREATE_PRODUCT, DELETE_PRODUCT } from './ActionType';

let initialstate={
    products:[]
}

export const ProductReducer = (state=initialstate,{type,payload}) => {
    switch(type) {
        case CREATE_PRODUCT:
            return {...state,products:[...state.products,payload]}

        case DELETE_PRODUCT:
            return {...state,products:state.products.filter((ele) => ele.id!==payload)}
        default:
            return state;
    }
  
}