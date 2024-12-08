import { IChat } from "models/chat";

interface IBaseMessage {
    chat: IChat;      
    from: "ai" | "user";    
    name: string;     
    message: string;   
}

export interface IMessage extends IBaseMessage {
    id: string;    
}

export type INewMessage = Omit<IMessage, "id">;
