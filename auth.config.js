
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "@/data/user";
//import { RegisterSchema } from "@/schemas";

export default {
    providers: [
      Credentials({
        async authorize( credentials ) {
          if (!credentials || !credentials.email) {
            throw new Error("Email is required");
          }
  
          const user = await getUserByEmail(credentials.email);
          return user;
        },
      }),
    ],
  };
  
  