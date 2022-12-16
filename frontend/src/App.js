import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
import styled from 'styled-components';

const ChangeValueButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  color: #fff;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 1rem;
`;

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValueButton
            aria-label="increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </ChangeValueButton>
          <ChangeValueButton
            aria-label="decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
