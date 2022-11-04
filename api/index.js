import Express from "express";
import Cors from "cors"

const app = Express()

app.use(Express.json())
app.use(Cors())

app.listen(8800)

