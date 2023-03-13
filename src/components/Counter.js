import React from "react";
import PropTypes from "prop-types";

function Counter({ counter, handleIncrease, handleDecrease }) {
  return (
    <>
      <h2>Learn to Redux</h2>
      <div>
        <button onClick={handleDecrease}>-</button> {counter}{" "}
        <button onClick={handleIncrease}>+</button>
      </div>
    </>
  );
}

Counter.propTypes = {
  counter: PropTypes.number, // lấy biến counter từ store
  handleIncrease: PropTypes.func, // gửi hành động tăng
  handleDecrease: PropTypes.func, // gửi hành động giảm
};

export default Counter;
