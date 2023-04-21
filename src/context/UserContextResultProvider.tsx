
import { useReducer } from "react"
import { reducerModel } from "../utilities/util"
import UserContextResult, { initialState } from "./UserContextResult"

interface Props {
  children: JSX.Element | JSX.Element[]
}

const UserContextResultProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(reducerModel, initialState)
  return (
    <UserContextResult.Provider value={{ state, dispatch }}>
      {children}
    </UserContextResult.Provider>
  )
}

export default UserContextResultProvider
