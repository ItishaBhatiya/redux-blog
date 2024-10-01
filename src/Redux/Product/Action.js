import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "./ActionType"

export const addProduct = (porduct) =>{
    return{
        type : CREATE_PRODUCT,
        payload: porduct,
    }
}

export const deleteProduct = (id)=>{
    return{
        type : DELETE_PRODUCT,
        payload: id
    }
}

export const updateProduct = (id,porduct)=>{
    return{
        type : UPDATE_PRODUCT,
        payload:{
            id:id,
            porduct:porduct
        }
    }
}
