export type User = {
    id: String;
    name: String;
    imageUri: String;
}

export type Messege = {
    id: String;
    content: string;
    createdAt: string;
}


export type ChatRoom = {
    id: String;
    users: [User];
    lastMessage: Messege;
}