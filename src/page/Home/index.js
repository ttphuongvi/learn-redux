import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../store/actions/counterAction";

export default function Home() {
  const { counter } = useSelector((state) => state.counter); // lấy biến counter từ store

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleDecrease = () => {
    dispatch(decrease());
  }; // gửi hành động giảm

  const handleIncrease = () => {
    dispatch(increase());
  }; // gửi hành động tăng
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
