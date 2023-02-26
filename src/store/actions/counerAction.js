import { DECREASE, INCREASE } from "../constants/actionTypes";

// action tăng
const increase = () => {
    return {
        type: INCREASE,
    };
};

// action giảm
const decrease = () => {
    return {
        type: DECREASE,
    };
};

export { increase, decrease };