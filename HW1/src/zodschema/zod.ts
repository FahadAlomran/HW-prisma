import {TypeOf,z} from "zod"

export const addMovie = z.object({
    body:z.object({
        movieTitle:z.string({
            required_error:"movieTitle is required",
            invalid_type_error:"movieTitle is invalid"
        }).max(20, "movieTitle should be less than 20 characters")
          .min(2,"movieTitle should be more than 2 characters"),
          rating:z.number({
            required_error:"rating is required",
            invalid_type_error:"rating is invalid",
        }),
        duration:z.number({
            required_error:"duration is required",
            invalid_type_error:"duration is invalid"
        }),
        genre:z.string({
            required_error:"genre is required",
            invalid_type_error:"genre is invalid",
        })
    })
})

export const UMovie = z.object({
    body:z.object({
        id:z.string({
            required_error:"id is required",
            invalid_type_error:"id is invalid"
        }),
        movieTitle:z.string({
            required_error:"movieTitle is required",
            invalid_type_error:"movieTitle is invalid"
        }).max(20, "movieTitle should be less than 20 characters")
          .min(2,"movieTitle should be more than 2 characters"),
          rating:z.number({
            required_error:"rating is required",
            invalid_type_error:"rating is invalid",
        }),
        duration:z.number({
            required_error:"duration is required",
            invalid_type_error:"duration is invalid"
        }),
        genre:z.string({
            required_error:"genre is required",
            invalid_type_error:"genre is invalid",
        })
    })
})
export type addNewMovietypeschema = TypeOf<typeof addMovie>["body"];
export type UMovietypeschema = TypeOf<typeof UMovie>["body"];