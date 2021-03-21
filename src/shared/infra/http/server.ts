import app from "./app";
import env from '../../../config/index'

let host = env.HOST || 'http://localhost'
let port = env.PORT || '8080'

app.server.listen(env.PORT, () => {
    console.info(`⚡️⚡️⚡️[ABSOLUT-PSYCO_API]: Server is running at ${host}:${port}`)
})
