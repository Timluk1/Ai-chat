export interface IMessage {
    id: string;
    from: "user" | "ai";
    name: string;
    message: string;
}

// предполагается, что это данные из API и они идут в порядке пользователь -> ai
export const messages: IMessage[] = [

];

