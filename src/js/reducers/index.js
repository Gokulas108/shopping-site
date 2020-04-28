import { ADD_PRODUCT } from "../constants/action-types";
import { SELECT_CATEGORY } from "../constants/action-types";
import { ADD_CATEGORY } from "../constants/action-types";

const initialState = {
    selectedCategory : "",
    categories : ["Mobiles","Laptops","Speakers","Headsets"],
    products : [
        {
            name : 'X2312',
            brandName : 'Nokia',
            description : "desc",
            category : 'Mobiles',
            price : 11999
        },
        {
            name : 'Mi 9',
            brandName : 'Redmi',
            description : "desc",
            category : 'Mobiles',
            price : 21999
        },
        {
            name : 'X15 15"',
            brandName : 'DELL',
            description : "desc",
            category : 'Laptops',
            price : 51999
        },
        {
            name : 'QWERTY',
            brandName : 'HP',
            description : "desc",
            category : 'Laptops',
            price : 83999
        },
        {
            name : 'Flip',
            brandName : 'JBL',
            description : "desc",
            category : 'Speakers',
            price : 3999
        },
        {
            name : 'Airpods',
            brandName : 'Apple',
            description : "desc",
            category : 'Headsets',
            price : 24999
        },{
            name : 'BL123',
            brandName : 'Sony',
            description : "desc",
            category : 'Headsets',
            price : 1999
        },
    ]
};

function rootReducer(state = initialState, action){

    switch(action.type){
        
        case ADD_PRODUCT :
            return {
                ...state,
                products : [...state.products, action.payload]
            } ;

        case SELECT_CATEGORY :
            return {
                ...state, selectedCategory : action.payload
            } ;
        
        case ADD_CATEGORY :
            return {
                ...state,
                categories : [...state.categories, action.payload]
            } ;    
        
        default :
            return state ;
    }
    
};

export default rootReducer ;