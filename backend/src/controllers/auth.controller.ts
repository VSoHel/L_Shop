import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export const register = (req: Request, res: Response) => {
    const user = registerUser(req.body);

    res.cookie('userId', user.id, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000
    });
    res.json(user);
};

export const login = (req: Request, res: Response) => {
    const { email, password, phone } = req.body;
    const user = loginUser(email, password, phone);

    if (!user) {
      return res.status(401).json({ message: 'Неверные учетные данные' });
    }

    res.cookie('userId', user.id, {
      httpOnly: true,
      maxAge: 10 * 60 * 1000
    });

    res.json(user);
};