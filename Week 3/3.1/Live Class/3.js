const zod=require("zod")


const schema=zod.array(zod.string())
function validateInput(arr){
    const response=schema.safeParse(arr)
    console.log(response)
    console.log(response.success)
}

validateInput(["12","13"])


const userSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(5),
    country:zod.literal("IN").or(zod.literal("US"))
})
function validateUser(user){
    const response=userSchema.safeParse(user)
    console.log(response)
}

const user={
    email:"sample@gmail.com",
    password:"12345",
    country:"IN"
}

validateUser(user)