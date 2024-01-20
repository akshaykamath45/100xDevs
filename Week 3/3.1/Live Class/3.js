const zod=require("zod")


const schema=zod.array(zod.string())
function validateInput(arr){
    const response=schema.safeParse(arr)
    console.log(response)
    console.log(response.success)
}

validateInput(["12","13"])