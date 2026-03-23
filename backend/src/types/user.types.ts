export interface User {
    id: string | number;
    name: string;
    email?: string;
    phone?: string;
    password: string;
}