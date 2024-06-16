import z from "zod";

const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})


const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>