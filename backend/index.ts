import express from "express";
import cors from "cors";

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

let count = 0;

app.get('/', (req, res) => {
    res.send(count);
})

app.post("/add", (req, res) => {
    const { toAdd } = req.body;

    if (typeof toAdd === "number" && Number.isSafeInteger(toAdd)) {
        count = count + toAdd;
    }

    res.send(count);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})