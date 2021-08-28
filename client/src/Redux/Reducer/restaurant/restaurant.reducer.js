import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

const INITIAL_STATE = {
  restaurants: [],
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return {
        ...state,
        restaurants: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;