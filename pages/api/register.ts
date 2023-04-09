import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // check if method is POST and return error if not
    if (req.method !== 'POST') {
        return res.status(405).end().json({ message: 'Invalid method' });
    }

    try {
        // get email and password from request body
        const { email,name, password } = req.body;
        
        // check if email and password exist
        const existinguser = await prismadb.user.findUnique({
            where: {
                email: email
            }
        })
        // check if user exist with email
        if (existinguser) {
            return res.status(405).json({ message: 'Email Taken' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        // create user
        const user = await prismadb.user.create({
            data: {
                email,
                hashedPassword,
                name,
                image: '',
                emailVerified: new Date(),
                
            }
        })
        return res.status(200).json(user);

    }
    catch (error) {
        return res.status(400).end().json({ message: 'Invalid request' });
    }

}