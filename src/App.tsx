import Button from '@mui/material/Button';
import { useContext } from 'react';
import './App.css';
import Modal from './components/Modal';
import UserContextResult from './context/UserContextResult';

function App() {

  const { state, dispatch } = useContext(UserContextResult);
  const handlerOpen = () => dispatch({ type: 'SET_OPEN', payload: true });
  const result = JSON.stringify(state.result);

  return (
    <div className="App">
      <Modal />
      <Button onClick={handlerOpen} variant="contained" size="medium">Abrir</Button>
      {
        (state.result.status) ? (
          <>
            <h2>Resultado:</h2>
            <pre>
              {result}
            </pre>
          </>
        ) : (null)
      }
    </div>
  )
}

export default App
