export const storageName = "userData";

export interface IUser {
  id: number;
  name: string;
  src: string;
  email: string;
  skype: string;
  user_status: string;
  active: boolean;
  nickname: string;
  isOnline : boolean;
}

export interface IChannel {
  id : number,
  name : string,
  active : boolean
}

export interface IMessage {
  id: number;
  text: string;
  from: number;
  fromName: string;
  to_user: number;
  to_channel: number;
  is_send: number;
  type: string;
  timeStamp: number;
  author_src: string;
}

export interface IConnect {
  userId: number;
  type: string;
}

export interface IChatTab {
  key: string;
  name: string;
  active: boolean;
}

export enum CellType {
  empty = 0, //пусто
  ship = 1, //корабль
  miss = 2, //промах
  shot = 3, //попадение в корабль
  near = 4 //ячейка, рядом с которой находится корабль, недоступна для установки корабля
}

export interface ICell {
  id : string,
  row: number;
  col: number;
  affil : number;
  type: CellType;
}


export interface IShot {
  cellId : string;
  from : number;
  to_user : number;
  type : string
}

