// imports
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import prisma from "@/libs/prisma";

// Providers
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { signInEmailPassword } from "@/auth/actions/auth-actions";

// Extend Session and User types to include 'id'
declare module "next-auth" {
    interface Session {
        user: {
            id?: string | undefined;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
    interface User {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET_ID ?? "",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "user@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "******" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password)
                    throw new Error("Email and password are required");

                const user = await signInEmailPassword(credentials.email, credentials.password);
                return user || null;
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async signIn({ user }) {
            if (!user.email) return false;
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }

            if (!token.email) {
                console.error("No email found in token");
                return token;
            }



            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
            }
            return session;
        }
    }, pages: {
        signIn: "/auth/signin",
    },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
