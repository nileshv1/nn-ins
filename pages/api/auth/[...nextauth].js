import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    pages: {
        signIn: "/auth/signin"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {

                if(credentials?.username === "abc" && credentials?.password === '1234') {
                    return {
                        user: {
                            name: "ABC",
                            id:'1234',
                            email: "abc@gmail.com",
                        }
                    }
                }

                return null
            }
        })
    ],
}

export default NextAuth(authOptions)