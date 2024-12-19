interface IBaseMessage {
    from: "ai" | "user";    
    name: string;     
    message: string;   
}

export interface IMessage extends IBaseMessage {
    id: string;
}

export type INewMessage = Omit<IMessage, "id"> & {
    chatId: string;
};
