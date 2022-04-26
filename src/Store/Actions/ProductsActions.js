import {CUSTOMER_ADD_REVIEW} from '../../Const/ActionTypes';

export const addReview = (customerReview) => {
    return {
        type: CUSTOMER_ADD_REVIEW,
        customerReview: customerReview
    }
};