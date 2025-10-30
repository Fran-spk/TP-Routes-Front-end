export interface user{
    id: number,
    name: string,
    username: string,
    email: string,
    permissionLevel: permissionLevel[]
}

export type permissionLevel='admin'|'user';