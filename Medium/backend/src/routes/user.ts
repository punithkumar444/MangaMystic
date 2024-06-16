import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign } from 'hono/jwt'
import {signinInput,signupInput} from '../zod'
export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();


userRouter.post('/signup', async (c) => {
	const body = await c.req.json();
    const parsedbody = signupInput.safeParse(body);

    if (!parsedbody.success) {
        console.log(parsedbody.error.issues); // Log the specific validation errors
        c.status(411);
        return c.json({
            message: "Inputs not correct",
            errors: parsedbody.error.issues // Optionally send back the validation errors
        });
    }
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
				name:body.name
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
        console.log(e);
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})



userRouter.post('/signin', async (c) => {
	const body = await c.req.json();
	const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    try{
        const user = await prisma.user.findUnique({
		where: {
			email: body.email,
			password:body.password
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
	}catch(e){
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }	
})
