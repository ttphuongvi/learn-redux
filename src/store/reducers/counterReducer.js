import { DECREASE, INCREASE } from "../constants/actionTypes";

const initState = {
  counter: 0, // khởi tạo biến counter = 0
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state, // giữ nguyên các biến còn lại (sau này innit state sẽ có nhiều biến hơn)
        counter: state.counter + 1, // tăng biến counter lên 1
      };
    case DECREASE:
      return {
        ...state, // giữ nguyên các biến còn lại (sau này innit state sẽ có nhiều biến hơn)
        counter: state.counter - 1, // giảm biến counter xuống 1
      };
    default:
      return state;
  }
};

export default counterReducer;
