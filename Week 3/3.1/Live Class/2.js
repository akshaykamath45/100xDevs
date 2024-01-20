const express = require("express");
const app = express();
const zod = require("zod");

app.use(express.json()); // helps in post request for extracting json data from the body

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hospital Management");
});

const schema = zod.array(zod.number());

//zod schema for use

// {
//   email: string=>email
//   password:atleast 8 characters
//   country:"IN","US"
// }

const userSchema = zod.object({
  email: zod.string(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number()),
});


// input validation
app.post("/health-checkup", (req, res) => {
  // kidney is an array and can have only size as 2 - > [1,2]

  // user could pass any thing in body , it could be a number , object,string,anything
  // so we need a input validation here

  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  const kidneyLength = kidneys.length;
  console.log(`You have ${kidneyLength} kidneys`);
  if (!response.success) {
    res.status(411).json({ msg: "Invalid Input" });
  }
  res.json({ response: response, message: `You have ${kidneyLength} kidneys` });
});

// global catches - > error handling middleware , takes 4 inputs, placed at last . exception is hidden.
app.use((err, req, res, next) => {
  res.json({
    message: "Sorry,something is up with our server",
  });
  console.log(err);
  console.log(err.stack);
});
