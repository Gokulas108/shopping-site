import { ADD_PRODUCT, ADD_CATEGORY } from "../constants/action-types" ;
import { SELECT_CATEGORY } from "../constants/action-types";

export function addProduct(payload){
    return {
        type : ADD_PRODUCT,
        payload
    };
};

export function selectCategory(payload){
    return {
        type : SELECT_CATEGORY,
        payload
    };
};

export function addCategory(payload){
    return {
        type : ADD_CATEGORY,
        payload
    };
};