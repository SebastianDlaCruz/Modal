import { useContext, useEffect, useState } from 'react';
import UserContextResult, { initialState } from '../context/UserContextResult';
import { TypePropsInput } from '../models/models';
const initialMessage: TypePropsInput = {
  type: '',
  message: '',
}

const UseSettingModal = () => {
  const [messageType, setMessageType] = useState<TypePropsInput>(initialMessage);
  const { state, dispatch } = useContext(UserContextResult);

  const handleClickInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type } = event.target;
    setMessageType({
      type,
      message: value
    })

  }

  const handlePageTurn = () => {

    if (state.modal.pages === 0) {
      dispatch({ type: 'SET_OPEN', payload: false });
      dispatch({ type: 'PAGE_TURN', payload: state.modal.pages + 1 });
    }

    if (state.modal.pages === 1) {
      const { contentInfo, nameBox, pages, type } = initialState.modal;
      dispatch({ type: 'RESET', payload: { contentInfo, nameBox, pages, type } });
    }




    if (state.modal.pages === 5
      && state.result.affair !== ''
      && state.result.message !== '') {
      dispatch({ type: 'SET_STATUS', payload: true });
    }

    if (state.modal.pages === 5) {
      dispatch({ type: 'RESET', payload: { ...initialState.modal } });
    }

    if (messageType.type === 'checkbox'
      && messageType.message === 'Mensaje de texto') {
      dispatch({
        type: 'PAGE_TURN',
        payload: state.modal.pages + 1
      })
    }

  };

  useEffect(() => {
    handlePageTurn();
  }, [state.modal.pages]);



  return {
    messageType,
    handleClickInput
  }

}

export default UseSettingModal
