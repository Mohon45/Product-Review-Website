import {CUSTOMER_ADD_REVIEW} from '../../Const/ActionTypes';

const initialState = {
    customerReviews: []
};


const addReview = (state,{customerReview}) => {
    const updateCustomerReview = [...state.customerReviews];
    updateCustomerReview.unshift(customerReview);

    return {
        customerReviews: updateCustomerReview
    }
}


const ProductsReducer = (state = initialState, action) => {
    switch (action.type){
        case CUSTOMER_ADD_REVIEW:
            return addReview(state, action);
        default:
            return state;
    }
}

export default ProductsReducer;