import { createContext } from 'react';
import message from '../data/message.data';
import { ContextProps } from '../models/models';
import { Actions } from '../types/type';

export const initialState: ContextProps = {
  result: {
    affair: '',
    message: '',
    status: false,
  },

  modal: {
    nameBox: 'Selección de tipo de mensaje',
    type: 'radio',
    contentInfo: message,
    pages: 1,
    open: false,


  }
}

const UserContextResult = createContext<{
  state: ContextProps,
  dispatch: React.Dispatch<Actions>
}>({
  state: initialState,
  dispatch: () => null
})

export default UserContextResult;