import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from 'react';
import UserContextResult from '../context/UserContextResult';
import channels from '../data/channels.data';
import UseSettingModal from '../hooks/UseSettingModal';
import { TypePropsInput } from '../models/models';
import BoxContainer from './BoxContainer';
const initialMessage: TypePropsInput = {
  type: '',
  message: '',
}

const Modal = () => {


  const { state, dispatch } = useContext(UserContextResult);
  const { messageType, handleClickInput } = UseSettingModal();

  const handleSubmit = (event: React.SyntheticEvent) => {

    event.preventDefault();

    dispatch({
      type: 'SET_AFFAIR',
      payload: messageType.message
    })

    dispatch({
      type: 'PAGE_TURN',
      payload: state.modal.pages + 1
    })

    dispatch({
      type: 'CHANNELS',
      payload: {
        nameBox: 'Selección de canales',
        contentInfo: channels,
        type: 'checkbox'
      }
    })

  }

  return (
    <Dialog open={state.modal.open}>

      <form onSubmit={handleSubmit}>
        {(state.modal.pages === 4)
          ? (
            <Box sx={{
              display: "flex",
              gap: "12px",
              padding: "2em"
            }}>
              <Button onClick={() => {
                dispatch({
                  type: 'PAGE_TURN',
                  payload: state.modal.pages - 1
                })
              }} variant="outlined" size="medium">Cancelar</Button>
              <Button type="submit" variant="contained" size="medium">Enviar</Button>
            </Box>)
          :
          (
            <>
              <DialogTitle>{state.modal.nameBox}</DialogTitle>
              <BoxContainer
                handleClickInput={handleClickInput}
                message={messageType.message}
                type={messageType.type} />
            </>
          )}

      </form>
    </Dialog>
  )
}

export default Modal
