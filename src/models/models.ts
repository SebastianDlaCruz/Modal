export interface typeMessage {
  name: string;
  value: string;
}

export interface ModalBox {
  nameBox: string;
  type: string;
  contentInfo: typeMessage[];
  pages: number;
  open: boolean;
}

export interface ResetProps {
  nameBox: string;
  type: string;
  contentInfo: typeMessage[];
  pages: number;

}



export interface ChangeToChannelProps {
  nameBox: string;
  type: string;
  contentInfo: typeMessage[];

}


export interface ResultProp {
  affair: string,
  message: string
  status: boolean
}

export interface TypePropsInput {
  message: string,
  type: string,
}



export interface ContextProps {
  result: ResultProp;
  modal: ModalBox

}