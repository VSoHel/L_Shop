import { readJSON, writeJSON } from '../utils/fileStorage';
import { User } from '../types/user.types';
import { v4 as uuid } from 'uuid';

const USERS_PATH = '../database/users.json';
export const registerUser = (data: Omit<User, 'id'>): User => {
    const users: User[] = readJSON(USERS_PATH);
    const newUser: User = {
        id: uuid(),
        ...data
    };
    users.push(newUser);
    writeJSON(USERS_PATH, users);

    return newUser;
};

export const loginUser = (email: string, password: string, phone: string): User | null => {
    const users: User[] = readJSON(USERS_PATH);
    return users.find(u => u.email === email && u.password === password && u.phone === phone) || null;
};