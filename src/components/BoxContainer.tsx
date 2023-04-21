
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import UserContextResult from '../context/UserContextResult';
import { TypePropsInput } from '../models/models';
import Mensaje from './Mensaje';

interface Props extends TypePropsInput {
  handleClickInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const BoxContainer = ({ message, type, handleClickInput }: Props) => {

  const { state, dispatch } = useContext(UserContextResult);

  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "content",
        padding: "39px"
      }}>

        {state.modal.pages === 3
          ? (<Mensaje message={message} type={type} />)
          : (<>
            {
              state.modal.contentInfo.map((item, index) => (
                <Box key={index}
                  sx={{
                    display: 'flex', gap: "12px",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px", padding: "10px 23px"
                  }}>
                  <input type={state.modal.type} value={item.value}
                    name={item.name}
                    onChange={handleClickInput}
                  />
                  <label htmlFor={item.value}>{item.value}</label>
                </Box>))
            } </>)}
      </Box>

      <Box sx={{
        display: "flex",
        gap: "12px",
        justifyContent: "center"
      }}>
        <Button onClick={() => {
          dispatch({
            type: 'PAGE_TURN',
            payload: state.modal.pages - 1
          })
        }} variant="outlined" size="medium">Cancelar</Button>
        <Button type="submit" variant="contained" size="medium">Siguiente</Button>
      </Box>
    </>
  )
}

export default BoxContainer
