import {TypeOf,z} from "zod"

export const addUser = z.object({
    body:z.object({
        username:z.string({
            required_error:"username is required",
            invalid_type_error:"username is invalid"
        }).max(20, "username should be less than 20 characters")
          .min(2,"username should be more than 2 characters"),
          password:z.number({
            required_error:"password is required",
            invalid_type_error:"password is invalid",
        }),
        age:z.number({
            required_error:"age is required",
            invalid_type_error:"age is invalid"
        }),
        joiningYear:z.string({
            required_error:"joiningYear is required",
            invalid_type_error:"joiningYear is invalid",
        }),
        email:z.string({
            required_error:"username is required",
            invalid_type_error:"username is invalid"
        }).email()
    })
})


export type addNewMovietypeschema = TypeOf<typeof addUser>["body"];
