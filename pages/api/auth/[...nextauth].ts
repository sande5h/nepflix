import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from '@/lib/prismadb'
import { compare } from 'bcrypt'

export default NextAuth({
    providers: [
        Credentials({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            //Add Logic here to authorize user based on credentials
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password required');
                }

                // Add logic here to look up the user from the credentials supplied
                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                // check if user exist
                if (!user) {
                    throw new Error('Invalid email');
                }

                // check if password is correct
                const isCorrectPassword = await compare(credentials.password, user.hashedPassword);
                // if password is not correct
                if (!isCorrectPassword) {
                    throw new Error('Invalid password');
                }

                // if password is correct
                return user;

            }

        })

    ],
    pages: {
        signIn: '/auth',
    },
    debug: process.env.NODE_ENV === 'development', 
    /*If the expression evaluates to true, it means that 
    the code is running in a development environment, 
    and if it evaluates to false, it means that the code 
    is running in a production or other environment.*/

    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
    //The code is configuration code for the NextAuth.js authentication library.
});