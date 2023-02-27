import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrease, increase } from './store/actions/counerAction';

function App() {
  const {counter} = useSelector((state) => state.counter); // lấy biến counter từ store 

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleDecrease = () => {
    dispatch(decrease()); 
  }; // gửi hành động giảm

  const handleIncrease = () => {
    dispatch(increase()); 
  }; // gửi hành động tăng

  return (
    <div className="App">
     <h2>Learn to Redux</h2>
     <div>
      <button onClick={handleDecrease}>-</button> {counter} <button onClick={handleIncrease}>+</button>
     </div>
    </div>
  );
}

export default App;
