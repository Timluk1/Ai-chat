export interface IMessage {
    id: string;
    from: "user" | "ai";
    name: string;
    message: string;
}
