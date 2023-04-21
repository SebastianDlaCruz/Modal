
import { ContextProps } from "../models/models";
import { Actions } from "../types/type";
export const reducerModel = (state: ContextProps, action: Actions) => {

  switch (action.type) {
    case "SET_OPEN":
      return {
        ...state,
        modal: {
          ...state.modal,
          open: action.payload
        }
      }
    case "PAGE_TURN":
      return {
        ...state,
        modal: {
          ...state.modal,
          pages: action.payload
        }
      }

    case "RESET":
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload
        }
      }

    case "CHANNELS":
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload
        }
      }

    case 'SET_AFFAIR':
      return {
        ...state,
        result: {
          ...state.result,
          affair: action.payload
        }
      }

    case 'SET_MESSAGE':
      return {
        ...state,
        result: {
          ...state.result,
          message: action.payload
        }
      }


    case "SET_STATUS":
      return {
        ...state,
        result: {
          ...state.result,
          status: action.payload
        }
      }

    default:
      return state;
  }
}