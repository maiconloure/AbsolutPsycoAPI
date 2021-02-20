import app from "./app";

app.listen(process.env.PORT, () => {
    console.info(`⚡️⚡️⚡️[ABSOLUT-PSYCO_API]: Server is running at http://${process.env.PORT}:${process.env.PORT}`)
})
