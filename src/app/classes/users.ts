export class User {
    id: number;
    email: string;
    password: string;
    salt?: string;
    isAdmin: boolean
    resetPassword: boolean
    clientId: string;
    locationId: string;
    imageUrl?: string;
}