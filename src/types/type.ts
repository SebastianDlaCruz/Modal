import { ChangeToChannelProps, ModalBox } from "../models/models";
export type Actions =
  { type: "SET_OPEN"; payload: boolean }
  | { type: "SET_MESSAGE"; payload: string; }
  | { type: "PAGE_TURN"; payload: number }
  | { type: "CHANNELS"; payload: ChangeToChannelProps }
  | { type: "SET_AFFAIR"; payload: string }
  | { type: "SET_STATUS"; payload: boolean }
  | { type: "RESET"; payload: ModalBox };