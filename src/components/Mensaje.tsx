import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import UserContextResult from '../context/UserContextResult';
import { TypePropsInput } from "../models/models";
const Mensaje = ({ message, type }: TypePropsInput) => {

  const { dispatch } = useContext(UserContextResult);

  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: 'SET_MESSAGE', payload: event.target.value })

  if (type === 'checkbox' && message === 'Correo Electronico') {
    return (
      <>
        <h2>{message}</h2>
        <label>Asunto</label>
        <Input type='text' placeholder='Escribe...' />
        <TextField label='Mensaje' placeholder='Escribe...' onChange={handleMessage} />

      </>
    )
  } else {
    return (
      <>
        <h2>{message}</h2>
        <TextField label='Mensaje' placeholder='Escribe...' rows={6} onChange={handleMessage} />
      </>
    )
  }
}

export default Mensaje
