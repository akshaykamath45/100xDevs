const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000 || process.env.PORT;
app.get("/", async (req, res) => {
  res.send("Backend server working!");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
