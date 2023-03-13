import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../../components/Counter";
import { increase, decrease } from "../../store/actions/counterAction";

export default function HomePage() {
  const { counter } = useSelector((state) => state.counter); // lấy biến counter từ store

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleDecrease = () => {
    dispatch(decrease());
  }; // gửi hành động giảm

  const handleIncrease = () => {
    dispatch(increase());
  }; // gửi hành động tăng
  return (
    <Counter
      counter={counter}
      handleDecrease={handleDecrease}
      handleIncrease={handleIncrease}
    />
  );
}
